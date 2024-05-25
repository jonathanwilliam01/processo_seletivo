import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-novo',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './novo.component.html',
  styleUrl: './novo.component.scss'
})
export class NovoComponent {
  currentComponent = 'Novo';
}
