import { Component, OnInit } from '@angular/core';
import { ConexionService, Item } from 'src/app/services/conexion.service';
import { FlashMessagesService } from "angular2-flash-messages";
@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  items: any;

  item: any = {
    name: '',
    pass: '',
    descrip: ''
  }

  editarItem: any = {
    name: ''
  }

  constructor(private conexion: ConexionService, public flashMensaje: FlashMessagesService) {
    this.conexion.listaItem().subscribe(item => {
      this.items = item;
      console.log(this.items);
    });

  }

  ngOnInit(): void {
  }

  eliminar(item) {

    try {
      this.conexion.eliminarItem(item);
      this.flashMensaje.show('Registro eliminado correctamente.',
        { cssClass: 'alert alert-danger', timeout: 3000 });
    } catch (error) {
      this.flashMensaje.show(error.message,
        { cssClass: 'alert alert-danger', timeout: 3000 });
      console.error('Log error: ', error);
    }
  }

  editar(item) {
    this.editarItem = item;
  }

  agregarItemEditado() {

    try {
      this.conexion.editarItem(this.editarItem);
      this.flashMensaje.show('Se edito el registro correctamente.',
        { cssClass: 'alert alert-success', timeout: 3000 });
    } catch (error) {
      this.flashMensaje.show(error.message,
        { cssClass: 'alert alert-danger', timeout: 3000 });
      console.error('Log error: ', error);
    }
  }

  agregar() {
    if (this.item.name == '' || this.item.pass == '' || this.item.descrip == '') {

    } else {
      try {
        this.conexion.agregarItem(this.item);
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
