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
}
