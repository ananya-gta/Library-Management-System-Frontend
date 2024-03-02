import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrl: './all-books.component.css',
})
export class AllBooksComponent implements OnInit {
  books: any;

  constructor(
    private apiService: ApiServiceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.apiService.getAllBooks().subscribe((data) => {
      this.books = data.filter((book: { available: any }) => book.available);
      console.log(this.books);
    });
  }

  issueBook(book: any) {
    this.apiService.issueBook(book).subscribe({
      next: () => {
        const index = this.books.findIndex((issueBook: any) => issueBook.bookId === book.bookId);
        if (index !== -1) {
          this.books.splice(index, 1);
        } else {
          console.log('Error in issuing book');
        }
      },
    });
    console.log(book);
  }
}
