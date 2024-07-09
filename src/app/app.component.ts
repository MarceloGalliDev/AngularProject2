import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    // podemos usar varios styles, so adicionar como stylesUrls: []
    styleUrl: './app.component.scss',
    imports: [
    RouterOutlet,
    HeaderComponent,
    UserComponent
]
})
export class AppComponent {
    title = 'angular-study';
}
