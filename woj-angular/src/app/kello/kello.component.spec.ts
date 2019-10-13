import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KelloComponent } from './kello.component';

describe('KelloComponent', () => {
  let component: KelloComponent;
  let fixture: ComponentFixture<KelloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KelloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
