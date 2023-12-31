import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  error = false;
  pin = '';

  ngOnInit(): void {

  }

  ingresar() {
    //validar si el usuario no ingreso ningun caracter
    if (this.pin == '') {
      this.error = true;
      setTimeout(() => {
        this.error = false;
      }, 3000);
    }
  }


}
