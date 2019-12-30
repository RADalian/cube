# Add Control to Rotate Cube Matrix Side

Like adding the control to rotate cube matrix, to rotate the cube matrix side, we also need to know which axis to rotate, rotate direction and so on. Besides, we need to know which side we need to rotote (left, middle or right).

## Add the Side Rotation Action Controls

I put the side control on the upper right corner and I add the code `cube-matrix.component.html`.

``` html
...
<div id="cube-side-control" class="control-panel">
    <div class="control-form">
        <label>Axis:</label>
        <select #sideAxisSelect>
            <option selected value="x">X</option>
            <option value="y">Y</option>
            <option value="z">Z</option>
        </select>
    </div>
    <div class="control-form">
        <label>Side:</label>
        <select #sideSelect>
            <option selected value="0">Left</option>
            <option value="1">Middle</option>
            <option value="2">Right</option>
        </select>
    </div>
    <div class="control-form">
        <label>Angle:</label>
        <select #sideAngelSelect>
            <option selected value="90">90</option>
            <option value="180">180</option>
            <option value="270">270</option>
        </select>
    </div>
    <div class="control-form">
        <label>Clockwise:</label>
        <select #sideClockwiseSelect>
            <option selected value="0">clockwise</option>
            <option value="1">anti-clockwise</option>
        </select>
    </div>
    <div class="control-form">
        <button (click)="sideRotateClick()">Rotate</button>
    </div>
</div>
...
```

And code in `cube-matrix.component.scss`

``` css
...
#cube-control {
    position: absolute;
    left: 5px;
    top: 5px
}

#cube-side-control {
    position: absolute;
    right: 5px;
    top: 5px;
}
...
```

## Add the Control Reference

The same like in [Step 8](/tutorial/step8.md), we need add the HTML control reference in the `CubeMatrixComponent`. As we will control some of specific `cube` instance to rotate, so we need get each `cube-unit.component` reference.  

We add the properties in the `CubeMatrixComponent`

``` ts
...
  @ViewChild('sideAxisSelect', { static: false }) sideAxisSelect: ElementRef<HTMLSelectElement>;
  @ViewChild('sideSelect', { static: false }) sideSelect: ElementRef<HTMLSelectElement>;
  @ViewChild('sideAngelSelect', { static: false }) sideAngelSelect: ElementRef<HTMLSelectElement>;
  @ViewChild('sideClockwiseSelect', { static: false }) sideClockwiseSelect: ElementRef<HTMLSelectElement>;
  @ViewChildren(CubeUnitComponent) cubeComponents: QueryList<CubeUnitComponent>;
...
```

> [Help Link: Angular @ViewChildren](https://angular.io/api/core/ViewChildren)

## Add the Rotation Logic

``` ts
  sideRotateClick() {
    const axis = this.sideAxisSelect.nativeElement.value;
    const side = this.sideSelect.nativeElement.value;
    const angle = this.sideAngelSelect.nativeElement.value;
    const clockwise = this.sideClockwiseSelect.nativeElement.value;

    const targets = this.cubeComponents.filter(i => i.curPos.x < 0);
    targets.forEach(c => c.rotate());
  }
```