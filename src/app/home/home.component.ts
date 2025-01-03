import { Component } from '@angular/core';
import {InstructivoComponent} from "../feature/instructivo/instructivo.component";
import {NavbarComponent} from "../component/navbar/navbar.component";

@Component({
  selector: 'app-home',
    imports: [
        InstructivoComponent,
        NavbarComponent
    ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
