import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent {

  nav: Nav[] = [
    {
      link: '/home',
      name: 'Home',
      exact: true,
      admin: false
    },
    {
      link: '/cadastro',
      name: 'Cadastro',
      exact: true,
      admin: false
    },
    {
      link: '/sobre',
      name: 'Sobre',
      exact: true,
      admin: false
    },
    {
      link: '/produtos',
      name: 'Produtos',
      exact: true,
      admin: false
    },
    {
      link: '/filmes',
      name: 'Filmes',
      exact: true,
      admin: false
    },
    {
      link: '/bar',
      name: 'Bar',
      exact: true,
      admin: false
    },
    {
      link: '/todo',
      name: 'To Do',
      exact: true,
      admin: false
    },
    {
      link: '/admin',
      name: 'admin',
      exact: false,
      admin: false
    }
  ]
}

interface Nav {
  link: string,
  name: string,
  exact: boolean,
  admin: boolean
}