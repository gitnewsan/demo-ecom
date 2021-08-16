import { Component, OnInit } from "@angular/core";

import { Repository } from "../Product/model.repository";

import { Product } from "../Product/model.product";

@Component({
  selector: "app-product",
  templateUrl: "./product.component.html",
  styleUrls: ["./product.component.css"]
})
export class ProductComponent implements OnInit {
  model: Repository = new Repository();
  listFilter: string = "Shirt";
  showImage: boolean = false;

  toggleImage(): void {
    this.showImage = !this.showImage;
    console.log(this.showImage);
  }

  getTotalProducts(): number {
    return this.model.getProducts().length;
  }

  getProducts(): Product[] {
    return this.model.getProducts();
  }

  getProperClass(): string {
    return this.getTotalProducts() < 5 ? "bg-danger" : "bg-primary";
  }

  private locater = (p: Product, id: number) => p.id === id;

  getProductIndexById(id: number): number | null {
    return this.model.getProducts().findIndex((ele) => this.locater(ele, id));
  }

  getProductByIndex(index: number): Product {
    return this.model.getProducts()[index];
  }

  getProduct(index: number): Product {
    return this.model.getProducts()[index];
  }
}
