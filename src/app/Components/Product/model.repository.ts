import { Product } from "./model.product";
import { SimpleDataSource } from "./model.dataSource";

export class Repository {
  private products: Product[];
  private dataSource: SimpleDataSource;

  constructor() {
    this.dataSource = new SimpleDataSource();
    this.products = new Array<Product>();
    this.dataSource.getData().forEach((element) => {
      this.products.push(element);
    });
  }

  getProducts(): Product[] {
    return this.products;
  }
}
