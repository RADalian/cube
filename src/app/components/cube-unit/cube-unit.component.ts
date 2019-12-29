import { Component, OnInit, ElementRef, Input, ViewChild } from '@angular/core';
import { CubePosition } from '../../models/cube-position';

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
      this.back.nativeElement.style.backgroundColor = 'orange';
    }
    if (this.initPos.z > 0) {
      this.front.nativeElement.style.backgroundColor = 'rgb(212, 26, 27)';
    }
  }

  rotate() {
    const curTransform = this.hostElement.nativeElement.style.transform;
    this.hostElement.nativeElement.style.transform = 'rotate3d(1,0, 0, 90deg) ' + curTransform;
  }
}
