import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddBookModalComponent } from '../add-book-modal/add-book-modal.component';
import { AddUserModalComponent } from '../add-user-modal/add-user-modal.component';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css',
})
export class AdminComponent implements OnInit {
  allBooks: any;
  users: any;
  issuedBooks: any;
  details: any;
  selectedTable: string = 'users'; 

  constructor(
    private modalService: NgbModal,
    private apiService: ApiServiceService
  ) {}

  openAddBookModal() {
    this.modalService.open(AddBookModalComponent);
  }

  openAddUserModal() {
    this.modalService.open(AddUserModalComponent);
  }

  ngOnInit(): void {
    this.apiService.getAllBooks().subscribe((data) => {
      this.allBooks = data;
      console.log(this.allBooks);
    });

    this.apiService.getAllUsers().subscribe((data) => {
      this.users = data;
      console.log(this.users);
    });

    this.apiService.getAllIssuedBooksDetails().subscribe((data) => {
      this.issuedBooks = data;
      console.log(this.issuedBooks);
    });
  }

  showTable(table: string) {
    this.selectedTable = table;
  }
  
}
