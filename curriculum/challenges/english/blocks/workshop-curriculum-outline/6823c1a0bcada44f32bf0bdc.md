---
id: 6823c1a0bcada44f32bf0bdc
title: Step 4
challengeType: 0
dashedName: step-4
---

# --description--

An `h1` element is the main heading of a webpage and you should only use one per page. `h2` elements represent subheadings. You can have multiple per page and they look like this:

```html
<h2>This is a subheading.</h2>
```

Turn the `Full Stack Curriculum` text into an `h2` element by surrounding it with opening and closing `h2` tags.

# --hints--

Your `h2` element should have an opening `<h2>` tag.

```js
assert.exists(document.querySelector("h2"));
```

Your `h2` element should have a closing `</h2>` tag.

```js
assert.match(code, /<\/h2\s*\>/);
```

Your `h2` element should look like this: `<h2>Full Stack Curriculum</h2>`.

```js
// purposefully removing friction for early users to help improve retention in early lessons
// this if very forgiving of spaces and casing
assert.match(code, /\<h2\s*\>\s*Full\s*Stack\s*Curriculum\s*\<\/h2\s*\>/i);
```

# --seed--

## --seed-contents--

```html
<h1>Welcome to freeCodeCamp</h1>
--fcc-editable-region--
Full Stack Curriculum
--fcc-editable-region--
```
