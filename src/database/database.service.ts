import { Injectable, OnModuleInit } from '@nestjs/common';
import { BigQuery } from '@google-cloud/bigquery';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class DatabaseService implements OnModuleInit {
  private bigQuery: BigQuery;

  constructor(private configService: ConfigService) {}

  async onModuleInit() {
    try {
      // Match exactly the Python configuration
      const credentials = this.configService.get('google.credentials');

      this.bigQuery = new BigQuery({
        credentials: credentials,
        projectId: 'intense-crow-427010-r5',
        scopes: [
          'https://www.googleapis.com/auth/bigquery',
          'https://www.googleapis.com/auth/cloud-platform',
          'https://www.googleapis.com/auth/drive',
        ],
      });
    } catch (error) {
      console.error('BigQuery initialization error:', error);
      throw error;
    }
  }

  async findStudentByPhone(phoneNumber: string) {
    // Use the exact same query as Python version
    const query = `
      SELECT string_field_0, string_field_4
      FROM \`intense-crow-427010-r5.HUBOFMISTAKES.1 ბაზა დუბლიკატი\`
      WHERE string_field_4 = '${phoneNumber}'
      LIMIT 1
    `;

    try {
      const [rows] = await this.bigQuery.query({ query });
      return rows[0] || null;
    } catch (error) {
      console.error('Find Student Error:', error);
      throw error;
    }
  }

  async getStudentData(phoneNumber: string) {
    const query = `
        SELECT *
        FROM \`intense-crow-427010-r5.HUBOFMISTAKES.1 ბაზა დუბლიკატი\`
        WHERE string_field_4 = '${phoneNumber}'
            LIMIT 1
    `;

    try {
      const [rows] = await this.bigQuery.query({ query });
      return rows[0] || null;
    } catch (error) {
      console.error('Get Student Data Error:', error);
      throw error;
    }
  }

  async getAllStudents() {
    const query = `
        SELECT *
        FROM \`intense-crow-427010-r5.HUBOFMISTAKES.1 ბაზა დუბლიკატი\`
                 LIMIT 10000
    `;

    const [rows] = await this.bigQuery.query({ query });
    return rows.map((row) => ({
      ID: row.string_field_0,
      Timestamp: row.string_field_1,
      'Student Nam;   e': row.string_field_3,
      'Phone Number': row.string_field_4,
      'Alternative Phone': row.string_field_10,
      'Parent Name': row.string_field_11,
    }));
  }
}
