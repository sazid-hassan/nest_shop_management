export class Product {
    constructor(
        public categoryId: number,
        public id: number,
        public title: string,
        public price: number,
        public quantity: number,
        public pdBrand: string) { }
}