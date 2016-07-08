import { provide, Component, Inject, OpaqueToken } from '@angular/core';
import { ionicBootstrap, Platform, MenuController, Nav } from 'ionic-angular';
import { StatusBar } from 'ionic-native';
  
import { combineReducers, provideStore, Store } from '@ngrx/store';
import { compose } from '@ngrx/core/compose';
import { mergeEffects, runEffects, StateUpdates } from '@ngrx/effects';
import { storeLogger } from 'ngrx-store-logger';

import { counterReducer, CounterActions, CounterEffects, FooService } from 'ngrx-demo-core';

import { AppState } from './';
import { HomePage } from './pages/home/home';

let actions = [
  CounterActions,
  // Add other actions here
]

let effects = [
  CounterEffects,
  // Add other effects here
]

let services = [
  FooService,
  // Add other services here
]

let reducers = compose(storeLogger(), combineReducers)({
    counterState: counterReducer,
    // Add other state+reducers here
});

const EFFECTS = new OpaqueToken('Effects');

@Component({
  providers: [
    provide(EFFECTS, { multi: true, useClass: CounterEffects })
  ],
  template: '<ion-nav [root]="rootPage"></ion-nav>'
})
export class MyApp {
  rootPage: any = HomePage;

  constructor(@Inject(EFFECTS) effects: any[],
              platform: Platform,
              store: Store<AppState>) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();

      // Merge effects (workaround, because runEffects during bootstrap does not work because of DI issues)
      mergeEffects(effects).subscribe(store);
    });
  }
}

ionicBootstrap(MyApp, [
  provideStore(reducers),
  //runEffects(effects),
  services,
  actions
]);