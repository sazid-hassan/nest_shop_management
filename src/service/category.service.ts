import { Injectable } from "@nestjs/common";
import { DatabaseService } from "./database.service";

@Injectable()
export class CategoryService {

    constructor(private readonly databaseService: DatabaseService) { }


    async insertCategory(title: string): Promise<any> {
        const entry_date: Date = new Date();
        const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: '2-digit', year: 'numeric' };
        const formatted_date: string = entry_date.toLocaleDateString('en-GB', options).replace(/\//g, '-');


        const sql = `INSERT INTO category (category_name, category_entry_date) VALUES( '${title}', ${formatted_date})`;
        await this.databaseService.executeQuery(sql);
        return "Category Added Successful";
    }

    async getAllCategory(): Promise<any> {
        try {
            const sql = "SELECT * FROM category";
            const categories = await this.databaseService.executeQuery(sql);
            return categories;
        } catch (error) {
            console.error('Error retrieving categories:', error);
            return [];
        }
    }

}