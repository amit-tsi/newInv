import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MajoringUnitComponent } from './measuring-unit.component';

describe('MajoringUnitComponent', () => {
  let component: MajoringUnitComponent;
  let fixture: ComponentFixture<MajoringUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MajoringUnitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MajoringUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
