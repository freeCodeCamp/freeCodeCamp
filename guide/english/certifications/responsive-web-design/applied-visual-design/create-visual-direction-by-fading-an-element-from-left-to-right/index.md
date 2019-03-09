---
title: Create Visual Direction by Fading an Element from Left to Right
---
## Create Visual Direction by Fading an Element from Left to Right

### Solution

```html
<style>

  #ball {
    width: 70px;
    height: 70px;
    margin: 50px auto;
    position: fixed;
    left: 20%;
    border-radius: 50%;
    background: linear-gradient(
      35deg,
      #ccffff,
      #ffcccc
    );
    animation-name: fade;
    animation-duration: 3s;
  }

  @keyframes fade {
    50% {
      left: 60%;
      opacity: 0.1;
    }
  }

</style>

<div id="ball"></div>
```
