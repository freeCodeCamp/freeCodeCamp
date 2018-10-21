---
title: currentColor Keyword
---
## The currentColor Keyword

The currentColor keyword, as the name suggests, is a valid color value in CSS. This represents the value of the specific element's `color` property. This lets you use the `color` property's value for properties that do not receive it by default.

### Browser Support
The currentColor keyword is supported very well across browsers. It is supported by IE9+, Safari 4+, and all other modern browsers. Check out the complete list at [caniuse.com](https://caniuse.com/#feat=currentcolor)

### Example
We declare each div to have a 3px border of color _currentColor_, which means that each div's border will be colored with the same value of its `color` property. Check the live example [here](http://jsfiddle.net/tjkp0cm3/)

```css
div{
  /* The currentColor keyword for the color value, which means that the border will have the value of the respective div's color property */
  border: 3px solid currentColor;
}

/* This div will have green borders, because its color value is green. */
#div1{
  color: green;
}

/* This div will have blue borders, because its color value is blue. */
#div2{
  color: blue;
}
```

### Practical Application with an SVG

Here's a very common example on the web - a button with an SVG icon and text in it. The color of the border, text and icons change on hovering over the button. The below image depicts the initial and the hovered states of the button in order.

![Button Images](https://image.ibb.co/hWveBR/button_variations.png)

Icon fonts could also be used for this purpose, but there are various advantages of inline SVG over icon fonts, and this may make SVGs the choice for many developers. Quoting [CSS-Tricks](https://css-tricks.com/icon-fonts-vs-svg/),

> It can be frustrating to position a font icon. The icons are inserted via pseudo element, and it depends on `line-height`, `vertical-align`, `letter-spacing`, `word-spacing`, how the font glyph is designed (does it naturally have space around it? does it have kerning information?). Then the pseudo elements `display` type affects if those properties have an effect or not.	SVG just is the size that it is.

To sum it up, it can at times be frustrating to use font icons with text.

We could use this code of ours to achieve the desired behaviour.

```css
button{
  color: #016898;
}

.emailIcon{
  fill: #016898;
}

button:hover {
  color: #19B5FE;
}

button:hover .emailIcon{
  fill: #19B5FE;
}
```

Now, instead of changing the SVG's `fill` color on hover explicitly, we can set the fill to `currentColor`. This automatically changes the color of the SVG to the value of the `color` property of the button. We now just need to change the `color` property of the button. This makes the CSS code shorter and smarter.

```css
.emailIcon{
  fill: currentColor;
}

button{
  color: #016898;
}

button:hover {
  color: #19B5FE;
}
```

Check out the live example at https://repl.it/NNt9/2.

#### More Information:
- [MDN Docs on the CSS `color` property](https://developer.mozilla.org/en-US/docs/Web/CSS/color)
- [MDN Docs on the currentColor keyword](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#currentColor_example)
- [Article on currentColor at osvaldas.info](https://osvaldas.info/keeping-css-short-with-currentcolor)
