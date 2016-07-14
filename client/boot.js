import './shim';
import 'rxjs/add/operator/map';
// import Raven from 'raven-js';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { FORM_PROVIDERS, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HTTP_PROVIDERS } from '@angular/http';

import { AppComponent } from './app/core/components/app/app.component';
import { APP_ROUTES_PROVIDER } from './app/core/app.routes';
import { CORE_PROVIDERS } from './app/core';
import { AUTH_PROVIDERS } from './app/auth';
import { POSTS_PROVIDERS } from './app/posts';

if (ENVIRONMENT === 'production') {
  enableProdMode();
}

bootstrap(AppComponent, [
  FORM_PROVIDERS,
  HTTP_PROVIDERS,

  APP_ROUTES_PROVIDER,
  AUTH_PROVIDERS,
  POSTS_PROVIDERS,
  CORE_PROVIDERS,

  { provide: LocationStrategy, useClass: HashLocationStrategy },
  { provide: 'ENVIRONMENT', useValue: ENVIRONMENT },
  { provide: 'PRIVATE_CONFIG', useValue: PRIVATE_CONFIG }
]);
