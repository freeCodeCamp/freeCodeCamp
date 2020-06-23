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
  - text: "Your <code>p</code> element should have an opening tag. Opening tags have this syntax: <code>&lt;elementName&gt;</code>."
    testString: assert( document.querySelector('p') );
  - text: "Your <code>p</code> element should have a closing tag. Closing tags have a <code>/</code> just after the <code>&lt;</code> character."
    testString: assert( code.match(/\<\/p\>/) );
  - text: "Your <code>p</code> element's text should be 'Click here to view more cat photos.'. You have either omitted the text or have a typo."
    testString: assert( document.querySelector('p').innerText.match(/click here to view more cat photos/i);
  - text: "Your <code>p</code> element should be below the <code>h2</code> element. You have them in the wrong order."
    testString: const collection = [...document.querySelectorAll('h2,p')].map(node => node.nodeName); assert( collection.indexOf('H2') < collection.indexOf('P') );

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
