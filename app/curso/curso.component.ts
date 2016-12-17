import { Component } from '@angular/core';

import { CursoService } from './curso.service';

@Component({
  moduleId: module.id,
  selector: 'cursos-lista',
  templateUrl: 'cursos.component.html',
  providers: [
    CursoService
  ]
})

export class CursoComponent {
  nome = 'Rafael';

  cursos: any = "";

  constructor(cursoService: CursoService) {
    this.cursos = cursoService.getCursos();
  }
}
