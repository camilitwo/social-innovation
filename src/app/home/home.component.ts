import { Component } from '@angular/core';
import {InstructivoComponent} from "../feature/instructivo/instructivo.component";
import {NavbarComponent} from "../component/navbar/navbar.component";
import {ResumenComponent} from '../feature/resumen/resumen.component';
import {FooterComponent} from '../component/footer/footer.component';

@Component({
  selector: 'app-home',
  imports: [
    InstructivoComponent,
    NavbarComponent,
    ResumenComponent,
    FooterComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
