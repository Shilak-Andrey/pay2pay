import { TestBed } from '@angular/core/testing';

import { TransitsService } from './transits.service';

describe('TransitsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TransitsService = TestBed.get(TransitsService);
    expect(service).toBeTruthy();
  });
});
