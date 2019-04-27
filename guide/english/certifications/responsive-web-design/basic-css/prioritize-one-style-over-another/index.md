---
title: Prioritize One Style Over Another
---
## Prioritize One Style Over Another

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
We need to create a CSS class called ```pink-text``` that gives an our ```h1``` element the color pink.

### Solution

  Between ```<style>``` and ```</style>``` create a class called ```pink-text```:

```css
  <style>
    body {
      background-color: black;
      font-family: monospace;
      color: green;
    }
    .pink-text {

    }
  </style>
  ```
  And add in this class ```color``` with value of ```pink```:
  
  ```css
  .pink-text {
    color: pink;
  }
  ```
After, add this class to our ```h1``` element:

```css
<h1 class="pink-text">Hello World!</h1>
```

### Full solution

```css
<style>
  body {
    background-color: black;
    font-family: monospace;
    color: green;
  }
  .pink-text {
    color: pink;
  }
</style>
<h1 class="pink-text">Hello World!</h1>
```
