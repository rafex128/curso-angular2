import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'data-binding',
  templateUrl: 'data-binding.component.html',
})
export class DataBindingComponent {
  constructor() {  }

  url: any = "http://www.google.com.br"
}
