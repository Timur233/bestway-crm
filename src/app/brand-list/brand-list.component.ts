import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Brand } from '../models/brand';
import { BrandService } from '../services/brand.service';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.sass']
})
export class BrandListComponent implements OnInit {

  brands: Brand[];

  constructor(
    private brandService: BrandService,

    private router: Router,
    private activateRoute: ActivatedRoute,
  ) {
    this.brands = [];
  }

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands() {
    this.brandService.getBrands().subscribe((data) => {
      this.brands = data;
    })
  }

}
