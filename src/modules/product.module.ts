import { Module } from "@nestjs/common";
import { ProductController } from "../controller/product.controller";
import { ProductService } from "../service/product.service";
import { DatabaseService } from "src/service/database.service";

@Module({
    controllers: [ProductController],
    providers: [ProductService, DatabaseService]
})

export class ProductModule { }