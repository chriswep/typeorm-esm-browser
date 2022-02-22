import { TestBed } from '@angular/core/testing';

import { TypeormService } from './typeorm.service';

describe('TypeormService', () => {
  let service: TypeormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
