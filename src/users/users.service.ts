import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../database/database.service';

@Injectable()
export class UsersService {
  constructor(private databaseService: DatabaseService) {}

  async getStudentProfile(phoneNumber: string): Promise<any> {
    return this.databaseService.getStudentData(phoneNumber);
  }

  async getAllStudents(): Promise<any[]> {
    return this.databaseService.getAllStudents();
  }
}
