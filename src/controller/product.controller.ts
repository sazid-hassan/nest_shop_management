import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common";
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
    @Delete(':id')
    deleteProduct(@Param('id') prodID: number) {
        return this.productService.deleteProduct(prodID);
    }
}