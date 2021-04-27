---
id: 5f3477cb303c5cb61b43aa9b
title: Part 19
challengeType: 0
dashedName: part-19
---

# --description--

The text is centered again so the link to the CSS file is working. Add another style to the file that changes the `background-color` property to `brown` for the `body` element.

# --hints--

You should use a `body` selector.

```js
assert(code.match(/body\s*{/i));
```

You should set the `background-color` property to `brown`.

```js
assert(code.match(/background-color:\s*brown;?/i));
```

Your body element should have a brown background.

```js
const bodyBackground = $('body').css('background-color');
assert(bodyBackground === 'rgb(165, 42, 42)');
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

```css
--fcc-editable-region--
h1, h2, p {
  text-align: center;
}
--fcc-editable-region--
```

