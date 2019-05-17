---
title: Use a CSS Linear Gradient to Create a Striped Element
---
## Use a CSS Linear Gradient to Create a Striped Element

### Solution

```html
<style>

  div{ 
    border-radius: 20px;
    height: 400px;
    margin:  50 auto;
    background: repeating-linear-gradient(
      45deg,
      yellow 0px,
      yellow 40px,
      black 40px,
      black 80px
    );
  }

</style>

<div></div>
```

#### Resources

* [MDN | Repeating Linear Gradient](https://developer.mozilla.org/en-US/docs/Web/CSS/repeating-linear-gradient)
