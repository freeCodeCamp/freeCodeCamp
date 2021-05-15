---
id: 5d822fd413a79914d39e98cf
title: Part 7
challengeType: 0
dashedName: part-7
---

# --description--

You can see the body, it's the horizontal line on your page; the box around it is the `html` element. Make your `body` fill the whole viewport by giving it a `height` of `100vh`. Remove the default `margin` from the `body` by setting the `margin` to `0`. Finally, set the `overflow` property to `hidden` to hide any scroll bars that appear when something extends past the viewport.

# --hints--

test-text

```js
const doc = document;
const bodySelector = doc.styleSheets[1]?.cssRules?.[1]?.style;
assert.equal(bodySelector.height, '100vh')
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html>    
  <head>
    <title>freeCodeCamp Skyline Project</title>
    
  </head>

  <body>
  </body>
</html>
```

```css

* {
  border: 1px solid black;
  box-sizing: border-box;
}

--fcc-editable-region--

--fcc-editable-region--
    
```

