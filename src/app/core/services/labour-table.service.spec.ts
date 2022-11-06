import { TestBed } from '@angular/core/testing';

import { LabourTableService } from './labour-table.service';

describe('LabourTableService', () => {
  let service: LabourTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LabourTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
