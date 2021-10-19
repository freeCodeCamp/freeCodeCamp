---
id: 5f3477aefa51bfc29327200b
title: Part 15
challengeType: 0
dashedName: part-15
---

# --description--

You have styled three elements by writing CSS inside the `style` tags. This works, but since there will many more styles, it's best to put all the styles in a separate file and link to it.

We have created a separate `styles.css` file for you and switched the editor view to that file. You can change between files with the tabs at the top of the editor.

Start by rewriting the styles you have created into the `styles.css` file. Make sure to exclude the opening and closing `style` tags.

# --hints--

Your `styles.css` file should have the `h1, h2, p` type selector.

```js
const css = code.split('<!DOCTYPE html>')[0];
assert(__helpers.removeWhiteSpace(css).match(/(h1|h2|p),(h1|h2|p),(h1|h2|p){/))
```

Your selector should set the `text-align` property to `center`.

```js
const css = code.split('<!DOCTYPE html>')[0];
assert(css.match(/text-align:\s*center;?/));
```

You should only have one selector.

```js
const css = code.split('<!DOCTYPE html>')[0];
assert(css.match(/text-align:\s*center;?/).length === 1);
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Camper Cafe Menu</title>
    <style>
      h1, h2, p {
        text-align: center;
      }
    </style>
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

```css
--fcc-editable-region--

--fcc-editable-region--

```
