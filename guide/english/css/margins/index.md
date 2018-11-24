---
title: Margins
---
# Margins

The `margin` CSS property sets the margin area on all four sides of an element. This property can be used to generate space around content (outside the border). It is a shorthand to set all individual margins at once: `margin-top`, `margin-right`, `margin-bottom`, and `margin-left`. Values are defined in the clockwise direction.

Margin values are set using lengths or percentages or `auto` or `inherit` keyword, and may accept zero or negative values. The initial, or default, value for all margin properties is 0. While you can use `inherit` keyword but it can not be used along with a length value.

## Syntax
```css
.element {
    margin: margin-top || margin-right || margin-bottom || margin-left;
}
```

This property may be specified using one, two, three, or four values.
- When one value is specified, it applies the same margin to all four sides.
- When two values are specified, the first margin applies to the top and bottom, the second to the left and right.
- When three values are specified, the first margin applies to the top, the second to the left and right, the third to the bottom.
- When four values are specified, the margins apply to the top, right, bottom, and left in that order (clockwise).

```css
/* Apply to all four sides */
margin: 1em;
  
/* top and bottom | left and right */
margin: 5% 10%;
  
/* top | left and right | bottom */
margin: 1em 2em 2em;

/* top | right | bottom | left */
margin: 5px 1em 0 1em;
```

## Where in box model
The margin property in CSS defines the outermost portion of the box model, creating space around an element's content, outside of any defined paddings and/or borders.

![The CSS Box Model](https://www.w3.org/TR/CSS2/images/boxdim.png "CSS Box Model Diagram")

## Collapsing margins
Vertical margins on different elements that touch each other (thus have no content, padding, or borders separating them) will collapse, forming a single margin that is equal to the greater of the adjoining margins. This does not happen on horizontal margins (left and right), only vertical (top and bottom).

## Centering an element using margin
An element can be aligned to the center by making it a block element and changing the values of the left and right margins to auto.

```css
.c-pos {
    display: block;
    margin-left: auto;
    margin-right: auto;
}
```

## Unit Information
 - Pixels (`px`) are relative to the viewing device.
 - `em` implies relative to the font-size of the element (2em means 2 times the size of the current font).
 - `%` implies relative to the parent element.

## Browser Support
It is effectively supported in all browsers (since IE6+, Firefox 2+, Chrome 1+ etc)

### More Information
- <a href='https://www.w3.org/TR/css3-box/#the-margin' target='_blank' rel='nofollow'>W3C Working Draft</a>
- <a href='https://www.w3.org/TR/CSS2/box.html#propdef-margin' target='_blank' rel='nofollow'>W3C CSS Level 2</a>
- <a href='https://www.w3.org/TR/CSS1/#margin' target='_blank' rel='nofollow'>W3C CSS Level 1</a>
- <a href='https://developer.mozilla.org/en-US/docs/Web/CSS/margin' target='_blank' rel='nofollow'>MDN Web Docs</a>
- <a href='https://css-tricks.com/almanac/properties/m/margin/' target='_blank' rel='nofollow'>CSS Tricks</a>
