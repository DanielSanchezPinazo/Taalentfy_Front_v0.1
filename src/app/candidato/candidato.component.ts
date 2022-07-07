import { Component, OnInit } from '@angular/core';

import { CandidatoService } from '../servicios/candidato.service';


@Component({
  selector: 'app-candidato',
  templateUrl: './candidato.component.html'
})
export class CandidatoComponent implements OnInit {

  candidatos: any = [];

  formulario: any = {

    Dni: '',
    Nombre: '',
    Titulo1: '',
    Titulo2: '',
    Aptitud1: '',
    Aptitud2: ''
  }

  id = '';

  constructor( private candidatoService: CandidatoService ) { }

  ngOnInit(): void {

    this.muestraCandidatos();
  }

  muestraCandidatos() {

    this.candidatoService.getCandidato().subscribe(respuesta => {

      this.candidatos = respuesta;
      //console.log(this.candidatos);
    })
  }

  nuevoCandidato() {

    this.candidatoService.newCandidato(this.formulario).subscribe( {

      next: () => this.muestraCandidatos()
    } );
    
    this.reiniciador();
    //console.log(this.formulario);
  }

  editCandidato() {

    this.candidatoService.updateCandidato(parseInt(this.id), this.formulario).subscribe({

      next: () => this.muestraCandidatos(),
      error: () => console.log("Candidato no existe")
    });

    this.reiniciador();
    //console.log(this.formulario);
  }

  borrarCandidato() {

    this.candidatoService.deleteCandidato(parseInt(this.id)).subscribe({

      next: () => this.muestraCandidatos(),
      error: () => console.log("Candidato no existe")
    });
  }

  reiniciador() {

    this.id = '';

    this.formulario = {

      Dni: '',
      Nombre: '',
      Titulo1: '',
      Titulo2: '',
      Aptitud1: '',
      Aptitud2: ''
    }
  }
}
