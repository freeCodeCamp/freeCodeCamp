---
id: 5dc2385ff86c76b9248c6eb7
title: Part 5
challengeType: 0
dashedName: part-5
---

# --description--

HTML5 has some elements that identify different content areas. These elements make your HTML easier to read and help with Search Engine Optimization (SEO) and accessibility.

Identify the main section of this page by adding a `<main>` opening tag after the `h1` element, and a `</main>` closing tag after the `p` element.

# --hints--

Your `main` element should have an opening tag. Opening tags have this syntax: `<elementName>`.

```js
assert(document.querySelector('main'));
```

Your `main` element should have a closing tag. Closing tags have a `/` just after the `<` character.

```js
assert(code.match(/<\/main\>/));
```

Your `main` element's opening tag should be below the `h1` element. You have them in the wrong order.

```js
const collection = [...document.querySelectorAll('main,h1')].map(
  (node) => node.nodeName
);
assert(collection.indexOf('H1') < collection.indexOf('MAIN'));
```

Your `main` element's opening tag should be above the `h2` element. You have them in the wrong order.

```js
const collection = [...document.querySelectorAll('main,h2')].map(
  (node) => node.nodeName
);
assert(collection.indexOf('MAIN') < collection.indexOf('H2'));
```

Your `main` element's closing tag should be below the `p` element. You have them in the wrong order.

```js
const mainNode = document.querySelector('main');
const pNode = document.querySelector('p');
assert(
  mainNode.contains(pNode) &&
    pNode.textContent.toLowerCase().match(/click here to view more cat photos/)
);
```

# --seed--

## --seed-contents--

```html
<html>
  <body>
--fcc-editable-region--
    <h1>CatPhotoApp</h1>
    <h2>Cat Photos</h2>
    <!-- TODO: Add link to cat photos -->
    <p>Click here to view more cat photos.</p>
--fcc-editable-region--
  </body>
</html>
```

