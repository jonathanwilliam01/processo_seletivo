import { Component} from '@angular/core';
import { IndexComponent } from './index/index.component';
import { NovoComponent } from './novo/novo.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [IndexComponent, NovoComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'processo_seletivo';

  currentComponent: string = '';

  setComponent(componentName: string) {
    this.currentComponent = componentName;
    console.log("Selecionou o componente:", this.currentComponent);
  }
}
