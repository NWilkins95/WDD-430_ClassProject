import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Message } from '../message.model';

@Component({
  selector: 'cms-message-edit',
  standalone: false,
  templateUrl: './message-edit.html',
  styleUrl: './message-edit.css',
})
export class MessageEdit {
  @ViewChild('msgText') msgTextInput: ElementRef<HTMLInputElement>;
  @ViewChild('subject') subjectInput: ElementRef<HTMLInputElement>;
  
  @Output() addMessageEvent = new EventEmitter<Message>();
  currentSender: string = 'Nicholas Wilkins';


  onSendMessage() {
    const msgText = this.msgTextInput.nativeElement.value;
    const subject = this.subjectInput.nativeElement.value;

    const newMessage = new Message("1", subject, msgText, this.currentSender);

    this.addMessageEvent.emit(newMessage);
  }

  onClear() {
    this.msgTextInput.nativeElement.value = '';
    this.subjectInput.nativeElement.value = '';
  }
}
