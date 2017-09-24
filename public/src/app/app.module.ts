import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from "./app-routing.module";

import { AppComponent } from './app.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { BlogComponent } from './components/blog/blog.component';

import {PortfolioService} from "./services/portfolio.service";
import {BlogService} from "./services/blog.service";
import {ContactService} from "./services/contact.service";
import {AboutService} from "./services/about.service";


@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    AboutComponent,
    ContactComponent,
    BlogComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule
  ],
  providers: [
    AboutService,
    BlogService,
    ContactService,
    PortfolioService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
