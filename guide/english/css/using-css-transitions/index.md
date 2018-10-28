---
title: Using CSS Transitions
---
## Using CSS Transitions

**CSS transitions** allows you to change property values smoothly (from one value to another), over a given duration.

### How to Use CSS Transitions?
To create a transition effect, you must specify two things:

- the CSS property you want to add an effect to
- the duration of the effect
**Note:** If the duration part is not specified, the transition will have no effect, because the default value is 0.

The following example shows a 100px * 100px red <div> element. The <div> element has also specified a transition effect for the width property, with a duration of 2 seconds:

```css
div {
    width: 100px;
    height: 100px;
    background: red;
    transition: width 2s;
}

div:hover {
    width: 300px;
}
```
Now, it you will move the mouse inside the `div`, you will see it's width is gradually changing over 2 seconds.
[Live demo](https://codepen.io/anon/pen/GYedKV)


#### More Information:
[More about CSS Transitions](https://css-tricks.com/almanac/properties/t/transition/)
