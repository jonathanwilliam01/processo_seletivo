import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})

export class IndexComponent {

  @Output() componentSelected = new EventEmitter<string>();

  selectComponent(componentName: string) {
    this.componentSelected.emit(componentName);
  }

}
