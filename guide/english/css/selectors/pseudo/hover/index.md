---
title: Hover
---
## Hover
  The `selector:hover` pseudo-class is triggered when you interact with the element (selector) with a pointing device generally a mouse pointer. The styles of the element hovered over will be overridden by style defined in `selector:hover` pseudo-class.<br>
To style links/elements properly the rules should be defined in the order :- <br>
:link - :visited - :hover - :active

**Syntax :**
```css
 selector:hover {
    css declarations;
 }
```

## More Examples
Below are some more complex examples of what you can do with the `:hover` pseudo-class. Keep in mind that the `.second` div **must** come after the `.first ` div in all of these examples.

 1. When you hover over an element change an adjacent sibling.

```html
<style>
  .first:hover + .second {
    background-color: blue;
  }
</style>

<div class="first">First</div>
<div class="second">Second</div>
```

The code above will change the background color of `.second` to blue when you hover over `.first`.

 2. When you hover over an element change a general sibling.

```html
<style>
  .first:hover ~ .second {
    background-color: blue;
  }
</style>

<div class="first">First</div>
<div class="middle">Middle</div>
<div class="second">Second</div>
```

This example gives a little bit more flexibility as the two elements no longer have to be directly adjacent.

 3. When you hover over an element change a direct descendant.

```html
<style>
  .first:hover > .second {
    background-color: blue;
  }
</style>

<div class="first">
  First
  <div class="second">Second</div>
</div>
```

The code above will change the background color of `.second` to blue when you hover over `.first`.

 4. When you hover over an element change a general descendant.

```html
<style>
  .first:hover .second {
    background-color: blue;
  }
</style>

<div class="first">
  First
  <div class="container">
    Container
    <div class="second">Second</div>
  </div>
</div>
```

 As in example 2, this also gives more flexibility as the two elements no longer have to be directly adjacent. You will notice that the hover-able area is bigger in examples 3 and 4. This happens because you are still hovering over `.first` as long as the cursor is over one of its children.


#### More Information:
<a href='https://developer.mozilla.org/en-US/docs/Web/CSS/%3Ahover' target='_blank'>MDN Web Docs</a><br>
<a href='https://www.w3schools.com/cssref/sel_hover.asp' target='_blank'>w3schools</a>
