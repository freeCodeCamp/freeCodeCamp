---
id: 68e964b84f954c322376e592
title: Step 4
challengeType: 0
dashedName: step-4
---

# --description--

If the source of a quote is a website, you can cite it with the `cite` attribute. The value of this attribute should be a valid URL. While this attribute doesn't change the presentation of the block quote, it's very helpful for giving screen readers and search engines more information about the quote.

Here is an example of an inline quotation element with a `cite` attribute:

```html
<p>
  Nancy said,
  <q cite="https://example.com">Learning is fun!</q>
</p>
```

Add the `cite` attribute to the inline quotation element with this URL:

`https://www.freecodecamp.org/news/learn-to-code-book/`

# --hints--

Your `q` element should have a `cite` attribute.

```js
const qEl = document.querySelector('h1 + p > q');
assert.exists(qEl?.getAttribute('cite'));
```

The `cite` attribute of your `q` element should have the value `https://www.freecodecamp.org/news/learn-to-code-book/`.

```js
const qEl = document.querySelector('h1 + p > q');
assert.equal(qEl?.getAttribute('cite'), 'https://www.freecodecamp.org/news/learn-to-code-book/');
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Quincy's Tips for Getting a Developer Job</title>
  </head>
  <body>
    <h1>Quincy's Tips for Getting a Developer Job</h1>
    <p>
      Learning to code is hard, but as Quincy Larson says,
--fcc-editable-region--
      <q>You can become a developer.</q>
--fcc-editable-region--
    </p>
  </body>
</html>
```
