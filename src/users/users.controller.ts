import { Controller, Get, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CurrentUser } from '../common/decorators/user.decorator';
import { User } from '../common/interfaces/user.interface';
import {
  ApiBearerAuth,
  ApiTags,
  ApiOperation,
  ApiResponse,
} from '@nestjs/swagger';

@ApiTags('Users')
@ApiBearerAuth()
@Controller('users')
@UseGuards(JwtAuthGuard)
export class UsersController {
  constructor(private usersService: UsersService) {}

  @ApiOperation({ summary: 'Get user profile' })
  @ApiResponse({
    status: 200,
    description: 'Returns the user profile',
  })
  @Get('profile')
  async getProfile(@CurrentUser() user: User) {
    if (user.userType === 'student') {
      return this.usersService.getStudentProfile(user.phoneNumber);
    }
    return user;
  }

  @ApiOperation({ summary: 'Get all students (Admin only)' })
  @ApiResponse({
    status: 200,
    description: 'Returns list of all students',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden resource',
  })
  @Get('students')
  async getAllStudents(@CurrentUser() user: User) {
    if (user.userType !== 'admin') {
      return { message: 'Unauthorized' };
    }
    return this.usersService.getAllStudents();
  }
}
