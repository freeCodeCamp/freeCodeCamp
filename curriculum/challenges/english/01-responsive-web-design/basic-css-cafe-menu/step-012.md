---
id: 5f344f9c805cd193c33d829c
title: Step 12
challengeType: 0
dashedName: step-12
---

# --description--

You can add style to an element by specifying it in the `style` element and setting a property for it like this:

```css
element {
 property: value;
}
```

Center your `h1` element by setting its `text-align` property to the value `center`.

# --hints--

You should have an `h1` selector in your `style` element.

```js
const hasSelector = new __helpers.CSSHelp(document).getStyle('h1');
assert(hasSelector);
```

Your `text-align` property should set a value of `center`.

```js
const hasTextAlign = new __helpers.CSSHelp(document).getCSSRules().some(x => x.style['text-align'] === 'center');
assert(hasTextAlign);
```

Your `h1` selector should set the `text-align` property to `center`.

```js
const h1TextAlign = new __helpers.CSSHelp(document).getStyle('h1')?.getPropertyValue('text-align');
assert(h1TextAlign === 'center');
```

# --seed--

## --seed-contents--

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
        <h2>Coffee</h2>
      </section>
    </main>
  </body>
<html>
```

