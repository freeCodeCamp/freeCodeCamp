---
title: Padding
---
# Padding

The `padding` CSS property sets the padding area on all four sides of an element. This property can be used to generate space around content (inside the border). It is a shorthand to set all individual paddings at once: `padding-top`, `padding-right`, `padding-bottom`, and `padding-left`. Values are defined in the clockwise direction, starting at the top.

Padding values are set using lengths, percentages, or the `inherit` keyword, and cannot accept negative values. The initial, or default, value for all padding properties is 0. The `inherit` keyword cannot be used with a length value.

## Syntax
```css
.element {
    padding: [padding-top] || [padding-right] || [padding-bottom] || [padding-left];
}
```

This property may be specified using one, two, three, or four values.
- When one value is specified, it applies the same padding to all four sides.
- When two values are specified, the first padding applies to the top and bottom, the second to the left and right.
- When three values are specified, the first padding applies to the top, the second to the left and right, the third to the bottom.
- When four values are specified, the paddings apply to the top, right, bottom, and left in that order (clockwise).

```css
/* em refers to the current font size of an element */
/* Apply to all four sides */
padding: 1em;
  
/* top and bottom | left and right */
padding: 5% 10%;
  
/* top | left and right | bottom */
padding: 1em 2em 2em;

/* top | right | bottom | left */
padding: 5px 1em 0 1em;
```

## Where in box model
The padding property in CSS defines the innermost portion of the box model, creating space around an element's content, inside of any defined margins and/or borders.

![The CSS Box Model](https://www.w3.org/TR/css3-box/box.png)


## Common Pitfalls
Do note, while padding and margins are similar in the context of 'adding spaces between elements', padding is **included** into the element's dimensions, while margins are not.

## Browser Support
It is effectively supported in all browsers (since IE6+, Firefox 2+, Chrome 1+ etc)

### More Information
- <a href='https://www.w3.org/TR/css3-box/#the-padding' target='_blank' rel='nofollow'>W3C Working Draft</a>
- <a href='https://www.w3.org/TR/CSS2/box.html#propdef-padding' target='_blank' rel='nofollow'>W3C CSS Level 2</a>
- <a href='https://www.w3.org/TR/CSS1/#padding' target='_blank' rel='nofollow'>W3C CSS Level 1</a>
- <a href='https://developer.mozilla.org/en-US/docs/Web/CSS/padding' target='_blank' rel='nofollow'>MDN Web Docs</a>
- <a href='https://css-tricks.com/almanac/properties/p/padding/' target='_blank' rel='nofollow'>CSS Tricks</a>
