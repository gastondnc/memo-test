import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';

// Imports de entorno de desarrollo //
import { TILES } from '../../mocks/tiles.mock';
import { Tile } from 'src/app/models/tile.model';
import { Level } from 'src/app/models/level.model';
import { CounterComponent } from '../counter/counter.component'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'grid-memo',
  templateUrl: './grid-memo.component.html',
  styleUrls: ['./grid-memo.component.css']
})
export class GridMemoComponent implements OnInit, AfterViewInit {
  @ViewChild('counter') counter: CounterComponent | undefined = undefined;
  public level: Level | undefined= {
    id: 1,
    level: 'easy',
    timer: 10,
    elements: 2
  };
  public categoryId : string = '1';
  public timer: number = 0;
  public originalTiles: Tile[] = [];
  public tilesA: Tile[] = [];
  public tilesB: Tile[] = [];
  public tiles: Tile[] = [];
  public clickedTiles: Tile[] = [];
  public endGame: boolean = false;
  public endGameTitle: string = '';

  constructor(private route: ActivatedRoute){
    this.route.queryParams.subscribe((params: any) => {
      const level = JSON.parse(params.level)
      const categoryId  = params.categoryId
      console.log(level)
      console.log(categoryId)
      this.level = level
      this.categoryId = categoryId
    })
  }

  ngOnInit(): void {
    this.timer = this.level!.timer
    this.setOriginaltiles()
  }

  ngAfterViewInit(): void {
    this.resetGame()
  }

  setOriginaltiles() {
    const filtered = TILES.filter( tile => tile.categoryId.toString() === this.categoryId.toString())
    this.originalTiles = filtered.slice(0, this.level?.elements)
  }

  shuffle(arrToPush: Tile[]) {
    console.log(this.level)
    const temp: Tile[] = [...this.originalTiles]
    this.originalTiles.forEach(item => {
      const ramdomIndex: number = Math.floor(Math.random() * temp.length)
      const elements: Tile[] =  temp.splice(ramdomIndex, 1)
      arrToPush.push({...elements[0]})
    })
    console.log(arrToPush)
  }

  addTiles() {
    this.originalTiles.forEach((item, idx)=>{
      this.tiles.push(this.tilesA[idx])
      this.tiles.push(this.tilesB[idx])
    })
    console.log(this.tiles)
  }

  onSelect(tileClicked: Tile) {
    if(tileClicked.isClicked === true){
      return
    }
    tileClicked.isClicked = true
    this.clickedTiles.push(tileClicked)
    const clickedTiles = this.clickedTiles
    if(this.clickedTiles.length === 2) {
      if(this.clickedTiles[0].id === this.clickedTiles[1].id){
        console.log('ñoño ganaste')
        setTimeout( () => {
          clickedTiles.forEach(item => {
          item.isVisible = false
        })
        const isFinish = this.tiles.every( item => item.isVisible === false )
        if(isFinish === true){
          this.endGameTitle = 'Winner'
          this.showModal(true)
          // this.resetGame()
        }
      }, 500 )

        }else{
          setTimeout( () => {
            clickedTiles.forEach(item => {
              item.isClicked = false
            })
          }, 500 )
          console.log('ñoño perdiste')
        }
        this.clickedTiles = []
      }else{

      }
      console.log(this.clickedTiles)
  }

  resetGame() {
    this.tiles = []
    this.tilesA = []
    this.tilesB = []
    this.showModal(false)
    this.shuffle(this.tilesA)
    this.shuffle(this.tilesB)
    this.addTiles()
    this.resetCounter()
  }

  resetCounter(){
    this.counter!.timer = this.timer
    this.counter!.initTimer()
  }

  showModal(state: boolean) {
    if(state === true){
      this.endGame = true
      this.counter?.endTimer()
    }else{
      this.endGame = false
    }
  }

  endTime() {
    this.endGameTitle = 'LOSER';
          this.showModal(true)
  }

}















