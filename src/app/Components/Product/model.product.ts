export class Product {
  constructor(
    public id: number,
    public name?: string,
    public category?: string,
    public price?: number,
    public url?: string,
    public rating?: number
  ) {}
}
