import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadercompComponent } from './headercomp/headercomp.component';
import { HeocompComponent } from './heocomp/heocomp.component';
import { BodycompComponent } from './bodycomp/bodycomp.component';
import { CategorycompComponent } from './categorycomp/categorycomp.component';
import { FootercompComponent } from './footercomp/footercomp.component';
import { MyserviceService } from './myservice.service';

@NgModule({
  declarations: [
    AppComponent,
    HeadercompComponent,
    HeocompComponent,
    BodycompComponent,
    CategorycompComponent,
    FootercompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MyserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
