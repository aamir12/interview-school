import {provideHttpClient} from '@angular/common/http'
import {isDevMode, importProvidersFrom} from '@angular/core'
import {bootstrapApplication} from '@angular/platform-browser'
import {provideRouter} from '@angular/router'
import {provideEffects} from '@ngrx/effects'
import {provideState, provideStore} from '@ngrx/store'
import {provideStoreDevtools} from '@ngrx/store-devtools'
import {AppComponent} from './app/app.component'
import {appRoutes} from './app/app.routes'
import * as schoolEffects from './app/school/store/effects'
import {
  schoolFeatureKey,
  schoolReducer,
} from './app/school/store/reducers';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(appRoutes),
    provideStore(),
    provideState(schoolFeatureKey, schoolReducer),
    provideEffects(schoolEffects),
    provideStoreDevtools({
        maxAge: 25,
        logOnly: !isDevMode(),
        autoPause: true,
        trace: false,
        traceLimit: 75,
    }),
    importProvidersFrom(BrowserAnimationsModule)
],
})
