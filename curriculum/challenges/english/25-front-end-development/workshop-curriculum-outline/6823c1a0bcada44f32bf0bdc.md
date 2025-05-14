---
id: 6823c1a0bcada44f32bf0bdc
title: Step 2
challengeType: 0
dashedName: step-2
---

# --description--

The next HTML element you will learn about is the `h2` element. `h2` elements represent subheadings. 

```html
<h2>I am a subheading.</h2>
```

Unlike the `h1` element, you can use multiple `h2` elements per page. 

Below your `h1` element, add an `h2` element with the text `Certified Full Stack Developer Certification`.

# --hints--

Your `h2` element should have an opening tag. Opening tags have this syntax: `<elementName>`.

```js
assert.exists(document.querySelector("h2"));
```

Your `h2` element should have a closing tag. Closing tags have this syntax: `</elementName>`.

```js
assert.match(code, /<\/h2\>/);
```

Your `h2` element's text should be `Certified Full Stack Developer Certification`. You have either omitted the text, have a typo, or it is not between the `h2` element's opening and closing tags.

```js
assert.equal(document.querySelector("h2")?.innerText, "Certified Full Stack Developer Certification");
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
