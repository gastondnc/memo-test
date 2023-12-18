import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

// Imports de entorno de desarrollo //
import { AppComponent } from './app.component';
import { GridMemoComponent } from './components/grid-memo/grid-memo.component';
import { CounterComponent } from './components/counter/counter.component';
import { ResultGameComponent } from './components/result-game/result-game.component';
import { StartGameComponent } from './components/start-game/start-game.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: 'start',
    pathMatch: 'full'
  },
  {
    path: 'start',
    component: StartGameComponent
  },
  {
    path: 'grid',
    component: GridMemoComponent
  },
]
@NgModule({
  declarations: [
    AppComponent,
    GridMemoComponent,
    CounterComponent,
    ResultGameComponent,
    StartGameComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
