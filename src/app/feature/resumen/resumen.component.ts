import { Component } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCard} from '@angular/material/card';

@Component({
  selector: 'app-resumen',
  imports: [
    MatFormFieldModule,
    MatCard
  ],
  templateUrl: './resumen.component.html',
  styleUrl: './resumen.component.css'
})
export class ResumenComponent {

}
