import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {PortfolioComponent} from "./components/portfolio/portfolio.component";
import {BlogComponent} from "./components/blog/blog.component";
import {ContactComponent} from "./components/contact/contact.component";
import {AboutComponent} from "./components/about/about.component";

const appRoutes: Routes = [
  {path: 'portfolio', component:PortfolioComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'about', component: AboutComponent},
  {path: '**', component: PortfolioComponent}
];

@NgModule({
  declarations:[],
  imports: [RouterModule.forRoot(appRoutes)],
  providers:[],
  bootstrap: [],
  exports: [RouterModule]
})
export class AppRoutingModule{

}
