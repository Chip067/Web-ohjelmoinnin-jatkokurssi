import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaatComponent } from './maat.component';

describe('MaatComponent', () => {
  let component: MaatComponent;
  let fixture: ComponentFixture<MaatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
