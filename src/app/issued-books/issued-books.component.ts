import { Component, OnInit } from '@angular/core';
import { GetAllIssuedBooksService } from '../get-all-issued-books.service';

@Component({
  selector: 'app-issued-books',
  templateUrl: './issued-books.component.html',
  styleUrl: './issued-books.component.css'
})
export class IssuedBooksComponent 
  implements OnInit {
    issuedBooks: any;
  
    constructor(private apiService: GetAllIssuedBooksService) {}
  
    ngOnInit(): void {
      this.apiService.getAllIssuedBooks().subscribe((data) => {
        this.issuedBooks = data.filter((book: { available: any; }) => !book.available);
        console.log(this.issuedBooks);
      });
    }
}
