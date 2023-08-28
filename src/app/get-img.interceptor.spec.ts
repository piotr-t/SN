import { TestBed } from '@angular/core/testing';

import { GetIMGInterceptor } from './get-img.interceptor';

describe('GetIMGInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      GetIMGInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: GetIMGInterceptor = TestBed.inject(GetIMGInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
