import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllBooksComponent } from './all-books/all-books.component';
import { app } from '../../server';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [{ path: 'all-books', component: AllBooksComponent }, {path:'', component: HomePageComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
