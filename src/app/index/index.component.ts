import { Usuario } from './../usuarios.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { NovoComponent } from '../novo/novo.component';
import { UsuariosService } from '../usuarios.service';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule, ButtonModule, NovoComponent],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss',
})

export class IndexComponent implements OnInit{
  mostrarNovoComponent: boolean = false;

  toggleNovoComponent() {
    this.mostrarNovoComponent = !this.mostrarNovoComponent;
  }

  usuarios: Usuario[] = [];

  constructor(private usuariosService: UsuariosService) {}

  ngOnInit() {
    this.getUsuarios();
  }

  getUsuarios() {
    this.usuariosService.getUsuarios().subscribe(data => {
      this.usuarios = data;
    });
  }


  deleteUsuario(usuario: Usuario){
    const index = this.usuarios.indexOf(usuario);
    if (index !== -1) {
      this.usuarios.splice(index, 1);
      if (usuario.id !== undefined) {
        this.usuariosService.deleteUsuario(usuario.id).subscribe(
          () => console.log('Usuário excluído:', usuario),
          error => console.error('Erro ao excluir usuário:', error)
        );
      } else {
        console.error('Erro ao excluir usuário: ID indefinido');
      }
    }
  }

}
