---
title: Use the CSS Transform scale Property to Scale an Element on Hover
---
## Use the CSS Transform scale Property to Scale an Element on Hover

### Solution

```html
<style>
  div {
    width: 70%;
    height: 100px;
    margin:  50px auto;
    background: linear-gradient(
      53deg,
      #ccfffc,
      #ffcccf
    );
  }

  div:hover {
    transform: scale(1.1);
  }
</style>

<div></div>
```
