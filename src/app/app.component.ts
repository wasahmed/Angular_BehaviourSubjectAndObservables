import { TemplateRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { TriggerService } from './trigger.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'playground';
  modalRef: BsModalRef;
  diagnosticStatus: boolean = false;
  
  constructor(private triggerService :TriggerService,
    private modalService: BsModalService) { }



  openModal(template: TemplateRef<any>) {
    this.triggerService.startDiagnose();
    this.triggerService.diagnoseObs.subscribe(status => {
      this.diagnosticStatus = status
    });// setting the diagnose value
    this.modalRef = this.modalService.show(template);
}
}
