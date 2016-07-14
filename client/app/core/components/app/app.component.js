import { Component, Inject } from '@angular/core'; // eslint-disable-line no-unused-vars
import { ROUTER_DIRECTIVES } from '@angular/router';

import template from './app.template.html';
import { MenuComponent } from '../menu/menu.component';
import { var1, var2 } from '../../../../vendor_modules/test.js';

@Component({
  selector: 'my-app',
  directives: [ROUTER_DIRECTIVES, MenuComponent],
  template: template
})
export class AppComponent {

  constructor(@Inject('ENVIRONMENT') environment, @Inject('PRIVATE_CONFIG') privateConfig) {
    this.environment = environment;
    this.privateConfig = privateConfig;
  }

  ngOnInit() {
    console.log('App onInit');
    console.log(var1);
    console.log(var2);
  }
}
