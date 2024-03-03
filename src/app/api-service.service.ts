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

  private allUsersApiUrl = "http://localhost:8080/user/get";
  getAllUsers(): Observable<any[]>{
    return this.http.get<any>(`${this.allUsersApiUrl}`);
  }

  private issuedBooksByUserApiUrl = "http://localhost:8080/issueBook/getDetailsByUserId/5";
  getAllIssuedBooks(): Observable<any> {
    console.log(`${this.issuedBooksByUserApiUrl}`);
    return this.http.get<any>(`${this.issuedBooksByUserApiUrl}`);
  }

  private allIssuedBooksApiUrl = "http://localhost:8080/issueBook/getIssuedBookDetails";
  getAllIssuedBooksDetails(): Observable<any> {
    console.log(`${this.allIssuedBooksApiUrl}`);
    return this.http.get<any>(`${this.allIssuedBooksApiUrl}`);
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

  private addUserApiUrl = "http://localhost:8080/user/add"
  addUser(user: any):Observable<String>{
    return this.http.post(`${this.addUserApiUrl}`, user ,{ responseType : "text" });
  }

  private addBookApiUrl = "http://localhost:8080/book/add"
  addBook(book: any):Observable<String>{
    return this.http.post(`${this.addBookApiUrl}`, book ,{ responseType : "text" });
  }
}
