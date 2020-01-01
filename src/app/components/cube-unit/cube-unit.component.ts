import { Component, OnInit, ElementRef, Input, ViewChild } from '@angular/core';
import { CubePosition } from '../../models/cube-position';
import { IPoint } from '../../models/cube-point';

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

  constructor(private hostElement: ElementRef) {
    this.initPos = new CubePosition();
    this.curPos = new CubePosition();
  }

  ngOnInit() {
    this.initPosition();
    this.initFaces();
  }

  initPosition() {
    const planeIndex = this.index % 9;
    const y = -1 + Math.floor(this.index / 9);
    const x = -1 + planeIndex % 3;
    const z = -1 + Math.floor(planeIndex / 3);
    this.initPos.setPosition(x, y, z);
    this.curPos.setPosition(x, y, z);

    this.hostElement.nativeElement.style.transform =
      `translate3d(${x * 100}px, ${y * 100}px, ${z * 100}px)`;
//     this.hostElement.nativeElement.style.transformOrigin = `${-x * 100}px  ${-y * 100}px  ${-z * 100}px`;
// this.hostElement.nativeElement.style.transformOrigin = `${-x}100%  ${-y * 100}px  ${-z * 100}px`;
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
    this.updateCoordinate(axis, angle, clockwise);
    // const curTransform = this.hostElement.nativeElement.style.transform as string;
    this.hostElement.nativeElement.style.transform +=
      `rotate3d(${axis === 'x' ? 1 : 0}, ${axis === 'y' ? 1 : 0}, ${axis === 'z' ? 1 : 0}, ${clockwise ? '+' : '-'}${angle}deg) `;
      // + curTransform;
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
    }

    if (axis === 'y') {
      const rotated = this.rotatePoint({ x: this.curPos.x, y: this.curPos.z }, rotationAngle);
      this.curPos.x = rotated.x;
      this.curPos.z = rotated.y;
    }

    if (axis === 'z') {
      const rotated = this.rotatePoint({ x: this.curPos.y, y: this.curPos.x }, rotationAngle);
      this.curPos.y = rotated.x;
      this.curPos.x = rotated.y;
    }
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
