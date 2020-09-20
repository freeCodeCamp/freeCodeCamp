---
id: 5f356ed6199b0cdef1d2be8f
title: Part 27
challengeType: 0
isHidden: true
---

## Description
<section id='description'>

So far you have been using type selectors to style elements.  A <dfn>class selector</dfn> is defined by a name with a dot directly in front it. For example, if you wanted to create a class selector named `container` that makes the width of a `div` element `700px`, you would write:

```css
.container {
  width: 700px;
}
```

Turn the existing `div` selector into a class selector by replacing `div` with a class named `menu`.

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Test 1
    testString: ''

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

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

</div>

<div id='css-seed'>

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

</div>

</section>
