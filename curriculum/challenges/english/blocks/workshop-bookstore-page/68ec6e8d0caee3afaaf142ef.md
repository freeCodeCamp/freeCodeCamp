---
id: 68ec6e8d0caee3afaaf142ef
title: Step 5
challengeType: 0
dashedName: step-5
---

# --description--

You can add multiple elements inside a `div` element to group related content. Inside the element having a `class` of `card-container`, create another `div` element. This `div` will represent the first book card.

Add a `class` attribute to this new `div` element and set the value of the `class` attribute to `card`.

# --hints--

You should have a `div` element nested inside the element with a class of `card-container`.

```js
assert.exists(document.querySelector('.card-container div'));
```

Your new `div` element should have a `class` attribute.

```js
assert.isTrue(document.querySelector('.card-container div')?.hasAttribute('class'));
```

Your new `div` element should have a `class` having the value of `card`.

```js
assert.exists(document.querySelector('.card-container div.card'));
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
