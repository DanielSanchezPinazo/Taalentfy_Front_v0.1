import { Component, OnInit } from '@angular/core';

import { EmpresaService } from '../servicios/empresa.service';


@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html'
})
export class EmpresaComponent implements OnInit {

  empresas: any = [];

  formulario: any = {

    CIF: '',
    Nombre: '',
    Descripcion: ''
  }

  id = '';

  constructor( private empresaService: EmpresaService ) { }

  ngOnInit(): void {

    this.muestraEmpresas();
  }

  muestraEmpresas() {

    this.empresaService.getEmpresa().subscribe(respuesta => {

      this.empresas = respuesta;
      //console.log(this.candidatos);
    })
  }

  nuevaEmpresa() {

    this.empresaService.newEmpresa(this.formulario).subscribe( {

      next: () => this.muestraEmpresas()
    } );
    
    this.reiniciador();
    //console.log(this.formulario);
  }

  editEmpresa() {

    this.empresaService.updateEmpresa(parseInt(this.id), this.formulario).subscribe({

      next: () => this.muestraEmpresas(),
      error: () => console.log("La empresa no existe")
    });

    this.reiniciador();
    //console.log(this.formulario);
  }

  borrarEmpresa() {

    this.empresaService.deleteEmpresa(parseInt(this.id)).subscribe({

      next: () => this.muestraEmpresas()
    });

    this.reiniciador();
  }

  reiniciador() {

    this.id = '';

    this.formulario = {

      CIF: '',
      Nombre: '',
      Descripcion: ''
    }
  }
}
