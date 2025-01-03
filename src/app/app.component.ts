import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavbarComponent} from './component/navbar/navbar.component';
import {InstructivoComponent} from './feature/instructivo/instructivo.component';
import {RegistroComponent} from './feature/registro/registro.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, InstructivoComponent, RegistroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'social-innovation';
}
