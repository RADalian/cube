# Refactor CSS (By SASS)

You already write more `css` code and you can find __flex box layout__ feature is used in very commonly used. You can find you already write the code in `cube-matrix.component.scss` and `cube-unit.component.scss` below.

``` css
* {
    display: flex;
    align-items: center;
    justify-content: center;
}
```

It enables child elements to be centered. But it's the duplicated code for scss. We need to refactor to reuse the common flex box layout code.

> [Help Link: SASS Syntax](https://sass-lang.com/documentation/syntax)

## Create Common "SCSS" File

Add a new file `src\app\components\shared.component.scss` and add the code:

``` css
%flex-box {
  display: flex;
  align-items: center;
  justify-content: center;
}
```

## Refactor the Component SCSS

Refactor the `cube-matrix.component.scss`

``` css
@import "../shared.component.scss";

:host {
    width: 900px;
    height: 900px;
    perspective-origin: 95% 5%;
    perspective: 1000px;
    transform-style: preserve-3d;
    @extend %flex-box;
}

.cube-container {
    width: 300px;
    height: 300px;
    @extend %flex-box;
}
```

> [Help: SCSS @extend syntax](https://sass-lang.com/documentation/at-rules/extend)

Refactor the `cube-unit.component.scss`

``` css
@import "../shared.component.scss";

:host {
    width: 100px;
    height: 100px;
    transform-style: preserve-3d;
    position: absolute;
    @extend %flex-box;
}

......
```

You can find more feature and knowledge about `SASS` in its website.
