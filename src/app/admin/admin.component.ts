import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddBookModalComponent } from '../add-book-modal/add-book-modal.component';
import { AddUserModalComponent } from '../add-user-modal/add-user-modal.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  constructor(private modalService: NgbModal) { }

  openAddBookModal() {
    this.modalService.open(AddBookModalComponent);
  }

  openAddUserModal() {
    this.modalService.open(AddUserModalComponent);
  }
}
