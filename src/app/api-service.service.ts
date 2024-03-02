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
  returnBook(id: number): Observable<string> {
    console.log(`${this.returnBookApiUrl + id}`);
    return this.http.get(`${this.returnBookApiUrl + id}`, {responseType: "text"});
  }

  private issueBookApiUrl = "http://localhost:8080/issueBook/5"
  issueBook(book: any): Observable<string> {
    return this.http.post(`${this.issueBookApiUrl}`, book, {responseType: "text"});
  }

}
