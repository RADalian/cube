import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CubeMatrixComponent } from './cube-matrix.component';

describe('CubeMatrixComponent', () => {
  let component: CubeMatrixComponent;
  let fixture: ComponentFixture<CubeMatrixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CubeMatrixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CubeMatrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
