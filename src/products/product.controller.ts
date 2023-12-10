import { Body, Controller, Post } from "@nestjs/common";
import { ProductService } from "./product.service";
import { title } from "process";

@Controller('/products')
export class ProductController {
    constructor(private productService: ProductService) { }

    @Post()
    addProduct(
        @Body('categoryId') categoryId: string,
        @Body('title') prodTitle: string,
        @Body('price') prodPrice: number,
        @Body('desc') prodDesc: string
    ) {

        return this.productService.insertProduct(categoryId, prodTitle, prodPrice, prodDesc)
    }
}