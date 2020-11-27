import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  constructor(
    private _servicio: ServiceService,
    ) { }

    lista={};

  ngOnInit(
  ): void {
    this.cargarLista();
  }


  cargarLista(){
    this._servicio.listarservice().subscribe(data =>{
      console.log(data.productos);
      this.lista = data.productos;
    })
  } 

}
