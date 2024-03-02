import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-issued-books',
  templateUrl: './issued-books.component.html',
  styleUrl: './issued-books.component.css',
})
export class IssuedBooksComponent implements OnInit {
  issuedBooks: any;
  newData: any;
  constructor(private apiService: ApiServiceService) {}

  ngOnInit(): void {
    this.apiService.getAllIssuedBooks().subscribe((data) => {
      this.issuedBooks = data.filter(
        (myBook: any) => !myBook.issuedBook.available
      );
      console.log(this.issuedBooks);
    });
  }

  returnBook(id: number) {
    const bookToReturn = this.apiService.returnBook(id).subscribe({
      next: () => {
        const index = this.issuedBooks.findIndex((book: any) => book.id === id);
        if (index !== -1) {
          this.issuedBooks.splice(index, 1);
        } else {
          console.log('Error in returning book');
        }
      },
    });
    console.log(id);
  }
}
