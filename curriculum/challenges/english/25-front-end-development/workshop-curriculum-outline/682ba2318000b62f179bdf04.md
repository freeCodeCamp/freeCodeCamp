---
id: 682ba2318000b62f179bdf04
title: Step 2
challengeType: 0
dashedName: step-2
---

# --description--

HTML is made up of elements. The first one you will use is the `h1` element:

```html
<h1>Welcome to freeCodeCamp</h1>
```

It starts with an opening tag (`<h1>`), ends with a closing tag (`</h1>`), and has the text it will display in between the tags.

Turn your `Welcome to freeCodeCamp` text into an `h1` element by adding an opening tag in front of it, and a closing tag after it.

# --hints--

Your `h1` element should have an opening `<h1>` tag.

```js
assert.exists(document.querySelector("h1"));
```

Your `h1` element should have a closing `</h1>` tag.

```js
assert.match(code, /<\/h1\s*\>/);
```

Your `h1` element should look like this: `<h1>Welcome to freeCodeCamp</h1>`.

```js
// purposefully removing friction for early users to help improve retention in early lessons
// this if very forgiving of spaces and casing
assert.match(code, /\<h1\s*\>\s*Welcome\s*to\s*freeCodeCamp\s*\<\/h1\s*\>/i);
```

# --seed--

## --seed-contents--

```html
--fcc-editable-region--
Welcome to freeCodeCamp
--fcc-editable-region--
```
