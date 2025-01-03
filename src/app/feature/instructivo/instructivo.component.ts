import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-instructivo',
  imports: [MatCardModule, MatGridListModule, MatButtonModule, RouterLink],
  templateUrl: './instructivo.component.html',
  styleUrl: './instructivo.component.css'
})
export class InstructivoComponent {

}
