import { Component } from '@angular/core';

import { LoggedGuard } from './guards/logged.guard';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'taalentfy_front';

  usuarioLogueado: boolean = false;

  constructor(private loggedGuard: LoggedGuard) { 

    this.usuarioLogueado = this.loggedGuard.userLogged;
    console.log(this.usuarioLogueado);
   }

   logged() {
    return this.usuarioLogueado;
   }
}
