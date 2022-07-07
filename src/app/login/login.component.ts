import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AdminService } from '../servicios/admin.service';
import { Admin } from '../models/admin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent {

  admins: any = [];

  formulario: any = {
    dni: '',
    pass: ''
  }

  // creo la variable admin que se suscribirá al servicio del login.

  admin: any;

  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit(): void {
    this.muestraAdmins();
  }

  muestraAdmins(): void {
    this.adminService.getAdmin().subscribe(respuesta => {
      this.admins = respuesta;
      console.log(this.admins);
    })
  }

  loggin(): void {

    const user: Admin = this.admins.find((element: { Dni: string; Pass: string; }) =>
      element.Dni == this.formulario.dni && element.Pass == this.formulario.pass
    );
    //console.log(user);
    if (user) {

      this.adminService.setUser(user);
      this.router.navigateByUrl('shared');
      //console.log(user);
    } else {

      //console.log("no ");
      //console.log(user);
    }
  }
}
