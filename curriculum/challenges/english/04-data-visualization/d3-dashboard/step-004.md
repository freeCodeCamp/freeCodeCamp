---
id: 5d8a4cfbe6b6180ed9a1c9e1
title: Step 4
challengeType: 0
dashedName: step-4
---

# --description--

Below the title, link to your external stylesheet by adding a `link` element with a `rel` attribute of `stylesheet` and an `href` attribute of `./dashboard.css`. Remember that link elements do not need a closing tag. You will be adding some styles to this file shortly.

# --hints--

test-text

```js
const link = code.match(/<link\s+[\s\S]+?[^>]>/gi)[0];
assert(
  /rel\s*=\s*('|")\s*stylesheet\s*\1/gi.test(link) &&
    /href\s*=\s*('|")\s*(.\/)?dashboard\.css\s*\1/gi.test(link)
);
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html>
  <head>
    <title>D3 Dashboard</title>

    
  </head>

  <body>
  </body>
</html>
```

# --solutions--

```html
<!DOCTYPE html>
<html>
  <head>
    <title>D3 Dashboard</title>
    <link rel="stylesheet" href="./dashboard.css">
  </head>

  <body>
  </body>
</html>
```
