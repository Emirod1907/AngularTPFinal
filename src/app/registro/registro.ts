import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { Navbar } from '../navbar/navbar';

@Component({
  selector: 'app-registro',
  imports: [FormsModule, Navbar],
  templateUrl: './registro.html',
  styleUrl: './registro.css'
})
export class Registro {
users =[
  {
    nombre:'John',
    apellido:'Wick',
    telefono:+111111111,
    email:'johnwick@gmail.com',
    password:'Babayaga'
  }
]
registrarUsuario(){
  console.log('usuario registrado con exito!')
  console.log(this.form_state)
}
  form_state={
    nombre:'',
    apellido:'',
    telefono:'',
    email:'',
    password:''
}
}

