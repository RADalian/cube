# Refactor CSS (By SASS)

You already write more `css` code and you can find __flex box layout__ feature is very commonly used. You can find there are duplicated `css` code in `cube-matrix.component.scss` and `cube-unit.component.scss` below.

``` css
* {
    display: flex;
    align-items: center;
    justify-content: center;
}
```

The code is to center the child elements. However, it's the duplicated css code in different component. We need to refactor the css code to reuse the common flex box layout style.

> [Help Link: SASS Syntax](https://sass-lang.com/documentation/syntax)

## Create Common "SCSS" File

To reuse the same `css` code, we need create new file for common style.
Add a new file `src\app\components\shared.component.scss` and add the code:

``` css
%flex-box {
  display: flex;
  align-items: center;
  justify-content: center;
}
```

## Refactor the Component SCSS

Now we will remove the duplicated code and add the common `scss` file reference in each component style file.

- Refactor the `cube-matrix.component.scss`

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
    transform-style: preserve-3d;
    @extend %flex-box;
}
```

> [Help: SCSS @extend syntax](https://sass-lang.com/documentation/at-rules/extend)

- Refactor the `cube-unit.component.scss`

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

You can find more feature and knowledge about [SASS](https://sass-lang.com/guide) in its website.
