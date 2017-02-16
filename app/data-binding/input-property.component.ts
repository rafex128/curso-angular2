import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'curso',
  template: '{{ nomeCurso }} {{ estagioCurso }}',
  inputs: ['nomeCurso:nome', 'estagioCurso:estagio']
})
export class InputPropertyComponent {

  //@Input('nome')
  nomeCurso: string = "";


  constructor() {  }
}
