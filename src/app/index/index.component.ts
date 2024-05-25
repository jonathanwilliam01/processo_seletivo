import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { NovoComponent } from '../novo/novo.component';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule, ButtonModule, NovoComponent],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})

export class IndexComponent {
  mostrarNovoComponent: boolean = false;

  toggleNovoComponent() {
    this.mostrarNovoComponent = !this.mostrarNovoComponent;
  }

}
