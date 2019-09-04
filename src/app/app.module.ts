import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PricingHeaderComponent } from './pricing-header/pricing-header.component';
import { PricingCardsComponent } from './pricing-cards/pricing-cards.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ 
    AppComponent, 
    HelloComponent,
    NavigationComponent,
    PricingHeaderComponent,
    PricingCardsComponent,
    FooterComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
