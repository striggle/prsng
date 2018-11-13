import { Request } from "../request/request.class";
import { Product } from "../product/product.class";

export class Lines {
    id: number;
    request: Request;
    product: Product;
    quantity: number;

    constructor() {
        this.id = 0;
        this.quantity= 0;
    }
}