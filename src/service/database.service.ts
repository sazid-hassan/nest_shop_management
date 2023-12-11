import { Injectable } from '@nestjs/common';
import { createConnection, Connection } from 'mysql2/promise';
import config from '../../database.config';

@Injectable()
export class DatabaseService {
    private connection: Connection;

    constructor() {
        this.initializeConnection();
    }

    private async initializeConnection(): Promise<void> {
        try {
            this.connection = await createConnection(config);
        } catch (error) {
            console.error('Error initializing database connection:');
        }
    }

    async executeQuery(sql: string, params: any[] = []): Promise<any> {
        if (!this.connection) {
            console.error('Database connection not initialized.');
            return ["DB Connection Failed"];
        }

        const [rows] = await this.connection.query(sql, params);
        return rows;
    }
}
