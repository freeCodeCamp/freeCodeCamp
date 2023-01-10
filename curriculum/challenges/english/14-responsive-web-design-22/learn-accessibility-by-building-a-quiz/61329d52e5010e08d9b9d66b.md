---
id: 61329d52e5010e08d9b9d66b
title: Step 4
challengeType: 0
dashedName: step-4
---

# --description--

Another important `meta` element for accessibility and SEO is the `description` definition. The value of the `content` attribute is used by search engines to provide a description of your page.

Add a `meta` element with the `name` attribute set to `description`, and give it a useful `content` attribute.

# --hints--

You should add a new `meta` element to the `head`.

```js
assert.equal(document.querySelectorAll('meta').length, 3);
```

You should give the `meta` a `name` attribute of `description`.

```js
assert.exists(document.querySelector('meta[name="description"]'));
```

You should give the `meta` a `content` attribute.

```js
assert.notEmpty(document.querySelector('meta[name="description"]')?.content);
```

The `content` attribute value should not be more than 165 characters. _This is Google's maximum description length._

```js
assert.isAtMost(document.querySelector('meta[name="description"]')?.content?.length, 165);
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html lang="en">
--fcc-editable-region--
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="styles.css" />
  </head>
--fcc-editable-region--
  <body>

  </body>
</html>

```

```css
body {
  background: #f5f6f7;
  color: #1b1b32;
  font-family: Helvetica;
  margin: 0;
}
```
