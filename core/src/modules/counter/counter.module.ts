import { NgModule, ModuleWithProviders } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { CounterEffects } from './counter.effects';
import { counterReducer } from './counter.reducer';

@NgModule({
  declarations: [
  ],
  imports: [
  ],
  providers: [
  ]
})
export class CounterModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: RootCounterModule,
      providers: [],
    };
  }
}

@NgModule({
  imports: [
    CounterModule,
    StoreModule.forFeature('counter', counterReducer),
    EffectsModule.forFeature([CounterEffects]),
  ],
})
export class RootCounterModule {}
