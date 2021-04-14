---
id: 5f3477ae9675db8bb7655b30
title: Part 13
challengeType: 0
dashedName: part-13
---

# --description--

In the previous step, you used a <dfn>type selector</dfn> to style the `h1` element. Go ahead and center the `h2` and `p` elements with a new type selector for each one.

# --hints--

Your `h1` element should have a `text-align` of `center`.

```js
assert($('h1').css('text-align') === 'center');
```

Your `h2` element should have a `text-align` of `center`.

```js
assert($('h2').css('text-align') === 'center');
```

Your `p` element should have a `text-align` of `center`.

```js
assert($('p').css('text-align') === 'center');
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Camper Cafe Menu</title>
--fcc-editable-region--
    <style>
      h1 {
        text-align: center;
      }
    </style>
--fcc-editable-region--
  </head>
  <body>
    <header>
      <h1>CAMPER CAFE</h1>
      <p>Est. 2020</p>
    </header>
    <main>
      <section>
        <h2>Coffees</h2>
      </section>
    </main>
  </body>
<html>
```

