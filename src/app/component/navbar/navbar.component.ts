import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import {RouterLink} from '@angular/router';
import {MatAnchor, MatIconButton} from '@angular/material/button';


@Component({
  selector: 'app-navbar',
  imports: [MatToolbarModule, MatMenuModule, MatIconModule, RouterLink, MatAnchor, MatIconButton],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
