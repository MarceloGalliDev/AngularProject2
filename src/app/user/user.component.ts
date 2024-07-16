import { Component, Input, computed, signal, input, Output, EventEmitter } from '@angular/core';
import { DUMMY_USERS } from '../dammy-users';

// função fora da classe
// todas vez que iniciar a tela ele roda esse comando
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
    // // aqui estamos armazenando o usuario selecionado, que vem do array DUMMY_USERS
    // selectedUser = signal(DUMMY_USERS[randomIndex]);

    // // a função de computed é utilizada para calcular o caminho da imagem do avatar sempre que selectedUser muda, imagePath é reavaliado automaticamente
    // imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);


    // // o uso do this é pra referenciar uma propriedade da própria classe
    // get imagePath() {
    //     return 'assets/users/' + this.selectedUser.avatar
    // }

    // como temos a função de click ele esta executando a função no
    // onSelectUser() {
        // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

        // // a função set() do angular é para atualizar o valor do estado da propriedade
        // // sempre que o user mudar ele reativa a observação do campo para fazer a alteração
        // this.selectedUser.set(DUMMY_USERS[randomIndex]);
    //}

    //-----1 parte-----

    // o uso do decorador @Input é para definir propriedades passadas de pai para filho
    // o uso do required: true, isso marca a propriedade como true, caso contrario volta um erro
    @Input({ required: true }) id!: string;
    @Input({ required: true }) avatar!: string;
    @Input({ required: true }) name!: string;

    // // também posso usar nesse formato
    // avatar = input<string>('');
    // avatar = input.required<string>();
    // name = input.required<string>();

    // essa instancia usando EventEmitter() emiti valores personalizados por meio dessa propriedade select para qualquer componente pai
    @Output() select = new EventEmitter();

    get imagePath() {
        return 'assets/users/' + this.avatar;
    }

    // aqui precisamos transformar avatar em uma função devido a inclusão do signals
    // imagePath = computed(() => {
    //     return 'assets/users/' + this.avatar();
    // })

    // aqui nesse this.select.emit(this.id) eu estou passando os dados do usuário sempre que acessado
    onSelectUser() {
        this.select.emit(this.id);
    }
}
