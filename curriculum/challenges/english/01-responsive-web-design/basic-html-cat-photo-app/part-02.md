---
id: 5dc1798ff86c76b9248c6eb3
title: Part 02
challengeType: 0
isBeta: true
---

## Description
<section id='description'>

The `<h1>` to `<h6>` elements are used to define headings. `h2` elements have slightly smaller text than `h1` elements.

Add an `h2` element that says "CatPhotoApp" right below the `h1` element that says "Hello World".

</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: See description above for instructions.
    testString: assert(document.querySelector('h2').innerText === 'CatPhotoApp');

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
