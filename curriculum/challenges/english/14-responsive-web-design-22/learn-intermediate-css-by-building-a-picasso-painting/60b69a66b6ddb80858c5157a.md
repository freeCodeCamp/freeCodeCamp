---
id: 60b69a66b6ddb80858c5157a
title: Step 4
challengeType: 0
dashedName: step-4
---

# --description--

FontAwesome is a library of SVG-powered icons, many of which are freely available to use. You will be using some of these icons in this project, so you will need to link the external stylesheet to your HTML.

Add a `link` element with a `rel` of `stylesheet` and an `href` of `https://use.fontawesome.com/releases/v5.8.2/css/all.css`.

# --hints--

You should add another `link` element.

```js
// We set this to 1 because the CSS link is stripped from the code by our parser.
assert(document.querySelectorAll('link').length === 1);
```

Your `link` element should have a `rel` of `stylesheet`.

```js
assert(document.querySelector('link')?.getAttribute('rel') === 'stylesheet');
```

Your `link` element should have an `href` of 
`https://use.fontawesome.com/releases/v5.8.2/css/all.css`.

```js
assert(document.querySelectorAll('link')?.[0]?.getAttribute('href') === 'https://use.fontawesome.com/releases/v5.8.2/css/all.css')
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>freeCodeCamp Picasso Painting</title>
    <link rel="stylesheet" type="text/css" href="./styles.css" />
    --fcc-editable-region--

    --fcc-editable-region--
  </head>
  <body>
  </body>
</html>
```  

```css

```
