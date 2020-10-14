---
id: 5f356ed63c7807a4f1e6d054
title: Part 22
challengeType: 0
---

## Description
<section id='description'>

The goal now is to make the `div` not take up the entire width of the page. The CSS `width` property is perfect for this. Create a new type selector in the style sheet that gives your `div` element a width of `300px`.

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
--fcc-editable-region--
body {
  background-color: burlywood;
}

h1, h2, p {
  text-align: center;
}
--fcc-editable-region--
```

</div>

</section>
