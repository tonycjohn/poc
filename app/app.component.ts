/**
 * Created by johnto01 on 8/8/2016.
 */
import {Component} from '@angular/core';
import {HeroesComponent} from "./heroes.component";
import {HeroService} from './hero.service';

@Component({
  selector:'my-app',
  template:`
    <h1>{{title}}</h1>
    <a [routerLink]="['./heroes']"></a>
    <router-outlet></router-outlet>
    `,
  directives:[HeroesComponent],
  providers:[HeroService]
})

/*@Component({
  selector:'my-app',
  template:`
    <h1>{{title}}</h1>
    <my-heroes></my-heroes>`,
  directives:[HeroesComponent],
  providers:[HeroService]
  })*/

export class AppComponent{
  title='new Tour of heroes';
}
