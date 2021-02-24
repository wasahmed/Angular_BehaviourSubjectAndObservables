import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TriggerService {

  // A BehaviorSubject is a type of observable (i.e. a stream of data that we can subscribe to like the observable 
  // returned from HTTP requests in Angular). ... When you subscribe to it, it will immediately return the last value
  // that was emitted immediately (or the initial value if no data has been emitted yet)
  diagnose: BehaviorSubject<any> = new BehaviorSubject(undefined);
  diagnoseObs = this.diagnose.asObservable();

  constructor() { }

  startDiagnose(){
    this.diagnose.next(true);
  }

  endDiagnose(){
    this.diagnose.next(false);
  }

  getDiagnoseStatus(): Observable<boolean> {
    return this.diagnoseObs;
  }
}
