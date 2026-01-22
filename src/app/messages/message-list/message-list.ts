import { Component } from '@angular/core';
import { Message } from '../message.model';

@Component({
  selector: 'cms-message-list',
  standalone: false,
  templateUrl: './message-list.html',
  styleUrl: './message-list.css',
})
export class MessageList {
  messages: Message[] = [
    new Message('2', 'Hello World', 'This is Josh. Fear my wrath!', 'Josh Wilkins'),
    new Message('3', 'Angular', 'Angular makes web development easier', 'Archer Wilkins'),
    new Message('4', 'TypeScript', 'TypeScript adds types to JavaScript', 'Jannetta Wilkins'),
  ]

  onAddMessage(message: Message) {
    this.messages.push(message);
  }
}
