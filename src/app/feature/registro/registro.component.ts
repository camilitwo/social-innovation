import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatCheckbox} from '@angular/material/checkbox';
import {MatOption} from '@angular/material/core';
import {MatCard} from '@angular/material/card';
import {FormsModule} from '@angular/forms';
import {MatInput} from '@angular/material/input';
import {MatButton} from '@angular/material/button';
import {MatSelect} from '@angular/material/select';
import {NavbarComponent} from '../../component/navbar/navbar.component';

@Component({
  selector: 'app-registro',
  imports: [
    MatFormFieldModule,
    MatCheckbox,
    MatOption,
    MatCard,
    FormsModule,
    MatInput,
    MatButton,
    MatSelect,
    NavbarComponent
  ],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  user = {
    nombre: '',
    email: '',
    telefono: '',
    mensajeria: '',
    facebook: false,
    instagram: false,
    twitter: false,
    habilidades: '',
    herramientas: ''
  };

  onSubmit() {
    console.log('Formulario enviado:', this.user);
    alert('¡Registro completado!');
  }
}
