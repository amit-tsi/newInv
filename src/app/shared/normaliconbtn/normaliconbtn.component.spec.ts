import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NormaliconbtnComponent } from './normaliconbtn.component';

describe('NormaliconbtnComponent', () => {
  let component: NormaliconbtnComponent;
  let fixture: ComponentFixture<NormaliconbtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NormaliconbtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NormaliconbtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
