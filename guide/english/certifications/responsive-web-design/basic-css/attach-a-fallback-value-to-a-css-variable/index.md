---
title: Attach a Fallback value to a CSS Variable
---
## Attach a Fallback value to a CSS Variable

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
We need to add a fallback value of ```black``` to the ```background``` property of the ```.penguin-top``` and ```.penguin-bottom``` classes.

## Solution

Add a fallback value of ```black``` to the ```background``` property of the ```.penguin-bottom``` class:

```js
  .penguin-bottom {
    top: 40%;
    left: 23.5%;  
    /* change code below */
    background: var(--pengiun-skin,black);
    /* change code above */ 
    width: 53%;
    height: 45%;
    border-radius: 70% 70% 100% 100%;
  }
```

Add a fallback value of ```black``` to the ```background``` property of the ```.penguin-top``` class:

```js
  .penguin-top {
    top: 10%;
    left: 25%;
    /* change code below */
    background: var(--pengiun-skin,black);
    /* change code above */  
    width: 50%;
    height: 45%;
    border-radius: 70% 70% 60% 60%;
  }
```
