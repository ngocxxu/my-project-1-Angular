import { TestBed } from '@angular/core/testing';

import { ServerHTTPService } from './server-http.service';

describe('ServerHTTPService', () => {
  let service: ServerHTTPService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServerHTTPService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
