---
id: bad87fee1348bd9aedf08801
title: Inform with the Paragraph Element
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVMPUv/ceZ7DtN'
forumTopicId: 18202
dashedName: inform-with-the-paragraph-element
---

# --description--

The `p` element is the preferred element for paragraph text on websites. `p` is short for "paragraph".

You can create a paragraph element like this:

```html
<p>I'm a p tag!</p>
```

# --instructions--

Create a `p` element below your `h2` element, and give it the text `Hello Paragraph`.

**Note:** As a convention, all HTML tags are written in lowercase, for example `<p></p>` and not `<P></P>`.

# --hints--

Your code should have a valid `p` element.

```js
assert.lengthOf(document.querySelectorAll('p'),1);
```

Your `p` element should have the text `Hello Paragraph`.

```js
assert.match(document.querySelector('p').textContent,/hello(\s)+paragraph/gi);
```

Your `p` element should have a closing tag.

```js
assert.match(code,/<\/p>/g);
assert.strictEqual(code.match(/<\/p>/g).length,code.match(/<p/g).length);
```

# --seed--

## --seed-contents--

```html
<h1>Hello World</h1>
<h2>CatPhotoApp</h2>
```

# --solutions--

```html
<h1>Hello World</h1>
<h2>CatPhotoApp</h2>
<p>Hello Paragraph</p>
```
