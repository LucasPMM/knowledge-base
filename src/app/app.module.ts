
// Angular
import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';

// Libraries
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// Ngrx
import { StoreModule, ActionReducer, MetaReducer } from '@ngrx/store';
import { reducers } from './stores/reducers';
import { effects } from './stores/effects';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { localStorageSync } from 'ngrx-store-localstorage';

import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { HomePageModule } from './pages/homepage/homepage.module';
import { KnowledgeModule } from './pages/knowledge/knowledge.module';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PageNotFoundModule } from './pages/page-not-found/page-not-found.module';
registerLocaleData(localePt);

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({
    keys: [
      { language: ['selectedLanguageValue'] },
      { auth: ['loggedUser', 'userDataToRegister'] }
    ],
    rehydrate: true,
  })(reducer);
}

const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
  ],
  imports: [
    HomePageModule,
    KnowledgeModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient],
      }
    }),
    StoreModule.forRoot(reducers, { metaReducers, }),
    EffectsModule.forRoot(effects),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),

  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt-BR' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
