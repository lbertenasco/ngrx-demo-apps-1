import {Component} from '@angular/core';
import { ionicBootstrap, Platform, MenuController, Nav } from 'ionic-angular';
import { StatusBar } from 'ionic-native';
  
import { combineReducers, provideStore } from '@ngrx/store';
import { compose } from '@ngrx/core/compose';
import { storeLogger } from 'ngrx-store-logger';

import { counterReducer } from 'ngrx-demo-core';
import { CounterActions } from 'ngrx-demo-core';
import { FooService } from 'ngrx-demo-core';

import { HomePage } from './pages/home/home';

let actions = [
  CounterActions,
  // Add other actions here
]

let services = [
  FooService,
  // Add other services here
]

let reducers = compose(storeLogger(), combineReducers)({
    counterState: counterReducer,
    // Add other state+reducers here
});

@Component({
  providers: [
          provideStore(reducers),
          services,
          actions
  ],
  template: '<ion-nav [root]="rootPage"></ion-nav>'
})
export class MyApp {
  rootPage: any = HomePage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}

ionicBootstrap(MyApp);