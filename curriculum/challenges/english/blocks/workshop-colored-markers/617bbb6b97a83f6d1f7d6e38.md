---
id: 617bbb6b97a83f6d1f7d6e38
title: Step 26
challengeType: 0
dashedName: step-26
---

# --description--

Now that you've practiced with secondary colors, let's review how to create <dfn>tertiary colors</dfn>. Tertiary colors are created by combining a primary color with a nearby secondary color.

To create the tertiary color orange, update the `rgb` function in the `.one` CSS rule by setting red to its maximum value (`255`) and green to `127`.

# --hints--

Your `.one` CSS rule should have a `background-color` property set to `rgb(255, 127, 0)`.

```js
assert.strictEqual(new __helpers.CSSHelp(document).getStyle('.one')?.backgroundColor, 'rgb(255, 127, 0)');
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Colored Markers</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <h1>CSS Color Markers</h1>
    <div class="container">
      <div class="marker one">
      </div>
      <div class="marker two">
      </div>
      <div class="marker three">
      </div>
    </div>
  </body>
</html>
```

```css
h1 {
  text-align: center;
}

.container {
  background-color: rgb(255, 255, 255);
  padding: 10px 0;
}

.marker {
  width: 200px;
  height: 25px;
  margin: 10px auto;
}

--fcc-editable-region--
.one {
  background-color: rgb(255, 255, 0);
}
--fcc-editable-region--

.two {
  background-color: rgb(0, 255, 255);
}

.three {
  background-color: rgb(255, 0, 255);
}

```
