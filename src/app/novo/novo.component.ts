import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-novo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './novo.component.html',
  styleUrl: './novo.component.scss'
})
export class NovoComponent {
  currentComponent = 'Novo';
}
