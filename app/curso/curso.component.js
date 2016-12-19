"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var curso_service_1 = require('./curso.service');
var CursoComponent = (function () {
    function CursoComponent(cursoService) {
        this.nome = 'Rafael';
        this.cursos = "";
        this.cursos = cursoService.getCursos();
    }
    CursoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'cursos-lista',
            templateUrl: 'cursos.component.html',
            providers: [
                curso_service_1.CursoService
            ]
        }), 
        __metadata('design:paramtypes', [curso_service_1.CursoService])
    ], CursoComponent);
    return CursoComponent;
}());
exports.CursoComponent = CursoComponent;
//# sourceMappingURL=curso.component.js.map