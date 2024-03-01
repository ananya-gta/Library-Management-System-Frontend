import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-issued-books',
  templateUrl: './issued-books.component.html',
  styleUrl: './issued-books.component.css'
})
export class IssuedBooksComponent 
  implements OnInit {
    issuedBooks: any;
  
    constructor(private apiService: ApiServiceService) {}
  
    ngOnInit(): void {
      this.apiService.getAllIssuedBooks().subscribe((data) => {
        this.issuedBooks = data.filter((myBook: any) => !myBook.issuedBook.available);
        console.log(this.issuedBooks);
      });
    }

    returnBook(id: number) {
      this.apiService.returnBook(id);
      console.log(id);
    }

    returnBookById() {
      this.apiService.returnBookById();
    }
}
