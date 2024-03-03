import { Component } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-add-user-modal',
  templateUrl: './add-user-modal.component.html',
  styleUrl: './add-user-modal.component.css',
})
export class AddUserModalComponent {
constructor(private apiService: ApiServiceService){}

  addUser(event: Event, formData: any) {
    event.preventDefault();
    if (formData.name && formData.email && formData.phone) {
      this.apiService.addUser(formData).subscribe();
      console.log(formData);
    }
  }
}
