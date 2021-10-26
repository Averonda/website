import { TestBed } from '@angular/core/testing';

import { ProjectGrepService } from './project-grep.service';

describe('ProjectGrepService', () => {
  let service: ProjectGrepService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectGrepService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
