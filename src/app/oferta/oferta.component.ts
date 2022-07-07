import { Component, OnInit } from '@angular/core';
import { OfertaService } from '../servicios/oferta.service';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html'
})
export class OfertaComponent implements OnInit {

  ofertas: any = [];

  formulario: any = {

    Nombre: '',
    Resumen: '',
    Ofertador: ''
  }

  id = '';

  constructor( private ofertaService: OfertaService ) { }

  ngOnInit(): void {

    this.muestraOfertas();
  }

  muestraOfertas() {

    this.ofertaService.getOferta().subscribe(respuesta => {

      this.ofertas = respuesta;
      //console.log(this.candidatos);
    })
  }

  nuevaOferta() {

    this.ofertaService.newOferta(this.formulario).subscribe( {

      next: () => this.muestraOfertas()
    } );
    
    this.reiniciador();
    //console.log(this.formulario);
  }

  editOferta() {

    this.ofertaService.updateOferta(parseInt(this.id), this.formulario).subscribe({

      next: () => this.muestraOfertas(),
      error: () => console.log("La oferta no existe")
    });

    this.reiniciador();
    //console.log(this.formulario);
  }

  borrarOferta() {

    this.ofertaService.deleteOferta(parseInt(this.id)).subscribe({

      next: () => this.muestraOfertas(),
      // error: () => console.log("La oferta no existe")
    });
  }

  reiniciador() {

    this.id = '';

    this.formulario = {

      Nombre: '',
      Resumen: '',
      Ofertador: ''
    }
  }
}
