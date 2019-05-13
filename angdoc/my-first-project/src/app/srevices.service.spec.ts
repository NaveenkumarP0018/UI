import { TestBed } from '@angular/core/testing';

import { SrevicesService } from './srevices.service';

describe('SrevicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SrevicesService = TestBed.get(SrevicesService);
    expect(service).toBeTruthy();
  });
});
