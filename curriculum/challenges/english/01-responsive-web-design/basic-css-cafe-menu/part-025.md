---
id: 5f356ed60785e1f3e9850b6e
title: Part 25
challengeType: 0
---

## Description
<section id='description'>

By now it is easy to see all the text is centered inside the `div` element. The white space on the top and left sides of the `div` element will be dealt with in a later step.

Currently, the width of the `div` element is specified in pixels (`px`). Change the `width` property's value to be `80%`, so that the element's width is 80% of the `body` element's width.

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
  width: 300px;
  background-color: burlywood;
}
--fcc-editable-region--
```

</div>

</section>
