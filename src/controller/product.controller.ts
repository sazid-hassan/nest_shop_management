import { Body, Controller, Get, Post } from "@nestjs/common";
import { ProductService } from "../service/product.service";

@Controller('/products')
export class ProductController {
    constructor(private productService: ProductService) { }

    @Post()
    addProduct(
        @Body('categoryId') categoryId: number,
        @Body('title') prodTitle: string,
        @Body('price') prodPrice: number,
        @Body('quantity') prodQuantity: number,
        @Body('brand') prodBrand: string

    ) {

        return this.productService.insertProduct(categoryId, prodTitle, prodPrice, prodQuantity, prodBrand)
    }

    @Get()
    getAllProduct() {
        return this.productService.getAllProducts();
    }
}