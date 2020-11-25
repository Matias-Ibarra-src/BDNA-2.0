import { Component, Input, OnInit } from '@angular/core';
import { Noticia } from '../../../core/models/noticia.model';

@Component({
  selector: 'app-semanal-card',
  templateUrl: './semanal-card.component.html',
  styleUrls: ['./semanal-card.component.sass']
})
export class SemanalCardComponent implements OnInit {
  @Input()
  public semanaTarjeta: Noticia;
  constructor() { }

  ngOnInit(): void {
  }

}
