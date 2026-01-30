import { Component, EventEmitter, Output } from '@angular/core';
import { Document } from '../document.model';

@Component({
  selector: 'cms-document-list',
  standalone: false,
  templateUrl: './document-list.html',
  styleUrl: './document-list.css',
})
export class DocumentList {
  @Output() selectedDocumentEvent = new EventEmitter<Document>();

  onSelected(document: Document) {
    this.selectedDocumentEvent.emit(document);
  }

  documents: Document[] = [
    new Document("1", "Project Proposal", "Initial project proposal document", "https://example.com/proposal.pdf"),
    new Document("2", "Design Document", "Detailed design specifications", "https://example.com/design.pdf"),
    new Document("3", "User Manual", "Comprehensive user manual", "https://example.com/manual.pdf"),
    new Document("4", "Test Plan", "Testing strategies and cases", "https://example.com/testplan.pdf"),
    new Document("5", "Final Report", "Summary of project outcomes", "https://example.com/finalreport.pdf"),
  ];
}