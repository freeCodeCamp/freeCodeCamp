---
title: Create Reusable CSS with Mixins
---
## Create Reusable CSS with Mixins
`Mixin` is one of the great features that let developers use `SASS` instead of plain `CSS`, as it allows you to have a `Function` inside your Stylesheet!

To create a mixin you should follow the following scheme:
```scss
@mixin custom-mixin-name($param1, $param2, ....) {
    // CSS Properties Here...
}
```
And to use it in your element(s), you should use `@include` followed by your `Mixin` name, as following:
```scss
element {
    @include custom-mixin-name(value1, value2, ....);
}
```

---

### [Example] Write A `Text Shadow` in `SASS`
**Objective:** Apply a custom `Text Shadow` to an `h4` element

#### HTML
```html
<h4>This text needs a Shadow!</h4>
```

#### SASS _(Written in SCSS syntax)_
```scss
@mixin custom-text-shadow($offsetX, $offsetY, $blurRadius, $color) {
    -webkit-text-shadow: $offsetX, $offsetY, $blurRadius, $color;
    -moz-text-shadow: $offsetX, $offsetY, $blurRadius, $color;
    -ms-text-shadow: $offsetX, $offsetY, $blurRadius, $color;
    text-shadow: $offsetX, $offsetY, $blurRadius, $color;
}
h2 {
    @include custom-text-shadow(1px, 3px, 5px, #999999)
}
```
