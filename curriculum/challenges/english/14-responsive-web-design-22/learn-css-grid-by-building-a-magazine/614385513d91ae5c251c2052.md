---
id: 614385513d91ae5c251c2052
title: Step 2
challengeType: 0
dashedName: step-2
---

# --description--

Add a `title` element with the text `CSS Grid Magazine`, a `link` element for the `https://fonts.googleapis.com/css?family=Anton|Baskervville|Raleway&display=swap` font stylesheet, a `link` for the `https://use.fontawesome.com/releases/v5.8.2/css/all.css` FontAwesome stylesheet, and a `link` for your `./styles.css` stylesheet.

Your font stylesheet will load three separate fonts: `Anton`, `Baskervville`, and `Raleway`.

# --hints--

Your code should have three `link` elements.

```js
assert(code.match(/<link/g)?.length === 3);
```

Your `link` elements should be self-closing elements.

```js
assert(code.match(/<\/link>/i) === null);
```

Your `link` elements should be within your `head` element.

```js
const head = code.match(/<head>(.|\r|\n)*<\/head>/i)?.[0];
assert(head.match(/<link/g)?.length === 3)
```

Your three `link` elements should have a `rel` attribute with the value `stylesheet`.

```js
assert(code.match(/<link[\s\S]*?rel=('|"|`)stylesheet\1/gi)?.length === 3);
```

One of your link elements should have the `href` set to `https://fonts.googleapis.com/css?family=Anton|Baskervville|Raleway&display=swap`.

```js
const links = [...document.querySelectorAll('link')];
assert(links.find(link => link.getAttribute('href') === 'https://fonts.googleapis.com/css?family=Anton|Baskervville|Raleway&display=swap'));
```

One of your link elements should have the `href` set to `https://use.fontawesome.com/releases/v5.8.2/css/all.css`.

```js
const links = [...document.querySelectorAll('link')];
assert(links.find(link => link.getAttribute('href') === 'https://use.fontawesome.com/releases/v5.8.2/css/all.css'));
```

One of your `link` elements should have an `href` attribute with the value `styles.css`.

```js
assert.match(code, /<link[\s\S]*?href=('|"|`)(\.\/)?styles\.css\1/)
```

Your code should have a `title` element.

```js
const title = document.querySelector('title');
assert.exists(title);
```

Your project should have a title of `CSS Grid Magazine`.

```js
const title = document.querySelector('title');
assert.equal(title?.text?.trim()?.toLowerCase(), 'css grid magazine')
```

Remember, the casing and spelling matter for the title.

```js
const title = document.querySelector('title');
assert.equal(title?.text?.trim(), 'CSS Grid Magazine');
```

# --seed--

## --seed-contents--

```html
<!DOCTYPE html>
<html>
--fcc-editable-region--
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </head>
--fcc-editable-region--
  <body>
  </body>
</html>
```

```css

```
