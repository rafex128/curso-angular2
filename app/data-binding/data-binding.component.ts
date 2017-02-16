import { Component } from '@angular/core';

import { InputPropertyComponent } from "./input-property.component"

@Component({
  moduleId: module.id,
  selector: 'data-binding',
  templateUrl: 'data-binding.component.html',
  directives: [ InputPropertyComponent ]
})
export class DataBindingComponent {
  constructor() {  }

  url: any = "http://www.google.com.br"

  target: any = "_blank"

  name: string = "Rafael"

  estagioCurso: string = "Segundo"
}
