import { Component } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-update-book-modal',
  templateUrl: './update-book-modal.component.html',
  styleUrl: './update-book-modal.component.css'
})
export class UpdateBookModalComponent {
  constructor(private apiService: ApiServiceService){}

  updateBook(event: Event, formData: any) {
    if (formData.title && formData.author && formData.genre) {
      this.apiService.updateBook(1, formData).subscribe();
      console.log(formData);
    }
    alert("Book updated successfully.");
  }
}
