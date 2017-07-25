import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';

import { CounterEffects } from './counter.effects';
import { counterReducer } from './counter.reducer';

@NgModule({
  declarations: [
  ],
  imports: [
    EffectsModule.forFeature([
      CounterEffects
    ])
  ],
  providers: [
  ]
})
export class CounterModule {}
