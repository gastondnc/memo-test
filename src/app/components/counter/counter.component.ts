import {  Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';


@Component({
  selector: 'counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnDestroy {
  @Input('timer') timer: number = 0
  @Output('on-timer') onTimerEmitter: EventEmitter<number> = new EventEmitter();
  public interval: any = undefined;

  constructor(){}

  initTimer() {
    if( this.interval )clearInterval(this.interval)
      this.interval = setInterval( () => {
        this.timer--
      if(this.timer <= 0){
        this.endTimer()
        this.onTimerEmitter.emit()
      }
    },1000)
  }

  endTimer(){
    clearInterval(this.interval)
    this.interval = undefined
  }

  ngOnDestroy() {
    this.endTimer()
  }

}













