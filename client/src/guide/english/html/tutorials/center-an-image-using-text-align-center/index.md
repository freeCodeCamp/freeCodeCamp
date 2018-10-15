---
title: Center an Image Using Text Align Center
---
## Center an Image Using Text Align Center

An `<img>` element is an inline element (display value of `inline-block`). It can be easily centered by adding the `text-align: center;` CSS property to the parent element
that contains it.

To center an image using `text-align: center;` you must place the `<img>` inside of a block-level element such as a `div`.
Since the `text-align` property only applies to block-level elements, you place `text-align: center;` on the wrapping block-level element to achieve a horizontally centered `<img>`.

### Example

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Center an Image using text align center</title>
    <style>
      .img-container {
        text-align: center;
      }
    </style>
  </head>
  <body>
    <div class="img-container"> <!-- Block parent element -->
      <img src="user.png" alt="John Doe">
    </div>
  </body>
</html>
```

**Note:** The parent element must be a block element. If it is not a block element, you should add ```display: block;``` CSS property along with the ```text-align``` property.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Center an Image using text align center</title>
    <style>
      .img-container {
        text-align: center;
        display: block;
      }
    </style>
  </head>
  <body>
    <span class="img-container"> <!-- Inline parent element -->
      <img src="user.png" alt="">
    </span>
  </body>
</html>
```

**Demo:** [Codepen](https://codepen.io/aravindio/pen/PJMXbp)

## Documentation
<a href='https://developer.mozilla.org/en-US/docs/Web/CSS/text-align' target='_blank' rel='nofollow'>**text-align** - MDN</a>

<a href='https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img' target='_blank' rel='nofollow'>**\<img\>** - MDN</a>
