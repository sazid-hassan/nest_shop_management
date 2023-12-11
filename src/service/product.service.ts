import { Injectable } from "@nestjs/common";
import { DatabaseService } from "./database.service";
import { Product } from "src/models/product.model";

@Injectable()
export class ProductService {

    constructor(private readonly databaseService: DatabaseService) { }

    async insertProduct(categoryId: number, title: string, price: number, quantity: number, pdBrand: string): Promise<any> {
        const sql = `INSERT INTO products (category_id, product_name, product_price, product_quantity, product_brand) VALUES (${categoryId}, '${title}', ${price}, ${quantity}, '${pdBrand}')`;

        await this.databaseService.executeQuery(sql);

        return "Product Added";
    }

    async getAllProducts(): Promise<Product> {
        try {
            const sql = 'SELECT * FROM products';
            return await this.databaseService.executeQuery(sql);
        }
        catch (error) {
            return error
        }

    }

    async deleteProduct(id: number): Promise<any> {
        try {
            const sql = `DELETE FROM products WHERE product_id = ${id}`;
            return await this.databaseService.executeQuery(sql);
        }
        catch (error) {
            return error
        }
    }
}
