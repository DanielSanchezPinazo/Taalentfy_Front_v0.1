import { Component, OnInit } from '@angular/core';
import { CandidaturaService } from '../servicios/candidatura.service';

@Component({
  selector: 'app-candidatura',
  templateUrl: './candidatura.component.html'
})
export class CandidaturaComponent implements OnInit {

  candidaturas: any = [];

  formulario: any = {

    Estado: '',
    Candidato: '',
    Oferta: ''
  }

  id = '';

  constructor( private candidaturaService: CandidaturaService ) { }

  ngOnInit(): void {

    this.muestraCandidaturas();
  }

  muestraCandidaturas() {

    this.candidaturaService.getCandidatura().subscribe(respuesta => {

      this.candidaturas = respuesta;
      //console.log(this.candidatos);
    })
  }

  nuevaCandidatura() {

    this.candidaturaService.newCandidatura(this.formulario).subscribe( {

      next: () => this.muestraCandidaturas()
    } );
    
    this.reiniciador();
    //console.log(this.formulario);
  }

  editCandidatura() {

    this.candidaturaService.updateCandidatura(parseInt(this.id), this.formulario).subscribe({

      next: () => this.muestraCandidaturas(),
      error: () => console.log("Candidatura no existe")
    });

    this.reiniciador();
    //console.log(this.formulario);
  }

  borrarCandidatura() {

    this.candidaturaService.deleteCandidatura(parseInt(this.id)).subscribe({

      next: () => this.muestraCandidaturas(),
      error: () => console.log("Candidato no existe")
    });
  }

  reiniciador() {

    this.id = '';

    this.formulario = {

      Estado: '',
      Candidato: '',
      Oferta: ''
    }
  }

}
