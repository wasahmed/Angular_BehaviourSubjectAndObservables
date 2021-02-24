import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TriggerService } from '../trigger.service';

@Component({
  selector: 'app-diagnostics',
  templateUrl: './diagnostics.component.html',
  styleUrls: ['./diagnostics.component.css']
})
export class DiagnosticsComponent implements OnInit, OnDestroy {
  runDiagnostics: boolean;
  subscriptions: Subscription;
  name: string;
  constructor(private triggerService :TriggerService) { 
    this.subscriptions = new Subscription();
  }

  ngOnInit(): void {
    this.subscriptions.add(this.triggerService.getDiagnoseStatus()
      .subscribe(val => {
      this.runDiagnostics = val;
    }));

  }

  endDiagnose(){
    this.triggerService.endDiagnose();
  
  }
 
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

}
