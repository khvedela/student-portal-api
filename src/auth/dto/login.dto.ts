import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({ example: 'gaga', description: 'Username or phone number' })
  @IsString()
  @IsNotEmpty()
  username: string;

  @ApiProperty({ example: 'gagagaga', description: 'Password' })
  @IsString()
  @IsNotEmpty()
  password: string;
}
