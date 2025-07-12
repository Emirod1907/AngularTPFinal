import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Navbar } from '../navbar/navbar';

@Component({
  selector: 'app-login',
  imports: [FormsModule, Navbar],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
iniciarSesion(){
  console.log("Sesion iniciada, Bienvenido!")
}
form_state={
  email:'',
  password:''
}
}
