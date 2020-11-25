import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { UsuarioProviderService } from '../../../core/providers/usuario/usuario-provider.service';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/core/models/usuario.model';
import { RouterLink, Router, Routes, RouterOutlet } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { AdminComponent } from '../../../admin/admin.component';
import { UsuarioComponent } from '../../../usuario/usuario.component';
import { PeriodistaComponent } from '../../../periodista/periodista.component';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.sass']
})
export class LoginScreenComponent implements OnInit {

  @ViewChild(UsuarioComponent) traspasoUser: UsuarioComponent;

  public usuarios$: Observable<Usuario[]>;
  public LoginFormGroup: FormGroup;

  constructor(private userProvider: UsuarioProviderService, private router: Router) {
    this.LoginFormGroup = new FormGroup({
      Email: new FormControl(''),
      Password: new FormControl(''),
    });
    this.usuarios$ = this.GetAllusers();
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  GetAllusers(): Observable<Usuario[]>{
    return this.userProvider.GetAllUsuarios();
  }

  // tslint:disable-next-line: typedef
  public ComprobarUsuario(users: Usuario[]){
    for (const usuario of users){
      if (usuario.Email === this.LoginFormGroup.get('Email').value){
        if (usuario.Password === this.LoginFormGroup.get('Password').value){
          sessionStorage.setItem('usuario', JSON.stringify(usuario));
        }
      }
    }
  }
}
