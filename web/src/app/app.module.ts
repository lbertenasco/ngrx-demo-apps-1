import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import 'rxjs';

import { environment } from '../environments/environment';

import { DemoCoreModule, CounterModule } from 'ngrx-demo-core';
import { reducers, metaReducers } from './app.reducer';
import { AppComponent } from './app.component';

@NgModule({
  bootstrap: [
    AppComponent
  ],
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers, {
      metaReducers: metaReducers
    }),
    !environment.production ? StoreDevtoolsModule.instrument({ maxAge: 50 }) : [],

    EffectsModule.forRoot([]),

    DemoCoreModule,
    CounterModule,
  ],
  providers: []
})
export class AppModule { }
