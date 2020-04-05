import { NgModule } from '@angular/core';

import { CmExampleModule } from 'cm-ng-design/cm-example';

export * from 'cm-ng-design/cm-example'

@NgModule({
  exports: [
    CmExampleModule
  ]
})

export class CmNgDesignModule {
  constructor() {

  }
}
