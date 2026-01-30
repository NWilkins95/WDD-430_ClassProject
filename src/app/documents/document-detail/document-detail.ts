import { Component } from '@angular/core';
import { Document } from '../document.model';

@Component({
  selector: 'cms-document-detail',
  standalone: false,
  templateUrl: './document-detail.html',
  styleUrl: './document-detail.css',
})
export class DocumentDetail {
  document: Document;
}
