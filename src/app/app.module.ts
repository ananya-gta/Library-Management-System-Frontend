import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AllBooksComponent } from './all-books/all-books.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { IssuedBooksComponent } from './issued-books/issued-books.component';
import { AdminComponent } from './admin/admin.component';
import { FineComponent } from './fine/fine.component';
import { AddBookModalComponent } from './add-book-modal/add-book-modal.component';
import { AddUserModalComponent } from './add-user-modal/add-user-modal.component';
import { FormsModule } from '@angular/forms';
import { UpdateBookModalComponent } from './update-book-modal/update-book-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AllBooksComponent,
    NavbarComponent,
    IssuedBooksComponent,
    AdminComponent,
    FineComponent,
    AddBookModalComponent,
    AddUserModalComponent,
    UpdateBookModalComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
