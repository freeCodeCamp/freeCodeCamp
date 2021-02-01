---
id: 5f356ed6199b0cdef1d2be8f
title: Part 27
challengeType: 0
dashedName: part-27
---

# --description--

So far you have been using type selectors to style elements. A <dfn>class selector</dfn> is defined by a name with a dot directly in front it, like this:

```css
.class-name {
  styles
}
```

Change the existing `div` selector into a class selector by replacing `div` with a class named `menu`.

# --hints--

Test 1

```js

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
    <div>
      <header>
        <h1>CAMPER CAFE</h1>
        <p>Est. 2020</p>
      </header>
      <main>
        <section>
          <h2>Coffees</h2>
        </section>
      </main>
    </div>
  </body>
<html>
```

```css
body {
  /*
  background-color: burlywood;
  */
}

h1, h2, p {
  text-align: center;
}

--fcc-editable-region--
div {
  width: 80%;
  background-color: burlywood;
  margin-left: auto;
  margin-right: auto;
}
--fcc-editable-region--
```

