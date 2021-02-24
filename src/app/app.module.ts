import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';
import { DiagnosticsComponent } from './diagnostics/diagnostics.component';

@NgModule({
  declarations: [
    AppComponent,
    DiagnosticsComponent
    
  ],
  imports: [
    BrowserModule, ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
