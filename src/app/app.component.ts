import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dammy-users';
import { TasksComponent } from "./tasks/tasks.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    // podemos usar varios styles, so adicionar como stylesUrls: []
    styleUrl: './app.component.scss',
    imports: [
    RouterOutlet,
    HeaderComponent,
    UserComponent,
    TasksComponent
]
})
export class AppComponent {
    title = 'angular-study';
    users = DUMMY_USERS;

    // criando variável de inicialização
    selectedUserId?: string;

    // buscando os dados do id selecionado
    // o uso do ! no final do código é para indicar ao type script que nunca sera um valor nulo ou invalido
    // o uso do ? é para criar um fallback, em caso de existir retorne se não jogue undefined
    get selectedUser() {
        return this.users.find((user) => user.id === this.selectedUserId)!;
    }

    // aqui capturamos o id do usuario
    onSelectUser(id: string) {
        this.selectedUserId = id;
    }
}
