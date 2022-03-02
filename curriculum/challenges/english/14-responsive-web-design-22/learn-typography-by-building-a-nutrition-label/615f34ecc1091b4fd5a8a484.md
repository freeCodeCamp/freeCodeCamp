---
id: 615f34ecc1091b4fd5a8a484
title: Step 4
challengeType: 0
dashedName: step-4
---

# --description--

Within your `head` element, add a `link` element with the `rel` attribute set to `stylesheet` and the `href` attribute set to `https://fonts.googleapis.com/css?family=Open+Sans:400,700,800`.

This will import the `Open Sans` font family, with the font weight values `400`, `700`, and `800`.

Also add a `link` element to link your `styles.css` file.

# --hints--

You should have two `link` elements.

```js
assert(code.match(/<link/g)?.length === 2);
```

Both of your `link` elements should have the `rel` attribute set to `stylesheet`.

```js
assert(code.match(/<link[\s\S]*?rel=('|"|`)stylesheet\1/)?.length === 2);
```

One of your `link` elements should have an `href` attribute set to `./styles.css`.

```js
assert(code.match(/<link[\s\S]*?href=('|"|`)(\.\/)?styles\.css\1/g)?.length === 1);
```

One of your `link` elements should have an `href` attribute set to `https://fonts.googleapis.com/css?family=Open+Sans:400,700,800`.

```js
const links = [...document.querySelectorAll('link')]
assert(links.find(link => link?.getAttribute('href') === 'https://fonts.googleapis.com/css?family=Open+Sans:400,700,800'));
```

# --seed--

## --seed-contents--

```html
--fcc-editable-region--
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Nutrition Label</title>

  </head>
  <body>
    <h1>Nutrition Facts</h1>
    <p>8 servings per container</p>
    <p>Serving size 2/3 cup (55g)</p>
  </body>
</html>
--fcc-editable-region--
```

```css

```
