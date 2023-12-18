import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'result-game',
  templateUrl: './result-game.component.html',
  styleUrls: ['./result-game.component.css']
})
export class ResultGameComponent {
  @Input('title') title: string = '';
  @Output('on-reset') onResetEmitter: EventEmitter<boolean> = new EventEmitter();

  constructor(){}

  resetGame(){
    console.log('Desde reset')
    this.onResetEmitter.emit(true)
  }

}



