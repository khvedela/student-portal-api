import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { DatabaseService } from '../database/database.service';
import { LoginDto } from './dto/login.dto';
import { LoginResponseDto } from './dto/login-response.dto';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private databaseService: DatabaseService,
  ) {}

  async validateAdmin(loginDto: LoginDto): Promise<LoginResponseDto> {
    const { username, password } = loginDto;

    if (username !== 'gaga' || password !== 'gagagaga') {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = { username, userType: 'admin' };
    const access_token = this.jwtService.sign(payload);

    return {
      access_token,
      user: {
        username,
        userType: 'admin',
      },
    };
  }

  async validateStudent(loginDto: LoginDto): Promise<LoginResponseDto> {
    const { username: phoneNumber, password } = loginDto;

    const student = await this.databaseService.findStudentByPhone(phoneNumber);
    if (!student) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const correctPassword = `${phoneNumber}${student.string_field_0}`;
    if (password !== correctPassword) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = {
      sub: student.id,
      phoneNumber,
      userType: 'student',
    };

    return {
      access_token: this.jwtService.sign(payload),
      user: {
        id: student.id,
        phoneNumber,
        userType: 'student',
      },
    };
  }
}
