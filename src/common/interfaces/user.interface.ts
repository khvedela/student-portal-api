import { ApiProperty } from '@nestjs/swagger';

export class UserResponse {
  @ApiProperty({ example: '1', required: false })
  id?: string;

  @ApiProperty({ example: 'gaga', required: false })
  username?: string;

  @ApiProperty({ example: '555123456', required: false })
  phoneNumber?: string;

  @ApiProperty({ example: 'admin', enum: ['admin', 'student'] })
  userType: 'admin' | 'student';
}

export interface User {
  id?: string;
  username?: string;
  phoneNumber?: string;
  userType: 'admin' | 'student';
}
