---
title: Limit Item Size Using the minmax Function ##
---

Using the *minmax* function in conjunction with the *repeat* function is exactly what this challenge describes, but this was not inherently obvious to me at first. The way to pass this challenge is to remove the **max-width** value within the *repeat* function, and then add the *minmax* function in place of the *repeat* **max-width** value.

Here is an **example** of what that looks like using a *before* and *after* approach:

### Before ###
```css
    grid-template-columns: repeat(3, 1fr);
```
### After ###
```css
    grid-template-columns: repeat(3, minmax(50px, 2fr));
```
---

You may also check this embedded pen on Codepen to see the example in action, which you can resize to view the results:

<p data-height="265" data-theme-id="0" data-slug-hash="EeGGze" data-default-tab="css,result" data-user="skywardcode" data-pen-title="limit-item-size-using-the-minmax-function" class="codepen">See the Pen <a href="https://codepen.io/skywardcode/pen/EeGGze/">limit-item-size-using-the-minmax-function</a> by skywardcode (<a href="https://codepen.io/skywardcode">@skywardcode</a>) on <a href="https://codepen.io">CodePen</a>.</p>

### Resources ###
[Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/CSS/minmax)