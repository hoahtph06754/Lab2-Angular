import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BannerComponent } from './banner/banner.component';
import { ProductComponent } from './product/product.component';
import { FormsModule } from '@angular/forms';
import { from } from 'rxjs';
import { MenuComponent } from './menu/menu.component';
import { ListGroupComponent } from './list-group/list-group.component';
import { ReviewComponent } from './review/review.component';
import { FooterComponent } from './footer/footer.component';
import { ProductsComponent } from './products/products.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    ProductComponent,
    MenuComponent,
    ListGroupComponent,
    ReviewComponent,
    FooterComponent,
    ProductsComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
