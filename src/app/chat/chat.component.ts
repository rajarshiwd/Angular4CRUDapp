import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase,FirebaseListObservable} from 'angularfire2/database'

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  messages: FirebaseListObservable<any[]>;

  constructor( private fire : AngularFireDatabase) { }

  ngOnInit() {

    this.getChatMsg();

  }

  getChatMsg(){
    this.messages= this.fire.list('chat_messages');
  }

  newMessage(message){
 
    this.messages.push(message);
  }

}
