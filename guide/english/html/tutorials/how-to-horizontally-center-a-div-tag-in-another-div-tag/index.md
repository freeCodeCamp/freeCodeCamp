---
title: How to Horizontally Center a Div Tag in Another Div Tag
---
## How to Horizontally Center a Div Tag in Another Div Tag
Horizontally centering a `<div>` inside of another `<div>` is pretty easy.

Let's start by creating two div tags with "parent" and "child" classes. The parent will be our container, and the child will be the `<div>` we're horizontally centering.

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>How to Horizontally Center a Div Tag in Another Div Tag</title>
</head>
<body>
  <div class="parent">
    <div class="child">
      <p>This is the center.</p>
    </div>
  </div>
</body>
</html>
```

There are a couple ways you can tacklet this, but for this tutorial let's focus on two. In the first we'll center our child `<div>` using `margin` and in the second we'll use `flexbox`.


### Example of Centering a Div Tag with Margins
If you specify a `width` on your child div you can use `margin: auto`. This will center your child `<div>` by evenly distributing its left-and-right margins.

```css
.parent {
  border: 2px solid red;
}

.centered-child {
  width: 50%;
  margin: auto;
  border: 1px solid black;
}
```

### Example of Centering a Div Tag with Flexbox
Using flexbox to center a `<div>` is slightly different. First, it doesn't require you to specify `width` on your child `<div>`. Second, you actually center the child `<div>` by applying css properties on the parent `<div>`.

To center a child `<div>` using flexbox you need to use `display: flex` along with `justify-content: center` on the parent `<div>`.

```css
.parent {
  display: flex;
  justify-content: center;
  border: 2px solid red;
}

.centered-child {
  border: 1px solid black;
}
```

#### More Information:
[Flexbox Support Matrix](http://caniuse.com/#search=flexbox)


