import { Injectable } from '@angular/core';
import { CLIENTES } from './clientes.json';//dato a manupular
import { Cliente } from './cliente';  //objeto cliente
import { Observable } from 'rxjs/Observable';//api
import { of } from 'rxjs/observable/of';
import {HttpClient} from '@angular/common/http';//cliente api rest

@Injectable()
export class ClienteService {
  private urlEndPoint: string ="http://localhost:8093/api/clientes";//url a la escucha de nuestra api rest
  constructor(private http: HttpClient) { }
               //retorna un stream y se comvierte a observable
  getClientes(): Observable<Cliente[]>{//metOdo que va retornar los clientes
    //return of(CLIENTES);//convertimos clienes en un observable(stream)->flujo de datos
    return this.http.get<any>(this.urlEndPoint);//aqui va retornar un observable sin embargo hay que hacer un cast
/*return this.http.get(this.urlEndPoint).pipe(
Map( response -> response as Cliente[])
);*///2DA FORMA
  }
}//AQUI SE HACE EL CONSUMO EN EL CLIENTE^^
