/**
 * Created by johnto01 on 8/8/2016.
 */

import {provideRouter,RouterConfig} from '@angular/router';
import {HeroesComponent} from 'app.component';

const routes:RouterConfig=[
  {
    path:'heroes',
    component:HeroesComponent
  }
];

export const appRouterProviders=[
  provideRouter(routes)
];
