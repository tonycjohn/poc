import {Component,OnInit} from '@angular/core';
import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.componenet';
import {HeroService} from './hero.service';


@Component({
    selector: 'my-heroes',
    template: `<div *ngIf="selectedHero">
              <h2>My favorite hero is {{selectedHero.name}}</h2>
              <div>
              <label>name:</label>
              <input [(ngModel)]="selectedHero.name" placeholder="name">
              </div>
              </div>
              <div>
              <ul class="heroes">
              <li *ngFor="let hero of heroes" [class.selected]="hero===selectedHero" (click)="onSelect(hero)">
              <span class="badge">{{hero.id}}</span>{{hero.name}}
              </li>
              </ul>
              <my-hero-detail [hero]="selectedHero"></my-hero-detail>
              </div>
              `,
    directives:[HeroDetailComponent],
    styles: [`
        .selected {
          background-color: #CFD8DC !important;
          color: white;
        }
        .heroes {
          margin: 0 0 2em 0;
          list-style-type: none;
          padding: 0;
          width: 15em;
        }
        .heroes li {
          cursor: pointer;
          position: relative;
          left: 0;
          background-color: #EEE;
          margin: .5em;
          padding: .3em 0;
          height: 1.6em;
          border-radius: 4px;
        }
        .heroes li.selected:hover {
          background-color: #BBD8DC !important;
          color: white;
        }
        .heroes li:hover {
          color: #607D8B;
          background-color: #DDD;
          left: .1em;
        }
        .heroes .text {
          position: relative;
          top: -3px;
        }
        .heroes .badge {
          display: inline-block;
          font-size: small;
          color: white;
          padding: 0.8em 0.7em 0 0.7em;
          background-color: #607D8B;
          line-height: 1em;
          position: relative;
          left: -1px;
          top: -4px;
          height: 1.8em;
          margin-right: .8em;
          border-radius: 4px 0 0 4px;
        }
      `]

})

export class HeroesComponent implements OnInit{
  constructor(private heroService:HeroService){}
  //title = 'Tour of Heroes';
  selectedHero:Hero;
  heroes:Hero[];

  onSelect(hero:Hero){
    this.selectedHero=hero;
  }

  getHeroes(){
    this.heroes=this.heroService.getHeroes();
  }

  ngOnInit(){
    this.getHeroes();
  }
}

