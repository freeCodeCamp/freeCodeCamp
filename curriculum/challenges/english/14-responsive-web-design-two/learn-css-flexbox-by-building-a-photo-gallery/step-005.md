---
id: 61537c9eecea6a335db6da79
title: Step 5
challengeType: 0
dashedName: step-5
---

# --description--

Below your `.header` element, create a new `div` element with the `id` set to `gallery`.

In that `#gallery` element, create ten `img` elements.

# --hints--

You should create a second `div` element in your `body` element.

```js
assert(document.querySelector('body')?.querySelectorAll('div')?.length === 2);
```

Your new `div` element should come after your `.header` element.

```js
assert(document.querySelector('body')?.querySelectorAll('div')?.[0]?.classList?.contains('header'));
```

Your new `div` element should have an `id` set to `gallery`.

```js
assert(document.querySelector('body')?.querySelectorAll('div')?.[1]?.id === 'gallery');
```

Your `#gallery` element should have ten `img` elements.

```js
assert(document.querySelector('#gallery')?.querySelectorAll('img')?.length === 10);
```

# --seed--

## --seed-contents--

```html
--fcc-editable-region--
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CSS Flexbox Photo Gallery</title>
    <link rel="stylesheet" href="./styles.css">
  </head>
  <body>
    <div class="header">
      <h1>CSS FLEXBOX PHOTO GALLERY</h1>
    </div>
  </body>
</html>
--fcc-editable-region--
```

```css

```
