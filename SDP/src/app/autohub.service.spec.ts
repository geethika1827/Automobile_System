import { TestBed } from '@angular/core/testing';

import { AutohubService } from './autohub.service';

describe('AutohubService', () => {
  let service: AutohubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutohubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
