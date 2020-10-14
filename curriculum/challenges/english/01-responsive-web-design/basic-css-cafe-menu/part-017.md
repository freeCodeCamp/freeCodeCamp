---
id: 5f3477cb2e27333b1ab2b955
title: Part 17
challengeType: 0
---

## Description
<section id='description'>

Now you need to link the `styles.css` file so the styles will be applied again. Next a self-closing `link` element in the `head` element. Give it a `rel` attribute value `stylesheet`, a `type` attribute value of `text/css`, and an `href` attribute value of `styles.css`.

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
