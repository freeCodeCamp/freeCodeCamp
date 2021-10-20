---
id: 5dc174fcf86c76b9248c6eb2
title: Part 1
challengeType: 0
dashedName: part-1
---

# --description--

HTML elements have opening tags like `<h1>` and closing tags like `</h1>`.

Find the `h1` element and change the text between its opening and closing tags to say `CatPhotoApp`.

# --hints--

The text `CatPhotoApp` should be present in the code. You may want to check your spelling.

```js
assert(code.match(/catphotoapp/i));
```

Your `h1` element should have an opening tag. Opening tags have this syntax: `<elementName>`.

```js
assert(document.querySelector('h1'));
```

Your `h1` element should have a closing tag. Closing tags have a `/` just after the `<` character.

```js
assert(code.match(/<\/h1\>/));
```

You have more than one `h1` element. Remove the extra `h1` element.

```js
assert(document.querySelectorAll('h1').length === 1);
```

Your `h1` element's text should be `CatPhotoApp`. You have either omitted the text, have a typo, or it is not between the `h1` element's opening and closing tags.

```js
assert(document.querySelector('h1').innerText.toLowerCase() === 'catphotoapp');
```

# --seed--

## --seed-contents--

```html
<html>
  <body>
--fcc-editable-region--
    <h1>Hello World</h1>
--fcc-editable-region--
  </body>
</html>
```

