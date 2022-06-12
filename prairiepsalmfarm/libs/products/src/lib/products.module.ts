import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductSearchComponent } from './components/product-search/product-search.component';
import { CategoriesBannerComponent } from './components/categories-banner/categories-banner.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { FeaturedProductsComponent } from './components/featured-products/featured-products.component';
import { ButtonModule } from 'primeng/button';
import { ProductsListComponent } from './pages/products-list/products-list.component';
import { FormsModule } from '@angular/forms';

import {CheckboxModule} from 'primeng/checkbox';
import {RatingModule} from 'primeng/rating';
import {InputNumberModule} from 'primeng/inputnumber';

import { ProductPageComponent } from './pages/product-page/product-page.component';
import { UiModule } from '@prairiepsalmfarm/ui';

const UIComponents = [
  CheckboxModule,
  RatingModule,
  InputNumberModule
]

const routes: Routes = [
  {
    path: 'products',
    component: ProductsListComponent
  },
  {
    path: 'category/:categoryid',
    component: ProductsListComponent
  },
  {
    path: 'products/:productid',
    component: ProductPageComponent
  },
]

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), ButtonModule, ...UIComponents, FormsModule, UiModule],
  declarations: [
    ProductSearchComponent,
    CategoriesBannerComponent,
    ProductItemComponent,
    FeaturedProductsComponent,
    ProductsListComponent,
    ProductPageComponent,
  ],
  exports: [ProductSearchComponent, CategoriesBannerComponent, ProductItemComponent, FeaturedProductsComponent, ProductsListComponent, ProductPageComponent]
})
export class ProductsModule {}
