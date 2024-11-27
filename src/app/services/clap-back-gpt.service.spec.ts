import { TestBed } from '@angular/core/testing';

import { ClapBackGptService } from './clap-back-gpt.service';

describe('ClapBackGptService', () => {
  let service: ClapBackGptService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClapBackGptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
