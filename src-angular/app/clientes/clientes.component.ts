import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
//importaamos la clase service paara poder utilizarla
import { ClienteService } from './cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'

})
export class ClientesComponent implements OnInit {
clientes: Cliente[];
//hacemos inyeccion de dependencias para utilizar la claase service
              //ejemplo1
//private clienteService: ClienteService
//constructor(clienteService: ClienteService){
//this.clienteService = clienteService;
//}
//
              //ejemplo2
constructor(private clienteService: ClienteService) { }

  ngOnInit() {
    this.clienteService.getClientes().subscribe(
      clientes => this.clientes = clientes
    );
  }

}
