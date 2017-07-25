import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/takeUntil';
import { Injectable, InjectionToken, Optional, Inject } from '@angular/core';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Scheduler } from 'rxjs/Scheduler';
import { async } from 'rxjs/scheduler/async';
import { empty } from 'rxjs/observable/empty';
import { defer } from 'rxjs/observable/defer';
import { of } from 'rxjs/observable/of';

import {
  CounterActionTypes,
  CounterActions,
  ResetAction,
  ResetSuccessAction
} from './counter.actions';

@Injectable()
export class CounterEffects {


  @Effect() init$: Observable<Action> = defer(() => {
      return of(new ResetAction());
    });
  @Effect() resetSuccess$ = this.actions$
    .ofType(CounterActionTypes.RESET)
    .map(() => new ResetSuccessAction());

  constructor(private actions$: Actions) { }
}
