---
title: Improve Compatibility with Browser Fallbacks
---
# Improve Compatibility with Browser Fallbacks

---
## Problem Explanation
We need to add a fallback to the ```background``` property of the ```.black-box`` class.

**Example:**

```css
  :root {
    --black-color: black;
  }
  .black-box {
    background: var(--black-color);
    width: 100px;
    height: 100px;
  }
```


---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

Add a fallback to the ```background``` property before the existing background declaration:

```css
  :root {
    --black-color: black;
  }
  .black-box {
    background: black;
    background: var(--black-color);
    width: 100px;
    height: 100px;
  }
```
</details>

