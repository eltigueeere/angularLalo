import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { getListar } from "../other/getListar";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(
    private _http:HttpClient
  ) { }

  listarDeJava='http://localhost:8080/listar';


  listarservice(){
    console.log("En el service " + this.listarDeJava)
    return this._http.get<getListar>(this.listarDeJava);
  }

}
