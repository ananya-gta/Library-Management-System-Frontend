import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddBookModalComponent } from '../add-book-modal/add-book-modal.component';
import { AddUserModalComponent } from '../add-user-modal/add-user-modal.component';
import { ApiServiceService } from '../api-service.service';
import { UpdateBookModalComponent } from '../update-book-modal/update-book-modal.component';

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

  openUpdateBookModal() {
    this.modalService.open(UpdateBookModalComponent);
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

  deleteUser(userId: number) {
    this.apiService.deleteUser(userId).subscribe({
      next: () => {
        const index = this.users.findIndex(
          (user: any) => user.userId === userId
        );
        if (index !== -1) {
          this.users.splice(index, 1);
        } else {
          console.log('Error in deleting user');
        }
      },
    });
    console.log(userId);
  }

  deleteBook(bookId: number) {
    this.apiService.deleteBook(bookId).subscribe({
      next: () => {
        const index = this.allBooks.findIndex(
          (book: any) => book.bookId === bookId
        );
        if (index !== -1) {
          this.allBooks.splice(index, 1);
        } else {
          console.log('Error in deleting user');
        }
      },
    });
    console.log(bookId);
  }
}
