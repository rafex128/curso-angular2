import { Injectable } from '@angular/core';

@Injectable()
export class CursoService {
  getCursos() {
    return ['Angular2', 'Ionic2', 'VanillaJs', 'Ruby'];
  }
}
