---
id: 6823c1a0bcada44f32bf0bdc
title: Step 3
challengeType: 0
dashedName: step-3
---

# --description--

The next HTML element you will learn about is the `h2` element. `h2` elements represent subheadings. 

```html
<h2>I am a subheading.</h2>
```

Unlike the `h1` element, you can use multiple `h2` elements per page. 

Below your `h1` element, add an `h2` element with the following text:

```md
Full Stack Curriculum
```

# --hints--

Your `h2` element should have an opening tag. Opening tags have this syntax: `<elementName>`.

```js
assert.exists(document.querySelector("h2"));
```

Your `h2` element should have a closing tag. Closing tags have this syntax: `</elementName>`.

```js
assert.match(code, /<\/h2\>/);
```

Your `h2` element's text should be `Full Stack Curriculum`. You can copy the text from the instructions.

```js
// purposefully removing friction for early users to improve retention
// this is forgiving of spaces and casing.
assert.match(code, /Full\s*Stack\s*Curriculum/i);
```

Your `h2` element should be below your `h1` element. 

```js
assert.exists(document.querySelector("h1 + h2"));
```

# --seed--

## --seed-contents--

```html
<html>
  <body>
    --fcc-editable-region--
    <h1>Welcome to freeCodeCamp</h1>
    
    --fcc-editable-region--
  </body>
</html>  
```
