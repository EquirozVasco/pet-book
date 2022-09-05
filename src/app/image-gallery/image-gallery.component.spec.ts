import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GalleryComponent } from './image-gallery.component';
import {ImageService} from '../image.service';
import {AppRoutingModule} from '../app-routing.module';
import {By} from '@angular/platform-browser';
import {FilterimagesPipe} from '../filterimages.pipe';

describe('ImageGalleryComponent', () => {
  let component: GalleryComponent;
  let fixture: ComponentFixture<GalleryComponent>;
  let service: ImageService;
  const Imagesdelatils = [
    { "id": 1, "brand": "perro", "url": "assets/images/perro1.jpg" },
    { "id": 2, "brand": "perro", "url": "assets/images/perro2.jpg" },
    { "id": 3, "brand": "gato", "url": "assets/images/gato1.jpg" },
    { "id": 4, "brand": "gato", "url": "assets/images/gato2.jpeg" },
    { "id": 5, "brand": "perro", "url": "assets/images/perro3.jpg" },
  ];


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryComponent, /*FilterimagesPipe*/ ],
      providers: [ImageService],
      imports: []
    }).compileComponents();
    service = new ImageService();
    service = TestBed.inject(ImageService);
    spyOn(service, 'getImages').and.returnValue(Imagesdelatils);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Al presionar click debe filtrar las imágenes de perros, y solo mostrar éstas.', () => {
    const btnElement = fixture.debugElement.query(By.css('#perro'));
    btnElement.nativeElement.click();
    fixture.detectChanges();
    const perros = fixture.debugElement.queryAll(By.css('.img'));
    expect(perros.length).toEqual(3);
  });

  it('Al presionar click debe filtrar las imágenes de gatos, y solo mostrar éstas.', () => {
    const btnElement = fixture.debugElement.query(By.css('#gato'));
    btnElement.nativeElement.click();
    fixture.detectChanges();
    const gatos = fixture.debugElement.queryAll(By.css('.img'));
    expect(gatos.length).toEqual(2);
  });

  it('Al presionar click debe mostrar todas la imágenes.', () => {
    const btnElement = fixture.debugElement.query(By.css('#all'));
    btnElement.nativeElement.click();
    fixture.detectChanges();
    const all = fixture.debugElement.queryAll(By.css('.img'));
    expect(all.length).toEqual(5);
  });
});
