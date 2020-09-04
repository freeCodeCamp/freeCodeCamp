---
id: 5f356ed60a5decd94ab66986
title: Part 23
challengeType: 0
isHidden: true
---

## Description
<section id='description'>

Currently the entire background color of the page is `burlywood`. So you can see the effect of only styling `div` element, you will need to first temporarily comment out the line that defines the `background-color` for the `body` element.

Add `/*` before the line and `*/` after the line to make the line a comment instead of CSS code which will make the background color of the page white again.

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
  --fcc-editable-region--
  background-color: burlywood;
  --fcc-editable-region--
}

h1, h2, p {
  text-align: center;
}

div {
  width: 300px;
}
```

</div>

</section>
