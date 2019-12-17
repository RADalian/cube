import { Component, OnInit, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-cube-unit',
  templateUrl: './cube-unit.component.html',
  styleUrls: ['./cube-unit.component.scss']
})
export class CubeUnitComponent implements OnInit {

  @Input() index: number;

  constructor(private hostElement: ElementRef) { }

  ngOnInit() {
    const level = Math.floor(this.index / 9);
    const pos = this.index % 9;
    const x = -100 + (pos % 3) * 100;
    const z = 100 - Math.floor(pos / 3) * 100;
    const y = -100 + level * 100;
    console.log(`translate3d(${x}px, ${y}px, ${z}px)`);

    this.hostElement.nativeElement.style.transform = `translate3d(${x}px, ${y}px, ${z}px)`;
  }
}
