import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductService } from '../product.service';
import { Product } from '../product.class';
import { VendorService } from '../../vendor/vendor.service';
import { Vendor } from '../../vendor/vendor.class'

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = new Product();
  vendors: Vendor[];

  save(): void {
    this.productsvc.add(this.product)
      .subscribe(resp => {
        console.log("resp:", resp);
        this.router.navigateByUrl('/products/list');
      });
  }
  
  constructor(
    private productsvc: ProductService,
    private vendorsvc: VendorService,
    private router: Router
  ) { }

  ngOnInit() {
    this.vendorsvc.list()
      .subscribe(resp => {
        console.log("Vendors:", resp);
        this.vendors = resp.data;
      });
  }

}