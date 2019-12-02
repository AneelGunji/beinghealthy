import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsDiscoveryComponent } from './products-discovery.component';

describe('ProductsDiscoveryComponent', () => {
  let component: ProductsDiscoveryComponent;
  let fixture: ComponentFixture<ProductsDiscoveryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsDiscoveryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsDiscoveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
