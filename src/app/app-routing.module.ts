import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllBooksComponent } from './all-books/all-books.component';
import { app } from '../../server';
import { HomePageComponent } from './home-page/home-page.component';
import { IssuedBooksComponent } from './issued-books/issued-books.component';
import { FineComponent } from './fine/fine.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [
  { path: 'all-books', component: AllBooksComponent },
  { path: '', component: HomePageComponent },
  { path: 'issued-books', component: IssuedBooksComponent },
  { path: 'fine', component: FineComponent },
  { path: 'admin', component: AdminComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
