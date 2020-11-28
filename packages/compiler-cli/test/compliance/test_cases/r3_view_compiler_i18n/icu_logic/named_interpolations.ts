import {Component, NgModule} from '@angular/core';

@Component({
  selector: 'my-component',
  template: `
  <div i18n>{
    gender,
    select,
      male {male {{ weight // i18n(ph="PH_A") }}}
      female {female {{ height // i18n(ph="PH_B") }}}
      other {other {{ age // i18n(ph="PH WITH SPACES") }}}
  }</div>
`
})
export class MyComponent {
}

@NgModule({declarations: [MyComponent]})
export class MyModule {
}