export class Product {
    constructor(
        public categoryId: string,
        public id: string,
        public title: string,
        public price: number,
        public description: string) { }
}