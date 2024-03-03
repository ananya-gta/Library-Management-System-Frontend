import { AfterViewInit, Component, ViewEncapsulation } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
declare var $: any;

@Component({
  selector: 'app-add-book-modal',
  templateUrl: './add-book-modal.component.html',
  styleUrl: './add-book-modal.component.css',
})
export class AddBookModalComponent {
  constructor(private apiService: ApiServiceService) {}

  addBook(event: Event, formData: any) {
    if (formData.title && formData.author && formData.genre) {
      this.apiService.addBook(formData).subscribe();
      console.log(formData);
    }
    alert("Book added successfully.");
  }
}
