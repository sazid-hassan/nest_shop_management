import { Module } from "@nestjs/common";
import { CategoryController } from "../controller/category.controller";
import { CategoryService } from "../service/category.service";
import { DatabaseService } from "src/service/database.service";


@Module({
    controllers: [CategoryController],
    providers: [CategoryService, DatabaseService],
})

export class CategoryModule { };