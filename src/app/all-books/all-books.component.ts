import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetAllBooksService } from '../get-all-books.service';

@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrl: './all-books.component.css',
})
export class AllBooksComponent implements OnInit {

  images = [{id:1, img: "https://m.media-amazon.com/images/I/81yo44UiIUL._SY425_.jpg"},
{id:2, img: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781471173936/the-great-gatsby-9781471173936_lg.jpg"}];

  books: any;

  constructor(private apiService: GetAllBooksService) {}

  ngOnInit(): void {
    this.apiService.getAllBooks().subscribe((data) => {
      this.books = data.filter((book: { available: any; }) => book.available);
      console.log(this.books);
    });
  }
}