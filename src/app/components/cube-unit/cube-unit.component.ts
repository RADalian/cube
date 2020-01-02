import { Component, OnInit, ElementRef, Input, ViewChild } from '@angular/core';
import { CubePosition } from '../../models/cube-position';
import { IPoint } from '../../models/cube-point';
import { CubeAxis } from '../../models/cube-axis';

@Component({
  selector: 'app-cube-unit',
  templateUrl: './cube-unit.component.html',
  styleUrls: ['./cube-unit.component.scss']
})
export class CubeUnitComponent implements OnInit {

  @Input() index: number;
  @ViewChild('front', { static: true }) front: ElementRef<HTMLDivElement>;
  @ViewChild('back', { static: true }) back: ElementRef<HTMLDivElement>;
  @ViewChild('right', { static: true }) right: ElementRef<HTMLDivElement>;
  @ViewChild('left', { static: true }) left: ElementRef<HTMLDivElement>;
  @ViewChild('top', { static: true }) top: ElementRef<HTMLDivElement>;
  @ViewChild('bottom', { static: true }) bottom: ElementRef<HTMLDivElement>;

  initPos: CubePosition; // initial position
  curPos: CubePosition;  // current position
  xAxis: CubeAxis;
  yAxis: CubeAxis;
  zAxis: CubeAxis;

  constructor(private hostElement: ElementRef) {
    this.initPos = new CubePosition();
    this.curPos = new CubePosition();
    this.xAxis = new CubeAxis();
    this.xAxis.x = 1;
    this.yAxis = new CubeAxis();
    this.yAxis.y = 1;
    this.zAxis = new CubeAxis();
    this.zAxis.z = 1;
  }

  ngOnInit() {
    this.initPosition();
    this.initFaces();
  }

  initPosition() {
    const planeIndex = this.index % 9;
    // const y = -1 + Math.floor(this.index / 9);
    // const x = -1 + planeIndex % 3;
    // const z = -1 + Math.floor(planeIndex / 3);
    const z = -1 + Math.floor(this.index / 9);
    const x = -1 + planeIndex % 3;
    const y = -1 + Math.floor(planeIndex / 3);
    this.initPos.setPosition(x, y, z);
    this.curPos.setPosition(x, y, z);

    // this.hostElement.nativeElement.style.transformOrigin = `${-x * 100}px  ${-y * 100}px  ${-z * 100}px`;
    this.hostElement.nativeElement.style.transform =
      `translate3d(${x * 100}px, ${y * 100}px, ${z * 100}px)`;
    //  this.hostElement.nativeElement.style.transformOrigin = `${-x * 100}px  ${-y * 100}px  ${-z * 100}px`;
    //  this.hostElement.nativeElement.style.transformOrigin = `${-x}100%  ${-y * 100}px  ${-z * 100}px`;

    let xOri = '';
    let yOri = '';
    let zOri = '';

    // if (this.initPos.x < 0) {
    //   xOri = '150px';
    // } else if (this.initPos.x === 0) {
    //   xOri = '0px';
    // } else {
    //   xOri = '-50px';
    // }

    // if (this.initPos.y < 0) {
    //   yOri = '150px';
    // } else if (this.initPos.y === 0) {
    //   yOri = '0px';
    // } else {
    //   yOri = '-50px';
    // }

    // if (this.initPos.z < 0) {
    //   zOri = '150px';
    // } else if (this.initPos.z === 0) {
    //   zOri = '0px';
    // } else {
    //   zOri = '-50px';
    // }
    if (this.initPos.x < 0) {
      xOri = '150px';
    } else if (this.initPos.x === 0) {
      xOri = '50px';
    } else {
      xOri = '-50px';
    }

    if (this.initPos.y < 0) {
      yOri = '150px';
    } else if (this.initPos.y === 0) {
      yOri = '50px';
    } else {
      yOri = '-50px';
    }

    if (this.initPos.z < 0) {
      zOri = '100px';
    } else if (this.initPos.z === 0) {
      zOri = '0px';
    } else {
      zOri = '-100px';
    }
    this.hostElement.nativeElement.style.transformOrigin = xOri + ' ' + yOri + ' ' + zOri;
  }

  initFaces() {
    if (this.initPos.x < 0) {
      this.left.nativeElement.style.backgroundColor = 'rgb(33, 33, 33)';
    }
    if (this.initPos.x > 0) {
      this.right.nativeElement.style.backgroundColor = 'rgb(255, 236, 96)';
    }
    if (this.initPos.y > 0) {
      this.bottom.nativeElement.style.backgroundColor = 'rgb(13, 194, 55)';
    }
    if (this.initPos.y < 0) {
      this.top.nativeElement.style.backgroundColor = 'rgb(18, 95, 213)';
    }
    if (this.initPos.z < 0) {
      this.back.nativeElement.style.backgroundColor = 'rgb(255, 166, 0)';
    }
    if (this.initPos.z > 0) {
      this.front.nativeElement.style.backgroundColor = 'rgb(212, 26, 27)';
    }
  }

  rotate(axis: string, angle: number, clockwise: boolean) {

    const curTransform = this.hostElement.nativeElement.style.transform as string;
    // tslint:disable-next-line:max-line-length
    // this.hostElement.nativeElement.style.transform += `rotate3d(${axis === 'x' ? this.axis.x : 0}, ${axis === 'y' ? this.axis.y : 0}, ${axis === 'z' ? this.axis.z : 0}, ${clockwise ? '+' : '-'}${angle}deg) `;
    // curTransform;
    switch (axis) {
      case 'x':
        // tslint:disable-next-line:max-line-length
        this.hostElement.nativeElement.style.transform += `rotate3d(${this.xAxis.x}, ${this.xAxis.y}, ${this.xAxis.z}, ${clockwise ? '+' : '-'}${angle}deg) `;
        break;
      case 'y':
        // tslint:disable-next-line:max-line-length
        console.log('error');
        this.hostElement.nativeElement.style.transform += `rotate3d(${this.yAxis.x}, ${this.yAxis.y}, ${this.yAxis.z}, ${clockwise ? '+' : '-'}${angle}deg) `;
        break;
      case 'z':
        // tslint:disable-next-line:max-line-length
        this.hostElement.nativeElement.style.transform += `rotate3d(${this.zAxis.x}, ${this.zAxis.y}, ${this.zAxis.z}, ${clockwise ? '+' : '-'}${angle}deg) `;
        break;
    }
    this.updateCoordinate(axis, angle, clockwise);
  }

  reset() {
    this.curPos.setPosition(this.initPos.x, this.initPos.y, this.initPos.z);
    this.hostElement.nativeElement.style.transform =
      `translate3d(${this.initPos.x * 100}px, ${this.initPos.y * 100}px, ${this.initPos.z * 100}px)`;
  }

  updateCoordinate(axis: string, angle: number, clockwise: boolean) {
    const rotationAngle = clockwise ? -angle : angle;
    if (axis === 'x') {
      const rotated = this.rotatePoint({ x: this.curPos.z, y: this.curPos.y }, rotationAngle);
      this.curPos.z = rotated.x;
      this.curPos.y = rotated.y;

      // const rotatedAxis = this.rotatePoint({ x: this.axis.z, y: this.axis.y }, angle);
      // this.axis.z = rotatedAxis.x;
      // this.axis.y = rotatedAxis.y;
      const yAxisRotated = this.rotatePoint({ x: this.yAxis.z, y: this.yAxis.y }, -rotationAngle);
      this.yAxis.z = yAxisRotated.x;
      this.yAxis.y = yAxisRotated.y;

      const zAxisRotated = this.rotatePoint({ x: this.zAxis.z, y: this.zAxis.y }, -rotationAngle);
      this.zAxis.z = zAxisRotated.x;
      this.zAxis.y = zAxisRotated.y;
      console.log('x axis: ' + this.xAxis.toString());
      console.log('y axis: ' + this.yAxis.toString());
      console.log('z axis: ' + this.zAxis.toString());
    }

    if (axis === 'y') {
      const rotated = this.rotatePoint({ x: this.curPos.x, y: this.curPos.z }, rotationAngle);
      this.curPos.x = rotated.x;
      this.curPos.z = rotated.y;

      // const rotatedAxis = this.rotatePoint({ x: this.axis.x, y: this.axis.z }, angle);
      // this.axis.x = rotatedAxis.x;
      // this.axis.z = rotatedAxis.y;

      console.log('error');
    }

    if (axis === 'z') {
      const rotated = this.rotatePoint({ x: this.curPos.y, y: this.curPos.x }, rotationAngle);
      this.curPos.y = rotated.x;
      this.curPos.x = rotated.y;

      const xAxisRotated = this.rotatePoint({ x: this.xAxis.y, y: this.xAxis.x }, -rotationAngle);
      this.xAxis.y = xAxisRotated.x;
      this.xAxis.x = xAxisRotated.y;

      const yAxisRotated = this.rotatePoint({ x: this.yAxis.y, y: this.yAxis.x }, -rotationAngle);
      this.yAxis.y = yAxisRotated.x;
      this.yAxis.x = yAxisRotated.y;

      console.log('x axis: ' + this.xAxis.toString());
      console.log('y axis: ' + this.yAxis.toString());
      console.log('z axis: ' + this.zAxis.toString());
      // console.log(this.xAxis);
      // console.log(this.yAxis);

      // const rotatedAxis = this.rotatePoint({ x: this.axis.y, y: this.axis.x }, angle);
      // this.axis.y = rotatedAxis.x;
      // this.axis.x = rotatedAxis.y;
    }

    console.log('Current Position: ' + this.curPos.toString());
  }

  rotatePoint(oriPoint: IPoint, angle: number): IPoint {
    const newPoint = { x: 0, y: 0 };
    const cosa = Math.cos(angle / 180 * Math.PI);
    const sina = Math.sin(angle / 180 * Math.PI);
    const cx = oriPoint.x;
    const cy = oriPoint.y;
    newPoint.x = Math.round(cosa * cx - sina * cy);
    newPoint.y = Math.round(sina * cx + cosa * cy);
    return newPoint;
  }
}
