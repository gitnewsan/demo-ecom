import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
//import { HomeComponent } from "./Components/Component.Home/home.component";
import { ProductComponent } from "./Components/Component.Product/product.component";
import { ConvertToHyphen } from "./pipes/converto.pipe";
import { ShowRating } from "./pipes/show.rating.pipe";
import { ParentComponent } from "./Components/Component.Parent/parent.component";
import { ChildComponent } from "./Components/Component.Child/child.component";
import { Star } from "./Components/Component.Star/star.component";

import { DataService } from "./Services/data.service";

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ParentComponent,
    Star,
    ChildComponent,
    ConvertToHyphen
  ],
  imports: [BrowserModule, FormsModule],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule {}
