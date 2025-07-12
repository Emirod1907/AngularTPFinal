import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'


@Component({
  selector: 'app-chat',
  imports: [FormsModule],
  templateUrl: './chat.html',
  styleUrl: './chat.css'
})
export class Chat {
  messages= [
    {
      author: 'John Doe',
      text: 'Hello World',
      id: 1
    },
    {
      author: 'Mary Doe',
      text: 'How are you?',
      id: 2
    },
    {
      author: 'Joe Doe',
      text: 'Hi',
      id: 3
    },
  ]
  form_state= { author:'', text:''}
  enviarMensaje(){
      console.log("mensaje enviado")
      console.log(this.form_state)
      const newMessage = {
      id: Date.now(),
      author: this.form_state.author,
      text: this.form_state.text
    };
    this.messages.push(newMessage);
    this.form_state= { 
      author:'', 
      text:''
    }  
  }
  }