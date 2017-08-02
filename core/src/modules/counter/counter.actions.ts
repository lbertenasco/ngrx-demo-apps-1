import { Action } from '@ngrx/store';

export const INCREMENT = '[Counter] Increment';
export const DECREMENT = '[Counter] Decrement';
export const RESET = '[Counter] Reset';
export const RESET_SUCCESS = '[Counter] ResetSucess';

export class IncrementAction implements Action {
  readonly type = INCREMENT;
  constructor() {}
}

export class DecrementAction implements Action {
  readonly type = DECREMENT;
  constructor() {}
}

export class ResetAction implements Action {
  readonly type = RESET;
  constructor() {}
}

export class ResetSuccessAction implements Action {
  readonly type = RESET_SUCCESS;
  constructor() {}
}

export type Actions =
    IncrementAction
  | DecrementAction
  | ResetAction
  | ResetSuccessAction;
