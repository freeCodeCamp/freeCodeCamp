---
title: Create a Gradual CSS Linear Gradient
---
## Create a Gradual CSS Linear Gradient

To create a linear gradient you must define *at least* two color stops. Color stops are the colors you want to render smooth transitions among. You can also set a starting point and a direction (or an angle) along with the gradient effect.

The syntax is always:

```css
background-image: linear-gradient(angle, color-stop1, color-stop2....);
```

The colors can be used in both hex() and rgb() formats. Experiment a bit and you'll understand how easy and beautiful it is to use it.

### Solution

```html
<style>

  div{
    border-radius: 20px;
    width: 70%;
    height: 400px;
    margin: 50px auto;
    background-image: linear-gradient(35deg, #CCFFFF, #FFCCCC);
  }

</style>

<div></div>
```

#### Resources

* <a href='https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient'>There's an extensive info on this topic available on this link.</a>
 
* <a href='https://www.youtube.com/watch?v=wTk4Wuckd0U'> Also, you might want to review this Youtube video by The Net Ninja.</a>
