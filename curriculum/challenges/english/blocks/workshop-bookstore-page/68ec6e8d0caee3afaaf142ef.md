---
id: 68ec6e8d0caee3afaaf142ef
title: Step 5
challengeType: 0
dashedName: step-5
---

# --description--

Inside the `card-container` div, create another `<div>` element. This `div` will represent the first book card and will also need styling, so it should have a `class`.

Add a `class` attribute to this new `div` and set its value to `card`.

# --hints--

You should have a `div` element nested inside the `card-container` div.

```js
assert.exists(document.querySelector('.card-container div'));
```

Your new `div` element should have a `class` attribute.

```js
assert.exists(document.querySelector('.card-container div')?.getAttribute('class'));
```

Your new `div` element should have a `class` with value `card`.

```js
assert.exists(document.querySelector('.card-container .card'));
```

# --seed--

## --seed-contents--

```html
--fcc-editable-region--
<h1>XYZ Bookstore</h1>
<p>Browse our collection of amazing books!</p>
<div class='card-container'></div>
--fcc-editable-region--
```
