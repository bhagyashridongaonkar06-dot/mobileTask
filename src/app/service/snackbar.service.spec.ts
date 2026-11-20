import { TestBed } from '@angular/core/testing';

import { SnacknarService } from './snacknar.service';

describe('SnacknarService', () => {
  let service: SnacknarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SnacknarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
