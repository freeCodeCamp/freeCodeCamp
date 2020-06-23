---
id: 5dc17d3bf86c76b9248c6eb4
title: Part 03
challengeType: 0
isBeta: true
---

## Description
<section id='description'>

`p` elements are used to create paragraph text on websites. 

Create a `p` element below your `h2` element, and give it the text "Click here to view more cat photos.".

</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: "Your <code>p</code> element should have an opening tag. Hint: Opening tags have this syntax: <code>&lt;elementName&gt;</code>."
    testString: assert( document.querySelector('p') );
  - text: "Your <code>p</code> element should have a closing tag. Hint: <code>p</code> elements have an opening and closing tag. Closing tags start with a <code>/</code>."
    testString: assert( code.match(/\<\/p\>/) );
  - text: "Your <code>p</code> element's text should be 'Click here to view more cat photos.'. Hint: You have either omitted the text or have a typo."
    testString: assert( document.querySelector('p').innerText.toLowerCase() === 'click here to view more cat photos.' );
  - text: "Your <code>p</code> element's text should be 'Click here to view more cat photos.'. Hint: Only place the text 'Click here to view more cat photos.' between the opening and closing <code>p</code> tags."
    testString: assert( /click\s+here\s+to\s+view\s+more\s+cat\s+photos\./i.test(code) );

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
    <h2>CatPhotoApp</h2>
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
    <p>Click here to view more cat photos.</p>
  </body>
</html>
```

</section>
