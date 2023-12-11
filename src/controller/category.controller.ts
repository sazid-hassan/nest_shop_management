import { Body, Controller, Get, Post } from "@nestjs/common";
import { CategoryService } from "../service/category.service";

@Controller('category')

export class CategoryController {
    constructor(private categoryService: CategoryService) { }

    @Post()
    addCategory(@Body('title') catTitle: string): any {
        return this.categoryService.insertCategory(catTitle);
    }

    @Get()
    getAllCategory(): any {
        return this.categoryService.getAllCategory();
    }
}