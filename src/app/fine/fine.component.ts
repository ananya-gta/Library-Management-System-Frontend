import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-fine',
  templateUrl: './fine.component.html',
  styleUrl: './fine.component.css'
})
export class FineComponent implements OnInit {
  issuedBooks: any;

  constructor(private apiService: ApiServiceService) {}

  ngOnInit(): void {
    this.apiService.getAllIssuedBooks().subscribe((data) => {
      this.issuedBooks = data.filter((myBook: any) => myBook.issuedBook.available);
      console.log(this.issuedBooks);
    });
  }

}
