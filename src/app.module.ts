import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryModule } from './modules/category.modules';
import { ProductModule } from './modules/product.module';

@Module({
  imports: [CategoryModule, ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
