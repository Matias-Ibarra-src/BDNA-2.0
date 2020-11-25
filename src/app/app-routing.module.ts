import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/inicio', pathMatch: 'full' },
  {path: 'inicio', loadChildren: () => import('./inicio/inicio.module').then(m => m.InicioModule) },
  {path: 'videos', loadChildren: () => import('src/app/videos/videos.module').then(m => m.VideosModule) },
  {path: 'login', loadChildren: () => import('src/app/login/login.module').then(m => m.LoginModule) },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
