import { TestBed } from '@angular/core/testing';

import { GetAllIssuedBooksService } from './get-all-issued-books.service';

describe('GetAllIssuedBooksService', () => {
  let service: GetAllIssuedBooksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAllIssuedBooksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
