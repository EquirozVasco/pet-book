import { TestBed } from '@angular/core/testing';

import { ImageService } from './image.service';

describe('ImageService', () => {
  let service: ImageService;

  beforeEach(() => {
    TestBed.configureTestingModule({providers: [ImageService]});
    service = TestBed.inject(ImageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  describe('getImages', () => {
    it('debe retornar todas las imagenes', () => {
      const imagenes = service.getImages();
      expect(imagenes.length).toEqual(5);
    });
  });

  describe('getImage', () => {
    it('debe retornar la imagen con id si existe', () => {
      const imagene = service.getImage(1);
      expect(imagene.brand).toEqual('perro');
    });

    it('debe retornar indefinido si se busca una imagen con id que NO existe', () => {
      const imagene = service.getImage(100);
      expect(imagene).toEqual(undefined);
    });
  });
});
