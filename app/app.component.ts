import { Component } from '@angular/core';

import { MeuPrimeiroComponent } from './primeiro/meu-primeiro.component';
import { CursoComponent } from './curso/curso.component';
import { DataBindingComponent } from './data-binding/data-binding.component'

@Component({
  selector: 'my-app',
  template: `
    <h1>Angular 2 Boilerplate</h1>
    <p>Hello World!</p>
    <meu-primeiro-component></meu-primeiro-component>
    <cursos-lista></cursos-lista>
    <data-binding></data-binding>`,
  directives: [
    MeuPrimeiroComponent,
    CursoComponent,
    DataBindingComponent
  ]
})

export class AppComponent { }
