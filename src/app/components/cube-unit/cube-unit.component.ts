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
    // this.hostElement.nativeElement.style.transformOrigin = `${(0 - x) * 150}px ${(0 - y) * 150}px ${(0 - z) * 150}px`;
  }

  initFaces() {
    if (this.initPos.x < 0) {
      this.left.nativeElement.style.backgroundColor = 'rgba(33, 33, 33, 1)';
    }
    if (this.initPos.x > 0) {
      this.right.nativeElement.style.backgroundColor = 'rgba(255, 236, 96, 1)';
    }
    if (this.initPos.y > 0) {
      this.bottom.nativeElement.style.backgroundColor = 'rgba(13, 194, 55, 1)';
    }
    if (this.initPos.y < 0) {
      this.top.nativeElement.style.backgroundColor = 'rgba(18, 95, 213, 1)';
    }
    if (this.initPos.z < 0) {
      this.back.nativeElement.style.backgroundColor = 'rgba(255, 166, 0, 1)';
    }
    if (this.initPos.z > 0) {
      this.front.nativeElement.style.backgroundColor = 'rgba(212, 26, 27, 1)';
    }
  }

  rotate(axis: string, angle: number, clockwise: boolean) {
    clockwise = false;
    if (axis === 'x') {
      const rotated = this.rotatePoint({ x: this.curPos.z, y: this.curPos.y }, angle);
      this.curPos.z = rotated.x;
      this.curPos.y = rotated.y;
    }

    if (axis === 'y') {
      const rotated = this.rotatePoint({ x: this.curPos.x, y: this.curPos.z }, angle);
      this.curPos.x = rotated.x;
      this.curPos.z = rotated.y;
    }

    if (axis === 'z') {
      const rotated = this.rotatePoint({ x: this.curPos.y, y: this.curPos.x }, angle);
      this.curPos.y = rotated.x;
      this.curPos.x = rotated.y;
    }


    // const oddRotation = angle / 90 % 2 !== 0;
    // if (axis === 'x') {
    //   const oddQuadrant = this.curPos.y * this.curPos.z;

    //   if (!oddRotation) {
    //     this.curPos.y = -this.curPos.y;
    //     this.curPos.z = -this.curPos.z;
    //   } else {
    //     if (oddQuadrant > 0) {
    //       if (clockwise) {
    //         this.curPos.y = -this.curPos.y;
    //         this.curPos.z = this.curPos.z;
    //       } else {
    //         this.curPos.y = this.curPos.y;
    //         this.curPos.z = -this.curPos.z;
    //       }
    //     } else if (oddQuadrant < 0) {
    //       if (clockwise) {
    //         this.curPos.y = this.curPos.y;
    //         this.curPos.z = -this.curPos.z;
    //       } else {
    //         this.curPos.y = -this.curPos.y;
    //         this.curPos.z = this.curPos.z;
    //       }
    //     }
    //   }
    // }

    // if (axis === 'y') {
    //   const oddQuadrant = this.curPos.x * this.curPos.z > 0;
    //   if (!oddRotation) {
    //     this.curPos.x = -this.curPos.x;
    //     this.curPos.z = -this.curPos.z;
    //   } else {
    //     if (oddQuadrant) {
    //       if (clockwise) {
    //         this.curPos.x = this.curPos.x;
    //         this.curPos.z = -this.curPos.z;
    //       } else {
    //         this.curPos.x = -this.curPos.x;
    //         this.curPos.z = this.curPos.z;
    //       }
    //     } else {
    //       if (clockwise) {
    //         this.curPos.x = -this.curPos.x;
    //         this.curPos.z = this.curPos.z;
    //       } else {
    //         this.curPos.x = this.curPos.x;
    //         this.curPos.z = -this.curPos.z;
    //       }
    //     }
    //   }
    // }

    // if (axis === 'z') {
    //   const oddQuadrant = this.curPos.x * this.curPos.y > 0;
    //   if (!oddRotation) {
    //     this.curPos.x = -this.curPos.x;
    //     this.curPos.y = -this.curPos.y;
    //   } else {
    //     if (oddQuadrant) {
    //       if (clockwise) {
    //         this.curPos.x = -this.curPos.x;
    //         this.curPos.y = this.curPos.y;
    //       } else {
    //         this.curPos.x = this.curPos.x;
    //         this.curPos.y = -this.curPos.y;
    //       }
    //     } else {
    //       if (clockwise) {
    //         this.curPos.x = this.curPos.x;
    //         this.curPos.y = -this.curPos.y;
    //       } else {
    //         this.curPos.x = -this.curPos.x;
    //         this.curPos.y = this.curPos.y;
    //       }
    //     }
    //   }
    // }

    const curTransform = this.hostElement.nativeElement.style.transform as string;
    this.hostElement.nativeElement.style.transform =
      `rotate3d(${axis === 'x' ? 1 : 0}, ${axis === 'y' ? 1 : 0}, ${axis === 'z' ? 1 : 0}, ${clockwise ? '+' : '-'}${angle}deg)`
      + curTransform;
  }

  rotatePoint(oriPoint: IPoint, angle: number): IPoint {
    const newPoint = { x: 0, y: 0 };
    const cosa = Math.cos(angle * 180 / Math.PI);
    const sina = Math.sin(angle * 180 / Math.PI);
    const dx = oriPoint.x;
    const dy = oriPoint.y;
    newPoint.x = cosa * dx - sina * dy;
    newPoint.y = sina * dx + cosa * dy;
    return newPoint;
  }
}
