import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  constructor(public router:Router) {}
  onLogo() {this.router.navigate(['/'])}
  onHome() {this.router.navigate(['/'])}
  onAbout() {this.router.navigate(['/about'])}
  onContact() {this.router.navigate(['/contact'])}

}
