import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'cursos-lista',
  templateUrl: 'cursos.component.html'
})

export class CursoComponent {
  nome = 'Rafael';

  cursos = ['Angular2', 'Ionic2', 'VanillaJs'];
}
