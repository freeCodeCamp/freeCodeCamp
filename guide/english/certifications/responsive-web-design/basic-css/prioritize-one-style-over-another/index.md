---
title: Prioritize One Style Over Another
---
# Prioritize One Style Over Another

---
## Problem Explanation
We need to create a CSS class called ```pink-text``` that gives an our ```h1``` element the color pink.


---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

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

**Full solution**

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
</details>
