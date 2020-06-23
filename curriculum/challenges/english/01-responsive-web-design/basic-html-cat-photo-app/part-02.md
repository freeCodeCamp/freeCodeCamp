---
id: 5dc1798ff86c76b9248c6eb3
title: Part 02
challengeType: 0
isBeta: true
---

## Description
<section id='description'>

The `h1` to `h6` elements are used to define headings. `h2` elements have slightly smaller text than `h1` elements.

Add an `h2` element that says "CatPhotoApp" right below the `h1` element that says "Hello World".

</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: "Your <code>h2</code> element should have an opening tag. Hint: Opening tags have this syntax: <code>&lt;elementName&gt;</code>."
    testString: assert( document.querySelector('h2') );
  - text: "Your <code>h2</code> element should have a closing tag. Hint: <code>h2</code> elements have an opening and closing tag. Closing tags start with a <code>/</code>."
    testString: assert( code.match(/\<\/h2\>/) );
  - text: "Your <code>h2</code> element's text should be 'CatPhotoApp'. Hint: You have either omitted the text or have a typo."
    testString: assert( document.querySelector('h2').innerText.toLowerCase() === 'catphotoapp' );
  - text: "Your <code>h2</code> element's text should be 'CatPhotoApp'. Hint: Only place the text 'CatPhotoApp' between the opening and closing <code>h2</code> tags."
    testString: assert( /catphotoapp/i.test(code) );

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<!DOCTYPE html>
<html>
  <body>
    <h1>Hello World</h1>
  </body>
</html>
```

</div>
</section>

## Solution
<section id='solution'>

```html
<!DOCTYPE html>
<html>
  <body>
    <h1>Hello World</h1>
    <h2>CatPhotoApp</h2>
  </body>
</html>
```

</section>
