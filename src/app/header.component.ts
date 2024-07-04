import { Component } from '@angular/core';


@Component({
    // Indica a tag do objeto que vamos manusear
    selector: 'app-header',
    // standalo, é o componente que não depende de um módulo angular
    standalone: true,
    // Aqui identificamos o templete ou templetaUrl
    templateUrl: './header.component.html'
})
export class HeaderComponent {}
