import { ApiProperty } from '@nestjs/swagger';

export class LoginResponseDto {
  @ApiProperty({ example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...' })
  access_token: string;

  @ApiProperty({
    example: {
      id: '1',
      username: 'gaga',
      userType: 'admin',
    },
  })
  user: {
    id?: string;
    username?: string;
    phoneNumber?: string;
    userType: 'admin' | 'student';
  };
}
