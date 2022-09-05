import { FilterimagesPipe } from './filterimages.pipe';
import {ImageService} from './image.service';

describe('FilterimagesPipe', () => {
  let service: ImageService;
  beforeEach(() => {
    service = new ImageService();
  });

  it('create an instance', () => {
    const pipe = new FilterimagesPipe();
    expect(pipe).toBeTruthy();
  });

  it('debe retornar solo las imagenes con "brand" = "perro"', () => {
    const filter = new FilterimagesPipe();
    const images = service.getImages();
    const dogFilter = filter.transform(images, 'perro');
    expect(dogFilter.length).toEqual(3);
  });
  it('debe retornar solo las imagenes con "brand" = "gato"', () => {
    const filter = new FilterimagesPipe();
    const images = service.getImages();
    const catFilter = filter.transform(images, 'gato');
    expect(catFilter.length).toEqual(2);
  });
  it('debe retornar todas las imagenes', () => {
    const filter = new FilterimagesPipe();
    const images = service.getImages();
    const all = filter.transform(images, 'all');
    expect(all.length).toEqual(5);
  });
  it('debe retornar array vacío si se busca una imagen con brand que NO existe', () => {
    const filter = new FilterimagesPipe();
    const images = service.getImages();
    const testEmpty = filter.transform(images, 'test');
    expect(testEmpty.length).toEqual(0);
  });
});
