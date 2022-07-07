import { Component, OnInit } from '@angular/core';

import { Admin } from '../models/admin';
import { AdminService } from '../servicios/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html'
})
export class AdminComponent implements OnInit {

  admins: any = [];

  formulario: any = {

    dni: '',
    pass: '',
    nombre: ''
  }

  id = '';

  constructor( private adminService: AdminService ) { }

  ngOnInit(): void {

    this.muestraAdmins();
  }

  muestraAdmins() {

    this.adminService.getAdmin().subscribe(respuesta => {

      this.admins = respuesta;
      console.log(this.admins);
    })
  }

  nuevoAdmin() {

    this.adminService.newAdmin(this.formulario).subscribe( {

      next: () => this.muestraAdmins()
    } );
    
    this.reiniciador();
    //console.log(this.formulario);
  }

  editAdmin() {

    this.adminService.updateAdmin(parseInt(this.id), this.formulario).subscribe({

      next: () => this.muestraAdmins(),
      error: () => console.log("Candidato no existe")
    });

    this.reiniciador();
    //console.log(this.formulario);
  }

  borrarAdmin() {

    this.adminService.deleteAdmin(parseInt(this.id)).subscribe({

      next: () => this.muestraAdmins(),
      error: () => console.log("Candidato no existe")
    });
  }

  reiniciador() {

    this.id = '';

    this.formulario = {

      dni: '',
      pass: '',
      nombre: ''
    }
  }
}
