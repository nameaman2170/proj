import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CardContainerComponent } from './card-container/card-container.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardContainerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
