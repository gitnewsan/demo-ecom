import { Product } from "./model.product";

export class SimpleDataSource {
  private data: Product[];

  constructor() {
    this.data = new Array<Product>(
      new Product(
        1,
        "Nike",
        "Shoes",
        100,
        "https://images.unsplash.com/photo-1494253109108-2e30c049369b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cmFuZG9tfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
        3
      ),
      new Product(
        2,
        "Rebok",
        "Shirt",
        100,
        "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg",
        4
      ),
      new Product(
        3,
        "Adidas",
        "Tracks",
        100,
        "https://image.shutterstock.com/image-photo/surreal-concept-roll-world-dice-260nw-1356798002.jpg",
        2
      ),
      new Product(
        4,
        "Puma",
        "Ball Shoes",
        100,
        "https://www.wikihow.com/images/thumb/e/e2/Be-Random-Step-14-Version-2.jpg/v4-460px-Be-Random-Step-14-Version-2.jpg.webp",
        1
      ),
      new Product(
        5,
        "Puma",
        "Running Shoes",
        100,
        "https://www.pngitem.com/pimgs/m/372-3721347_roastedchicken-rolled-a-random-image-posted-in-comment.png",
        2
      )
    );
  }

  getData(): Product[] {
    return this.data;
  }
}
