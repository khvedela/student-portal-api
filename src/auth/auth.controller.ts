import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { LoginResponseDto } from './dto/login-response.dto';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiOperation({ summary: 'Admin login' })
  @ApiResponse({
    status: 200,
    description: 'Successful login',
    type: LoginResponseDto,
  })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @Post('admin/login')
  async adminLogin(@Body() loginDto: LoginDto): Promise<LoginResponseDto> {
    return this.authService.validateAdmin(loginDto);
  }

  @ApiOperation({ summary: 'Student login' })
  @ApiResponse({
    status: 200,
    description: 'Successful login',
    type: LoginResponseDto,
  })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  @Post('student/login')
  async studentLogin(@Body() loginDto: LoginDto): Promise<LoginResponseDto> {
    console.log(loginDto);
    return this.authService.validateStudent(loginDto);
  }
}
