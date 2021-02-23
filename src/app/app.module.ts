import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DiagnosticsComponent } from './diagnostics/diagnostics.component';

@NgModule({
  declarations: [
    AppComponent,
    DiagnosticsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
