import { TestBed } from '@angular/core/testing';

import { PpiService } from './ppi.service';

describe('PpiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PpiService = TestBed.get(PpiService);
    expect(service).toBeTruthy();
  });
});
