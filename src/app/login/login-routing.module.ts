import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginScreenComponent } from './screens/login-screen/login-screen.component';
import { RegisterScreenComponent } from './screens/register-screen/register-screen.component';
import { LoginComponent } from './login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    children: [
      {path: '', component: LoginScreenComponent},
      {path: 'registro', component: RegisterScreenComponent},
      {path: 'Admin',  loadChildren: () => import('src/app/admin/admin.module').then(m => m.AdminModule)},
      {path: 'Usuario', loadChildren: () => import('src/app/usuario/usuario.module').then(m => m.UsuarioModule)},
      {path: 'Periodista', loadChildren: () => import('src/app/periodista/periodista.module').then(m => m.PeriodistaModule) }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
