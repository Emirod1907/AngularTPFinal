import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';

@Component({
  selector: 'app-home',
  imports: [Navbar],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  title = 'clase_3_tp';
   
  nombre='Emiliano';
  saludar(){
    alert('Hola a todos')
  }
  contador=1;
  incrementar(){
    this.contador=this.contador+1;
    if (this.contador===10){
      alert('Has llegado al máximo')
      this.contador=10
    }
  }
    decrementar(){
    this.contador=this.contador-1;
    if (this.contador===0){
      alert('Has llegado al minimo')
      this.contador=0
    }
  }

}
