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
  - text: See description above for instructions.
    testString: assert(document.querySelector('p').innerText === 'Click here to view more cat photos.');

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
