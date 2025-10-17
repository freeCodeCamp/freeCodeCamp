---
id: 68eca3cfeebef2cd8cc5f814
title: Step 11
challengeType: 0
dashedName: step-11
---

# --description--

Add an `id` attribute to your second `.card` element and set its value to `dave-cooking-book`. Remember that each `id` must be unique.

# --hints--

Your second `.card` element should have an `id` attribute.

```js
const cards = document.querySelectorAll('.card');
assert.exists(cards[1]?.getAttribute('id'));
console.log(cards)
```

Your second `.card` element should have an `id` with value of `dave-cooking-book`.

```js
const cards = document.querySelectorAll('.card');
assert.equal(cards[1]?.id, 'dave-cooking-book');
```

# --seed--

## --seed-contents--

```html
--fcc-editable-region--
<h1>XYZ Bookstore</h1>
<p>Browse our collection of amazing books!</p>
<div class='card-container'>
  <div class="card" id="sally-adventure-book">
    <h2>Sally's SciFi Adventure</h2>
    <p>This is an epic story of Sally and her dog Rex as they navigate through other worlds.</p>
    <button class="btn">Buy Now</button>
  </div>
  <div class="card"></div>
</div>
--fcc-editable-region--
```
