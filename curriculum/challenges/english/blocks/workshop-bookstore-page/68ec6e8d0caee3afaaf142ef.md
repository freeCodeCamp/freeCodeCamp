---
id: 68ec6e8d0caee3afaaf142ef
title: Step 5
challengeType: 0
dashedName: step-5
---

# --description--

Inside the `.card-container` element, create another `div` element. This `div` will represent the first book card.

Add a `class` attribute to this new `div` element and set value of the class to `card`.

# --hints--

You should have a `div` element nested inside the `.card-container` element.

```js
assert.exists(document.querySelector('.card-container div'));
```

Your new `div` element should have a `class` attribute.

```js
assert.exists(document.querySelector('.card-container div')?.getAttribute('class'));
```

Your new `div` element should have a `class` with the value of `card`.

```js
assert.exists(document.querySelector('.card-container .card'));
```

# --seed--

## --seed-contents--

```html
--fcc-editable-region--
<h1>XYZ Bookstore</h1>
<p>Browse our collection of amazing books!</p>
<div class="card-container">

</div>
--fcc-editable-region--
```
