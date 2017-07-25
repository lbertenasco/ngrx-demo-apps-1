import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/let';
import { combineReducers } from '@ngrx/store';
import { compose } from '@ngrx/store';
import { storeLogger } from 'ngrx-store-logger';
import { storeFreeze } from 'ngrx-store-freeze';
import { counterReducer } from 'ngrx-demo-core';

const reducers = {
  counter: counterReducer
};

const developmentReducer = compose(storeFreeze, storeLogger(), combineReducers)(reducers);
//const productionReducer = combineReducers(reducers);

export function reducer(state: any, action: any) {
  /*if (environment.production) {
    return productionReducer(state, action);
  }
  else {
    return developmentReducer(state, action);
  }*/
  return developmentReducer(state, action);
}
