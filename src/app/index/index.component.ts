import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})

export class IndexComponent {

  @Output() componentSelected = new EventEmitter<string>();

  selectComponent(componentName: string) {
    this.componentSelected.emit(componentName);
  }

}
