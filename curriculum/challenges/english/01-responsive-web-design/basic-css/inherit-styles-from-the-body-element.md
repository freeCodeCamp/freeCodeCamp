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

First, create a `h1` element with the text `Hello World`

Then, let's give all elements on your page the color of `green` by adding `color: green;` to your `body` element's style declaration.

Finally, give your `body` element the font-family of `monospace` by adding `font-family: monospace;` to your `body` element's style declaration.

# --hints--

You should create an `h1` element.

```js
assert($('h1').length > 0);
```

Your `h1` element should have the text `Hello World`.

```js
assert(
  $('h1').length > 0 &&
    $('h1')
      .text()
      .match(/hello world/i)
);
```

Your `h1` element should have a closing tag.

```js
assert(
  code.match(/<\/h1>/g) &&
    code.match(/<h1/g) &&
    code.match(/<\/h1>/g).length === code.match(/<h1/g).length
);
```

Your `body` element should have the `color` property of `green`.

```js
assert($('body').css('color') === 'rgb(0, 128, 0)');
```

Your `body` element should have the `font-family` property of `monospace`.

```js
assert(
  $('body')
    .css('font-family')
    .match(/monospace/i)
);
```

Your `h1` element should inherit the font `monospace` from your `body` element.

```js
assert(
  $('h1').length > 0 &&
    $('h1')
      .css('font-family')
      .match(/monospace/i)
);
```

Your `h1` element should inherit the color green from your `body` element.

```js
assert($('h1').length > 0 && $('h1').css('color') === 'rgb(0, 128, 0)');
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
