import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { Usuario, UsuariosService } from '../usuarios.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-novo',
  standalone: true,
  imports: [CommonModule, ButtonModule, HttpClientModule],
  templateUrl: './novo.component.html',
  styleUrl: './novo.component.scss'
})
export class NovoComponent {
  currentComponent = 'Novo';

  novoUsuario: Usuario = { nome: '', email: '' };

  constructor(private usuariosService: UsuariosService) {}

  addUsuario() {
    this.usuariosService.addUsuario(this.novoUsuario).subscribe(() => {
      alert('Usuário adicionado com sucesso!');
      this.novoUsuario = { nome: '', email: '' };
    });
  }
}
