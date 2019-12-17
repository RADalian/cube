import { Component, OnInit } from '@angular/core';
import { CubeUnit } from '../../models/cube-unit';

@Component({
  selector: 'app-cube-matrix',
  templateUrl: './cube-matrix.component.html',
  styleUrls: ['./cube-matrix.component.scss']
})
export class CubeMatrixComponent implements OnInit {

  cubes: CubeUnit[] = [];

  constructor() {
    for (let i = 0; i < 27; i++) {
      this.cubes.push(new CubeUnit());
    }
  }

  ngOnInit() {
  }
}
