---
id: 5f3477cb2e27333b1ab2b955
title: Part 17
challengeType: 0
---

## Description
<section id='description'>

Now you need to link the `styles.css` file content, so your page will reflect the CSS styles defined in it.

Nest a `link` element within the `style` element. `link` elements are used for other purposes besides CSS, so you will also need to add an `rel` attribute with the value `stylesheet` and a `type` attribute with the value `text/css`.

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
  --fcc-editable-region--
  <head>
    <meta charset="utf-8" />
    <title>Camper Cafe Menu</title>
  </head>
  --fcc-editable-region--
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

</div>

<div id='css-seed'>

```css
h1, h2, p {
  text-align: center;
}
```

</div>

</section>
