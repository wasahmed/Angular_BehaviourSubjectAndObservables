import { Component, OnInit } from '@angular/core';
import { TriggerService } from './trigger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'playground';
  
  constructor(private triggerService :TriggerService) { }

  runDiagnostics(){
    this.triggerService.startDiagnose();// setting the diagnose value
  } 
}
