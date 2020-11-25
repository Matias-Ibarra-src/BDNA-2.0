import { Component, Input, OnInit } from '@angular/core';
import { Noticia } from '../../../core/models/noticia.model';

@Component({
  selector: 'app-detalle-card',
  templateUrl: './detalle-card.component.html',
  styleUrls: ['./detalle-card.component.sass']
})
export class DetalleCardComponent implements OnInit {

  @Input()
  public DetalleTarjeta: Noticia;

  constructor() { }

  ngOnInit(): void {
  }

}
