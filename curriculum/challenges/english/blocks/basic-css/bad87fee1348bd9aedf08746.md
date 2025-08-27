---
id: bad87fee1348bd9aedf08746
title: Inherit Styles from the Body Element
challengeType: 0
videoUrl: 'https://scrimba.com/c/c9bmdtR'
forumTopicId: 18204
dashedName: inherit-styles-from-the-body-element
---

# --description--

Now we've proven that every HTML page has a `body` element, and that its `body` element can also be styled with CSS.

Remember, you can style your `body` element just like any other HTML element, and all your other elements will inherit your `body` element's styles.

# --instructions--

First, create an `h1` element with the text `Hello World`.

Then, let's give all elements on your page the color of `green` by adding `color: green;` to your `body` element's style declaration.

Finally, give your `body` element the font-family of `monospace` by adding `font-family: monospace;` to your `body` element's style declaration.

# --hints--

You should create an `h1` element.

```js
assert.isNotEmpty(document.querySelectorAll('h1'));
```

Your `h1` element should have the text `Hello World`.

```js
assert.match(
  document.querySelector('h1').textContent,
  /hello world/i
);
```

Your `h1` element should have a closing tag.

```js
const commentlessCode = __helpers.removeHtmlComments(code);
assert.match(commentlessCode, /<\/h1>/g);
assert.match(commentlessCode, /<h1/g);
assert.lengthOf(commentlessCode.match(/<\/h1>/g), commentlessCode.match(/<h1/g).length);
```

Your `body` element should have the `color` property of `green`.

```js
const bodyElement = document.querySelector('body');
const color = window.getComputedStyle(bodyElement)['color']; 
assert.strictEqual(color, 'rgb(0, 128, 0)');
```

Your `body` element should have the `font-family` property of `monospace`.

```js
const bodyElement = document.querySelector('body');
const fontFamily = window.getComputedStyle(bodyElement)['font-family'];
assert.include(fontFamily.toLowerCase(), "monospace");
```

Your `h1` element should inherit the font `monospace` from your `body` element.

```js
const h1Element = document.querySelector('h1');
const fontFamily = window.getComputedStyle(h1Element)['font-family'];
assert.include(fontFamily.toLowerCase(), "monospace");
```

Your `h1` element should inherit the color `green` from your `body` element.

```js
const h1Element = document.querySelector('h1');
const color = window.getComputedStyle(h1Element)['color'];
assert.strictEqual(color, 'rgb(0, 128, 0)');
```

# --seed--

## --seed-contents--

```html
<style>
  body {
    background-color: black;
  }

</style>
```

# --solutions--

```html
<style>
  body {
    background-color: black;
    font-family: monospace;
    color: green;
  }

</style>
<h1>Hello World!</h1>
```
