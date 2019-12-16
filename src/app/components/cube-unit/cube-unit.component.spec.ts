import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CubeUnitComponent } from './cube-unit.component';

describe('CubeUnitComponent', () => {
  let component: CubeUnitComponent;
  let fixture: ComponentFixture<CubeUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CubeUnitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CubeUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
