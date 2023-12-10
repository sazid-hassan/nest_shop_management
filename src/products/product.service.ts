import { Injectable } from "@nestjs/common";
import { Product } from "./product.model";

@Injectable()
export class ProductService {
    private products: Product[] = [];
    insertProduct(categoryId: string, title: string, price: number, description: string) {
        const prodId = new Date().valueOf();

        const newProduct = new Product(categoryId, prodId.toString(), title, price, description);

        this.products.push(newProduct);

        return [...this.products];
    }

}