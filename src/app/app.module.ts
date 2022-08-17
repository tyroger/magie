import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponentComponent } from './components/card-component/card-component.component';
import { ShowOrHideComponentComponent } from './components/show-or-hide-component/show-or-hide-component.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponentComponent,
    ShowOrHideComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
