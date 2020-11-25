import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.sass']
})
export class UsuarioComponent implements OnInit {

  // tslint:disable-next-line: variable-name
  id_usuario: string;
  constructor() { }

  ngOnInit(): void {
    console.log('usuario component');
    console.log(this.id_usuario);
  }

  // tslint:disable-next-line: typedef
  public traspaso(value){
    console.log('traspaso');
    console.log(value);
    this.id_usuario = value;
  }
}
