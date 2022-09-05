import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageDetailComponent } from './image-details.component';
import {ImageService} from "../image.service";
import {ActivatedRoute} from "@angular/router";
import {AppRoutingModule} from "../app-routing.module";

describe('ImageDetailsComponent', () => {
  let component: ImageDetailComponent;
  let fixture: ComponentFixture<ImageDetailComponent>;
  let service: ImageService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageDetailComponent ],
      providers: [ImageService],
      imports: [AppRoutingModule]
    }).compileComponents();
    service = TestBed.inject(ImageService);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
