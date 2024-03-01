import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }

  private allBooksApiUrl = "http://localhost:8080/book/get";
  getAllBooks(): Observable<any> {
    return this.http.get<any>(`${this.allBooksApiUrl}`);
  }

  private issuedBooksByUserApiUrl = "http://localhost:8080/issueBook/getDetailsByUserId/5";
  getAllIssuedBooks(): Observable<any> {
    console.log(`${this.issuedBooksByUserApiUrl}`);
    return this.http.get<any>(`${this.issuedBooksByUserApiUrl}`);
  }

  private returnBookApiUrl = "http://localhost:8080/issueBook/returnBook/";
  returnBook(id: number): any {
    console.log(`${this.returnBookApiUrl + id}`);
    return this.http.get<any>(`${this.returnBookApiUrl + id}`);
  }

  //hard core issuedBookId
  private returnBookByIdApiUrl = "http://localhost:8080/issueBook/returnBook/12";
  returnBookById(): Observable<any> {
    console.log(`${this.returnBookByIdApiUrl}`);
    return this.http.get<any>(`${this.returnBookByIdApiUrl}`);
  }
}
