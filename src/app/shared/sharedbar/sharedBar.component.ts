import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sharedBar',
  templateUrl: './sharedBar.component.html'
})
export class SharedBarComponent {

  ruta = '';
  
  constructor(private router: Router) { }

  enrut() {

    if (this.ruta == '') {

      this.router.navigateByUrl('login');
    }
    
    if (this.ruta == 'candidato') {

      this.router.navigateByUrl('candidato');  
    }

    if (this.ruta == 'empresa') {

      this.router.navigateByUrl('empresa');
    }
    
    if (this.ruta == 'oferta') {

      this.router.navigateByUrl('oferta');
    }
    
    if (this.ruta == 'candidatura') {

      this.router.navigateByUrl('candidatura');
    }

    if (this.ruta == 'admin') {

      this.router.navigateByUrl('admin');
    }
  } 
}
