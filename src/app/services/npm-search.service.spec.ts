import { TestBed } from '@angular/core/testing';

import { NpmSearchService } from './npm-search.service';

describe('NpmSearchService', () => {
  let service: NpmSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NpmSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
