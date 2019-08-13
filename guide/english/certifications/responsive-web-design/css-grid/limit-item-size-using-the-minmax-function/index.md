---
title: Limit Item Size Using the minmax Function
---

# Limit Item Size Using the minmax Function

---
## Problem Explanation
Using the *minmax* function in conjunction with the *repeat* function is exactly what this challenge describes, but this was not inherently obvious to me at first. The way to pass this challenge is to remove the **max-width** value within the *repeat* function, and then add the *minmax* function in place of the *repeat* **max-width** value.

Here is an **example** of what that looks like using a *before* and *after* approach:

**Before**
```css
    grid-template-columns: repeat(3, 1fr);
```
**After**
```css
    grid-template-columns: repeat(3, minmax(50px, 2fr));
```
---

#### Relevant Links[Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/CSS/minmax)