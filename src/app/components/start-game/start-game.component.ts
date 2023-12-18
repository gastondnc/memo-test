import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AppComponent } from 'src/app/app.component';
import { CATEGORIES } from 'src/app/mocks/categories.mock';
import { CONFIG_LEVELS } from 'src/app/mocks/config-level.mock';
import { Category, Level } from 'src/app/models/level.model';

@Component({
  selector: 'start-game',
  templateUrl: './start-game.component.html',
  styleUrls: ['./start-game.component.css']
})
export class StartGameComponent {
  public title = 'Memo Test';
  public btnTitle = 'START';
  public isStart: boolean = false;
  public levels: Level[] = CONFIG_LEVELS;
  public level: Level = this.levels[0];
  public levelId: string = `${this.levels[0].id}`;
  public categories: Category[] = CATEGORIES;
  public category: Category = this.categories[0];
  public categoryId: string = `${this.categories[0].id}`;

  constructor(private router: Router) {}

  startGame(){
    this.level = this.levels.find( level => level.id.toString() === this.levelId.toString() )!
    this.router.navigate(['/grid'], {
      queryParams: {

        level: JSON.stringify(this.level),
        categoryId: this.categoryId
      }
    })
  }
}
