import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-discovery',
  templateUrl: './products-discovery.component.html',
  styleUrls: ['./products-discovery.component.css']
})
export class ProductsDiscoveryComponent implements OnInit {
  products;

  constructor() { 
    this.products = [{
      img:'assets/images/2.jpg',
    }]
  }

  ngOnInit() {
  }

}
