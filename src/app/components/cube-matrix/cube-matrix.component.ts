import { Component, OnInit, ViewChild, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { CubeUnit } from '../../models/cube-unit';
import { CubeUnitComponent } from '../cube-unit/cube-unit.component';

@Component({
  selector: 'app-cube-matrix',
  templateUrl: './cube-matrix.component.html',
  styleUrls: ['./cube-matrix.component.scss']
})
export class CubeMatrixComponent implements OnInit {

  @ViewChild('matrixAxisSelect', { static: false }) matrixAxisSelect: ElementRef<HTMLSelectElement>;
  @ViewChild('matrixAngelSelect', { static: false }) matrixAngelSelect: ElementRef<HTMLSelectElement>;
  @ViewChild('matrixClockwiseSelect', { static: false }) matrixClockwiseSelect: ElementRef<HTMLSelectElement>;
  @ViewChild('sideAxisSelect', { static: false }) sideAxisSelect: ElementRef<HTMLSelectElement>;
  @ViewChild('sideSelect', { static: false }) sideSelect: ElementRef<HTMLSelectElement>;
  @ViewChild('sideAngelSelect', { static: false }) sideAngelSelect: ElementRef<HTMLSelectElement>;
  @ViewChild('sideClockwiseSelect', { static: false }) sideClockwiseSelect: ElementRef<HTMLSelectElement>;
  @ViewChild('matrix', { static: false }) matrix: ElementRef<HTMLDivElement>;
  @ViewChildren(CubeUnitComponent) cubeComponents: QueryList<CubeUnitComponent>;

  cubes: CubeUnit[] = [];

  constructor() {
    for (let i = 0; i < 1; i++) {
      this.cubes.push(new CubeUnit());
    }
  }

  ngOnInit() {
  }

  matrixRotateClick() {
    // const axis = this.matrixAxisSelect.nativeElement.value;
    // const angle = parseInt(this.matrixAngelSelect.nativeElement.value);
    // const clockwise = this.matrixClockwiseSelect.nativeElement.value === 'true';
    // this.matrix.nativeElement.style.transform +=
    //   `rotate3d(${axis === 'x' ? 1 : 0}, ${axis === 'y' ? 1 : 0}, ${axis === 'z' ? 1 : 0}, ${clockwise ? '+' : '-'}${angle}deg) `;
    // this.cubeComponents.forEach(c => c.updateCoordinate(axis, angle, clockwise));
    const axis = this.matrixAxisSelect.nativeElement.value;
    const angle = parseInt(this.matrixAngelSelect.nativeElement.value);
    const clockwise = this.matrixClockwiseSelect.nativeElement.value === 'true';
    this.cubeComponents.forEach(c => c.rotate(axis, angle, clockwise));
  }

  matrixResetClick() {
    this.matrix.nativeElement.style.transform = '';
    this.cubeComponents.forEach(c => c.reset());
  }

  sideRotateClick() {
    const axis = this.sideAxisSelect.nativeElement.value;
    const side = parseInt(this.sideSelect.nativeElement.value);
    const angle = parseInt(this.sideAngelSelect.nativeElement.value);
    const clockwise = this.sideClockwiseSelect.nativeElement.value === 'true';

    const targets = this.cubeComponents.filter(i =>
      (axis === 'x' && i.curPos.x === side) ||
      (axis === 'y' && i.curPos.y === side) ||
      (axis === 'z' && i.curPos.z === side)
     );
    targets.forEach(c => c.rotate(axis, angle, clockwise));
  }
}
