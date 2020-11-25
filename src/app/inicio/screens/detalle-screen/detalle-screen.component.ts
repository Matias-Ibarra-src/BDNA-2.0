import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Noticia } from 'src/app/core/models/noticia.model';
import { NoticiasProviderService } from '../../../core/providers/noticias/noticias-provider.service';
import { ComentarioProviderService } from '../../../core/providers/comentario/comentario-provider.service';
import { Comentario } from 'src/app/core/models/comentario.model';

@Component({
  selector: 'app-detalle-screen',
  templateUrl: './detalle-screen.component.html',
  styleUrls: ['./detalle-screen.component.sass']
})
export class DetalleScreenComponent implements OnInit {

  public noticia$: Observable<Noticia>;
  public Comentarios$: Observable<Comentario[]>;
  public Id: string;
  constructor(
    private noticiaprovider: NoticiasProviderService,
    private comentarProvider: ComentarioProviderService,
    private activateRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id: string =  this.activateRoute.snapshot.params['id'];
    this.Id = id;
    this.noticia$ = this.GetById(id);
    this.Comentarios$ = this.GetAllComentario();
  }

  // tslint:disable-next-line: typedef
  GetAllComentario(): Observable<Comentario[]>{
    return this.comentarProvider.GetAllComentarios();
  }

  // tslint:disable-next-line: typedef
  GetById(id: string): Observable<Noticia>{
    return this.noticiaprovider.getNoticiabyId(id);
  }

}
