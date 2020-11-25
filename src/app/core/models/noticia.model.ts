export interface Noticia{
  _id?: string;
  titulo: string;
  imgUrl: string;
  VideoUrl?: string;
  resumen: string;
  cuerpo: string;
  fecha: Date;
  categoria: string;
  mostraren: string;
  autor?: string;
  estado?: string;
  visitas?: number;
}
