---
title: Span Tag
---
## Span Tag

The `<span>` tag is a general purpose container element similar to `<div>`. Browsers do not make any visual changes to `<span>`s by default, but you can style them with CSS or manipulate them with JavaScript.

### Example
```html
<html>
  <head>
    <title>The Span Tag</title>
  </head>
  <body>
    <div>
      <p>This is a normal paragraph without any changes.</p>
      <p>This paragraph has <span style="color:red">red span styling</span> inside it without affecting the rest of the document.</p>
    </div>
  </body>  
</html>
```

The code for the paragraph with red text looks like this:
```html
<p>This paragraph has <span style="color:red">red span styling</span> inside it without affecting the rest of the document.</p>
```

#### Differences between `<span>` and `<div>`
The main difference is that `<span>` is an inline element, while `<div>` is a block element. This means that a `<span>` can appear within a sentence or paragraph (as in the example above), while a `<div>` will start a new line of content. Note that the CSS `display` property can change this default behavior, but that's way beyond the scope of this article!

#### More Information:
* [MDN HTML Element Reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/span)