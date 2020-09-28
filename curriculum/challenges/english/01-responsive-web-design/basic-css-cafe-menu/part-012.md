---
id: 5f344f9c805cd193c33d829c
title: Part 12
challengeType: 0
isHidden: true
---

## Description
<section id='description'>

Without specifying any CSS (Cascasing Style Sheets) styling, an element's content is positioned to the left. To center content of block-level elements (i.e. `h1`, `section`, `p`, etc.) you would put the following between the `style` element's opening and closing tags, where `elementName` is an element name like  `h3`.

```css
elementName {
 text-align: center;
}

```

Center the menu's `h1` element by using the syntax shown above.

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
    <title>Camper Cafe Menu</title>
    --fcc-editable-region--
    <style>
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

</div>

</section>
