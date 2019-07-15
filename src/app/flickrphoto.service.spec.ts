import { TestBed } from '@angular/core/testing';

import { FlickrphotoService } from './flickrphoto.service';

describe('FlickrphotoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FlickrphotoService = TestBed.get(FlickrphotoService);
    expect(service).toBeTruthy();
  });
});
