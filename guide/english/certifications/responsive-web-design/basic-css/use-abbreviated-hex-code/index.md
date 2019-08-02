---
title: Use Abbreviated Hex Code
---
# Use Abbreviated Hex Code

---
## Problem Explanation
Red, which is `#FF0000` in hex code, can be shortened to `#F00`. That is, one digit for red, one digit for green, one digit for blue.

This reduces the total number of possible colors to around 4,000. But browsers will interpret `#FF0000` and `#F00` as exactly the same color.

```html
<style>
  body {
    background-color: #F00;
  }
</style>
```

---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```html
<style>
  .red-text {
    color: #F00;
  }
  .fuchsia-text {
    color: #F0F;
  }
  .cyan-text {
    color: #0FF;
  }
  .green-text {
    color: #0F0;
  }
</style>

<h1 class="red-text">I am red!</h1>

<h1 class="fuchsia-text">I am fuchsia!</h1>

<h1 class="cyan-text">I am cyan!</h1>

<h1 class="green-text">I am green!</h1>
```

</details>
