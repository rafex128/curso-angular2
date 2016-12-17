import { Component } from '@angular/core';

import { MeuPrimeiroComponent } from './primeiro/meu-primeiro.component';
import { CursoComponent } from './curso/curso.component';

@Component({
  selector: 'my-app',
  template: `
    <h1>Angular 2 Boilerplate</h1>
    <p>Hello World!</p>
    <meu-primeiro-component></meu-primeiro-component>
    <cursos-lista></cursos-lista>`,
  directives: [
    MeuPrimeiroComponent,
    CursoComponent
  ]
})

export class AppComponent { }
