---
title: Create Visual Direction by Fading an Element from Left to Right
---
## Create Visual Direction by Fading an Element from Left to Right

### Solution

```css
@keyframes rainbow {
  0% {
    background-color: blue;
    top: 0px;
    left: 0px;
  }
  50% {
    background-color: green;
    top: 50px;
    left: 25px;
  }
  100% {
    background-color: yellow;
    top: 0px;
    left: -25px;
  }
}
```
