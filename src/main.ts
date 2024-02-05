import { enableProdMode, importProvidersFrom } from '@angular/core'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'


import { environment } from './environments/environment'
import { AppComponent } from './app/app.component';
import { AppRoutingModule } from './app/app-routing.module';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
// import { NgZorroCustomModule } from './app/shared/ng-zorro-custom.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
// import { tokenInterceptor } from './app/core/interceptor/token-interceptor.service';
// import { RECAPTCHA_V3_SITE_KEY } from 'ng-recaptcha';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

if (environment.production) {
    enableProdMode()
    //show this warning only on prod mode
    if (window) {
        selfXSSWarning();
    }
}

bootstrapApplication(AppComponent, {
    providers: [importProvidersFrom(BrowserModule, HttpClientModule, BrowserAnimationsModule,
      TranslateModule.forRoot({
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
        }
    }),
    BrowserAnimationsModule,
    AppRoutingModule), 
    ]
}).catch((err) => console.error(err))

function selfXSSWarning() {
    setTimeout(() => {
        console.log('%c** STOP **', 'font-weight:bold; font: 2.5em Arial; color: white; background-color: #e11d48; padding-left: 15px; padding-right: 15px; border-radius: 25px; padding-top: 5px; padding-bottom: 5px;');
        console.log(
            `\n%cThis is a browser feature intended for developers. Using this console may allow attackers to impersonate you and steal your information sing an attack called Self-XSS. Do not enter or paste code that you do not understand.`, 'font-weight:bold; font: 2em Arial; color: #e11d48;'
        );
    });
}
