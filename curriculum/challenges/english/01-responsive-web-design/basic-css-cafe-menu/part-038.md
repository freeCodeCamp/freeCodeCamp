---
id: 5f3c866dbf362f99b9a0c6d0
title: Part 38
challengeType: 0
dashedName: part-38
---

# --description--

The `p` elements are nested in an `article` elements with the class attribute of `item`. You can style all the `p` elements nested anywhere in elements with a class named `item` like this:

```css
.item p { }
```

Using the above selector, add a `display` property with value `inline-block` so the `p` elements behave more like `inline` elements.

# --hints--

You should use the `.item p` selector.

```js
assert(code.match(/\.item\s*p\s*{/i));
```

Your `.item p` selector should set the `display` property to `inline-block`.

```js
assert(code.match(/\.item\s+p\s*{\s*display:\s*inline-block;?/i));
```

Your `p` elements in your `.item` element should be `inline-block`.

```js
assert($('.item').children('p').css('display') === 'inline-block');
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Camper Cafe Menu</title>
    <link href="styles.css" rel="stylesheet" type="text/css" />
  </head>
  <body>
    <div class="menu">
      <header>
        <h1>CAMPER CAFE</h1>
        <p>Est. 2020</p>
      </header>
      <main>
        <section>
          <h2>Coffee</h2>
          <article class="item">
            <p class="flavor">French Vanilla</p>
            <p class="price">3.00</p>
          </article>
          <article>
            <p>Caramel Macchiato</p>
            <p>3.75</p>
          </article>
          <article>
            <p>Pumpkin Spice</p>
            <p>3.50</p>
          </article>
          <article>
            <p>Hazelnut</p>
            <p>4.00</p>
          </article>
          <article>
            <p>Mocha</p>
            <p>4.50</p>
          </article>
        </section>
      </main>
    </div>
  </body>
<html>
```

```css
body {
  background-image: url(https://tinyurl.com/coffee-beans-fcc);
}

h1, h2, p {
  text-align: center;
}

.menu {
  width: 80%;
  background-color: burlywood;
  margin-left: auto;
  margin-right: auto;
}

--fcc-editable-region--

--fcc-editable-region--

.flavor {
  text-align: left;
}

.price {
  text-align: right;
}
```
