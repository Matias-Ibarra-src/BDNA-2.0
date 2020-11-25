import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioComponent } from './usuario.component';

const routes: Routes = [
  {
    path: '',
    component: UsuarioComponent,
    children: [
      {path: '', redirectTo: 'inicio_us', pathMatch: 'full'},
      {path: 'videos_us', loadChildren: () => import('src/app/videos/videos.module').then(m => m.VideosModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
