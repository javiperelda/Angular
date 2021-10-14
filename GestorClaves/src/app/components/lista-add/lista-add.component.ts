import { Component, OnInit } from '@angular/core';
import { ConexionService } from 'src/app/services/conexion.service';
import { FlashMessagesService } from "angular2-flash-messages";

@Component({
  selector: 'app-lista-add',
  templateUrl: './lista-add.component.html',
  styleUrls: ['./lista-add.component.css']
})
export class ListaAddComponent implements OnInit {

  item: any = {
    name: '',
    pass: '',
    descrip: ''
  }
  constructor(private servicio: ConexionService, public flashMensaje: FlashMessagesService) { }

  ngOnInit(): void {
  }

  agregar() {
    if (this.item.name == '' || this.item.pass == '' || this.item.descrip == '') {
    
    } else {
      try {
        this.servicio.agregarItem(this.item);
        this.flashMensaje.show('Se registro correctamente.',
          { cssClass: 'alert alert-success', timeout: 3000 });
        this.item.name = '';
        this.item.pass = '';
        this.item.descrip = '';
      } catch (error) {
        this.flashMensaje.show(error.message,
          { cssClass: 'alert alert-danger', timeout: 3000 });
        console.error('Log error: ', error);
      }
    }
  }
}
