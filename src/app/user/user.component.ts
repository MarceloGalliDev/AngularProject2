import { Component } from '@angular/core';
import { DUMMY_USERS } from '../dammy-users';

// função fora da classe
const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
    // todo dado apresentado dentro da class será acessado dentro do templateUrl
    // aqui indicamos propriedade public, podemos usar um private também para não deixa visivel globalmente
export class UserComponent {
    selectedUser = DUMMY_USERS[randomIndex];

    // o uso do this é pra referenciar uma propriedade da própria classe
    get imagePath() {
        return 'assets/users/' + this.selectedUser.avatar
    }

    onSelectUser() {
        console.log('Clicked')
    }
}
