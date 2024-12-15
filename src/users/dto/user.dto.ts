export class UserDto {
  id?: string;
  username?: string;
  phoneNumber?: string;
  userType: 'admin' | 'student';
}