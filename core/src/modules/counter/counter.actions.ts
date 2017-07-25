import { Action } from '@ngrx/store';

export const CounterActionTypes = {
  INCREMENT: '[Counter] Increment',
  DECREMENT: '[Counter] Decrement',
  RESET: '[Counter] Reset',
  RESET_SUCCESS: '[Counter] ResetSucess'
};


export class IncrementAction implements Action {
  readonly type = CounterActionTypes.INCREMENT;
  constructor() {}
}

export class DecrementAction implements Action {
  readonly type = CounterActionTypes.DECREMENT;
  constructor() {}
}

export class ResetAction implements Action {
  readonly type = CounterActionTypes.RESET;
  constructor() {}
}

export class ResetSuccessAction implements Action {
  readonly type = CounterActionTypes.RESET_SUCCESS;
  constructor() {}
}

export type CounterActions =
    IncrementAction
  | DecrementAction
  | ResetAction
  | ResetSuccessAction;
