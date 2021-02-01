---
id: 5dc1798ff86c76b9248c6eb3
title: Part 2
challengeType: 0
dashedName: part-2
---

# --description--

The `h1` to `h6` heading elements are used to signify the importance of content below them. The lower the number, the higher the importance, so `h2` elements have less importance than `h1` elements. Only use one `h1` element per page and place lower importance headings below higher importance headings.

Add an `h2` element below the `h1` element that says `Cat Photos`.

# --hints--

Your `h1` element should have an opening tag. Opening tags have this syntax: `<elementName>`.

```js
assert(document.querySelector('h1'));
```

Your `h1` element should have a closing tag. Closing tags have a `/` just after the `<` character.

```js
assert(code.match(/<\/h1\>/));
```

You should only have one `h1` element. Remove the extra.

```js
assert(
  document.querySelector('h1') && document.querySelectorAll('h1').length === 1
);
```

Your `h1` element's text should be 'CatPhotoApp'. You have either omitted the text or have a typo.

```js
assert(document.querySelector('h1').innerText.toLowerCase() === 'catphotoapp');
```

Your `h2` element should have an opening tag. Opening tags have this syntax: `<elementName>`.

```js
assert(document.querySelector('h2'));
```

Your `h2` element should have a closing tag. Closing tags have a `/` just after the `<` character.

```js
assert(code.match(/<\/h2\>/));
```

Your `h2` element's text should be 'Cat Photos'. Only place the text `Cat Photos` between the opening and closing `h2` tags.

```js
assert(document.querySelector('h2').innerText.toLowerCase() === 'cat photos');
```

Your `h2` element should be below the `h1` element. The `h1` element has greater importance and must be above the `h2` element.

```js
const collection = [...document.querySelectorAll('h1,h2')].map(
  (node) => node.nodeName
);
assert(collection.indexOf('H1') < collection.indexOf('H2'));
```

# --seed--

## --seed-contents--

```html
<html>
  <body>
--fcc-editable-region--
    <h1>CatPhotoApp</h1>
--fcc-editable-region--
  </body>
</html>
```

