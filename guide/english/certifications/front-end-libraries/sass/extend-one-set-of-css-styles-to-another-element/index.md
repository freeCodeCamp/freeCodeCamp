---
title: Extend One Set of CSS Styles to Another Element
---
## Extend One Set of CSS Styles to Another Element

### Hint

Use `@extend`

### Solution

Use `@extend` to extend the `info` class into `info-important` like:

```html
<style type='text/sass'>
  h3 {
    text-align: center;
  }
  .info {
    width: 200px;
    border: 1px solid black;
    margin: 0 auto;
  }
  .info-important {
    @extend .info;
    background-color: magenta;
  }  
</style>
<h3>Posts</h3>
<div class="info-important">
  <p>This is an important post. It should extend the class ".info" and have its own CSS styles.</p>
</div>

<div class="info">
  <p>This is a simple post. It has basic styling and can be extended for other uses.</p>
</div>
```
