---
id: bad87fee1348bd9aedf0887a
title: Headline with the h2 Element
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/cE8Gqf3'
forumTopicId: 18196
dashedName: headline-with-the-h2-element
---

# --description--

Over the next few lessons, we'll build an HTML5 cat photo web app piece-by-piece.

The `h2` element you will be adding in this step will add a level two heading to the web page.

This element tells the browser about the structure of your website. `h1` elements are often used for main headings, while `h2` elements are generally used for subheadings. There are also `h3`, `h4`, `h5` and `h6` elements to indicate different levels of subheadings.

# --instructions--

Add an `h2` tag that says "CatPhotoApp" to create a second HTML element below your "Hello World" `h1` element.

# --hints--

You should create an `h2` element.

```js
assert($('h2').length > 0);
```

Your `h2` element should have a closing tag.

```js
assert(
  code.match(/<\/h2>/g) &&
    code.match(/<\/h2>/g).length === code.match(/<h2>/g).length
);
```

Your `h2` element should have the text `CatPhotoApp`.

```js
assert.isTrue(/cat(\s)?photo(\s)?app/gi.test($('h2').text()));
```

Your `h1` element should have the text `Hello World`.

```js
assert.isTrue(/hello(\s)+world/gi.test($('h1').text()));
```

Your `h1` element should be before your `h2` element.

```js
assert(code.match(/<h1>\s*?.*?\s*?<\/h1>\s*<h2>\s*?.*?\s*?<\/h2>/gi));
```

# --seed--

## --seed-contents--

```html
<h1>Hello World</h1>
```

# --solutions--

```html
<h1>Hello World</h1>
<h2>CatPhotoApp</h2>
```
