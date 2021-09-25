---
id: 6143869bb45bd85e3b1926aa
title: Part 4
challengeType: 0
dashedName: part-4
---

# --description--

Within your `.heading` element, create a `header` element with the `class` set to `hero`.

In that element, create an `img` element with the `src` set to `https://cdn.freecodecamp.org/platform/universal/fcc_meta_1920X1080-indigo.png`, the `alt` set to `freecodecamp logo`, the `loading` attribute set to `lazy`, and the `class` set to `hero-img`.

After your `img` element, add an `h1` element with the `class` set to `hero-title` and the text set to `OUR NEW CURRICULUM`, followed by a `p` element with the `class` set to `hero-subtitle` and the text set to `Our efforts to restructure our curriculum with a more project-based focus`.

# --hints--

You should create a `header` element.

```js
assert.exists(document.querySelector('header'));
```

Your `header` element should be within your `.heading` element.

```js
assert(document.querySelector('header')?.parentElement?.className === 'heading');
```

Your `header` element should have the `class` set to `hero`.

```js
assert(document.querySelector('header')?.className === 'hero');
```

You should create an `img` element.

```js
assert.exists(document.querySelector('img'));
```

Your `img` element should be within your `header` element.

```js
assert(document.querySelector('img')?.parentElement?.localName === 'header');
```

Your `img` element should have the `src` set to `https://cdn.freecodecamp.org/platform/universal/fcc_meta_1920X1080-indigo.png`.

```js
assert(document.querySelector('img')?.getAttribute('src') === 'https://cdn.freecodecamp.org/platform/universal/fcc_meta_1920X1080-indigo.png');
```

Your `img` element should have the `alt` set to `freecodecamp logo`.

```js
assert(document.querySelector('img')?.getAttribute('alt') === 'freecodecamp logo');
```

Your `img` element should have the `loading` attribute set to `lazy`.

```js
assert(document.querySelector('img')?.getAttribute('loading') === 'lazy');
```

Your `img` element should have the `class` set to `hero-img`.

```js
assert(document.querySelector('img')?.className === 'hero-img');
```

You should create an `h1` element.

```js
assert.exists(document.querySelector('h1'));
```

Your `h1` element should come after your `img` element.

```js
assert(document.querySelector('h1')?.previousElementSibling?.localName === 'img');
```

Your `h1` element should have the `class` set to `hero-title`.

```js
assert(document.querySelector('h1')?.className === 'hero-title');
```

Your `h1` element should have the text set to `OUR NEW CURRICULUM`.

```js
assert(document.querySelector('h1')?.textContent === 'OUR NEW CURRICULUM');
```

You should create a new `p` element.

```js
assert.exists(document.querySelector('p'));
```

Your `p` element should come after your `h1` element.

```js
assert(document.querySelector('p')?.previousElementSibling?.localName === 'h1');
```

Your `p` element should have the `class` set to `hero-subtitle`.

```js
assert(document.querySelector('p')?.className === 'hero-subtitle');
```

Your `p` element should have the text set to `Our efforts to restructure our curriculum with a more project-based focus`.

```js
assert(document.querySelector('p')?.textContent === 'Our efforts to restructure our curriculum with a more project-based focus');
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      href="https://fonts.googleapis.com/css?family=Anton|Baskervville|Raleway&display=swap"
      rel="stylesheet"
    />
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.8.2/css/all.css"
    />
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
--fcc-editable-region--
    <main>
      <section class="heading">

      </section>
    </main>
--fcc-editable-region--
  </body>
</html>
```

```css

```
