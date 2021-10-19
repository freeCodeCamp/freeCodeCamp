---
id: 5f356ed60a5decd94ab66986
title: Step 23
challengeType: 0
removeComments: false
dashedName: step-23
---

# --description--

Comments in CSS look like this:

```css
/* comment here */
```

In your style sheet, comment out the the line containing the `background-color` property and value, so you can see the effect of only styling `div` element. This will make the background white again.

# --hints--

You should comment out the `background-color: burlywood;` line in your CSS.

```js
assert(code.match(/\/\*\s*background-color:\s*burlywood;?\s*\*\//i));
```


Your `body` should have a white background.

```js
const bodyCSS = $('body').css('background-color');
assert(bodyCSS === "rgba(0, 0, 0, 0)")
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
          <h2>Coffee</h2>
        </section>
      </main>
    </div>
  </body>
<html>
```

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

