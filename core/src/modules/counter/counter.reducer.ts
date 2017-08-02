import 'rxjs/add/operator/map';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as CounterActions from './counter.actions';
import { initialCounterState, CounterState } from './counter.state';

export function counterReducer(state = initialCounterState, action: CounterActions.Actions): CounterState {
  switch (action.type) {

    case CounterActions.INCREMENT:
      return Object.assign({}, state, {
          total : state.total + 1
      });

    case CounterActions.DECREMENT:
      return Object.assign({}, state, {
          total : state.total - 1
      });

    case CounterActions.RESET_SUCCESS:
      return initialCounterState;


    default: {
      return state;
    }
  }
}
