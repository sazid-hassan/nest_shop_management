import { Injectable } from "@nestjs/common";
import { Category } from "./category.model";

@Injectable()
export class CategoryService {
    private category: Category[] = [];

    insertCategory(title: string) {
        const prodId = new Date().valueOf();
        const newCategory = new Category(prodId.toString(), title);
        this.category.push(newCategory);
        return "Category Added Successful";
    }

    getAllCategory() {
        return [...this.category];
    }

}