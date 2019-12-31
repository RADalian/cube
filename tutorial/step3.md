# Update Cube Unit Component From Plane to Cube

## Make Cube Unit Display in screen center

Add the style in the `src\styles.scss` to make the `CubeUnitComponent` display in the screen center.

``` css
body {
    margin: 0px;
    height: 100vh;
    position: relative;
    display: flex;
    align-items: flex-start;
    justify-content: center;
}
```

We add the css property `display: flex` to use the CSS3 Flex Box for our angular overview Layout. More details in below chapter.

### _CSS Flex Box Layout_

Flex Box Layout is a new added CSS property in CSS3. It makes easier to design flexible responsive layout structure without using float or positioning.
Before the Flexbox Layout module, there were four layout modes:

- Block, for sections in a webpage  
- Inline, for text
- Table, for two-dimensional table data
- Positioned, for explicit position of an element

> [Help Link: CSS Flex Box Layout W3Schools](https://www.w3schools.com/css/css3_flexbox.asp)  
> [Help Link: CSS Flex Box Layout Tutorial](https://www.runoob.com/w3cnote/flex-grammar.html)

The following style makes all child elements to which the style is applied centered horizontally and vertically

``` css
.box {
    display: flex;
    align-items: center;
    justify-content: center;
}
```

## Add 6 faces for the cube unit  

- Change the `cube-unit.component.html` html code

``` html
<div class="face front">1</div>
<div class="face back">2</div>
<div class="face right">3</div>
<div class="face left">4</div>
<div class="face top">5</div>
<div class="face bottom">6</div>
```

- Change the `cube-unit.component.scss` css code

``` css
.face {
  position: absolute;
  width: 100px;
  height: 100px;
  line-height: 100px;
  font-family: sans-serif;
  font-size: 60px;
  color: white;
  text-align: center;
}

.front {
  background-color: rgba(0, 0, 0, 0.3);
  transform: translateZ(50px);
}

.back {
  background-color: rgba(0, 255, 0, 1);
  color: black;
  transform: rotateY(180deg) translateZ(50px);
}

.right {
  background-color: rgba(196, 0, 0, 0.7);
  transform: rotateY(90deg) translateZ(50px);
}

.left {
  background-color: rgba(0, 0, 196, 0.7);
  transform: rotateY(-90deg) translateZ(50px);
}

.top {
  background-color: rgba(196, 196, 0, 0.7);
  transform: rotateX(90deg) translateZ(50px);
}

.bottom {
  background-color: rgba(196, 0, 196, 0.7);
  transform: rotateX(-90deg) translateZ(50px);
}
```

You can see the `cube component` page like:
 ![face 6 plane](images/face_6_plane.png)

 You can get the `CSS3 Tranform` knowledge from [Link](https://www.w3school.com.cn/cssref/pr_transform.asp)

To display the 3D perspective, you should add the css as below to the `cube-unit.component.scss`

``` css
:host {
    width: 300px;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    perspective-origin: 95% 5%;
    perspective: 1000px;
    transform-style: preserve-3d;
}
```  

For the `:host` style, please see more details in the chapter below.

Now the cube show like  
![face 6 cube](images/face_6_cube.png)

## Component Host Element

The `:host` CSS pseudo-class selects the shadow host of the shadow DOM containing the CSS it is used inside — in other words, this allows you to select a custom element from inside its shadow DOM.  

> [Help Link (:host CSS)](https://developer.mozilla.org/en-US/docs/Web/CSS/:host)
> [Help Link (:host Angular)](https://angular.io/guide/component-styles#host)  

When the cube unit component display, the angular framework will create the parent `DOM` element for the component.
![host style](images/host_style.png)  

## _CSS Perspective_

<span style="font-size: 12px; color: orange; font-style: italic">This is an advanced topic for CSS 3D transformations. You can skip this topic and chapter and just change the CSS perspective to make your 3D vision more comfortable.</span>

The perspective property is used to give a 3D-positioned element some perspective.
The perspective property defines how far the object is away from the user. So, a lower value will result in a more intensive 3D effect than a higher value.  

> [Help Link: CSS perspective](https://www.w3schools.com/cssref/css3_pr_perspective.asp)
> [Help Link: CSS perspective-origin](https://www.w3schools.com/cssref/css3_pr_perspective-origin.asp)