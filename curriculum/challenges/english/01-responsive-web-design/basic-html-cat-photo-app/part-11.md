---
id: 5dc24165f86c76b9248c6ebc
title: Part 11
challengeType: 0
isBeta: true
---

## Description
<section id='description'>

All `img` elements should have an `alt` attribute. The text inside an `alt` attribute is used for screen readers to improve accessibility and is displayed if the image fails to load. 

Add an `alt` attribute to the `img` element with the text "A cute orange cat lying on its back.". 

For example, `<img src="cat.jpg" alt="A cat.">` has an `alt` attribute with the text "A cat.".

</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: See description above for instructions.
    testString: assert( document.querySelector('img').alt === 'A cute orange cat lying on its back.' );

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<!DOCTYPE html>
<html>
  <body>
    <h2>CatPhotoApp</h2>
    <main>
      <!-- TODO: Add link to cat photos -->
      <p>Click here to view more cat photos.</p>
      <img src="https://bit.ly/fcc-relaxing-cat">
    </main>
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
    <h2>CatPhotoApp</h2>
    <main>
      <h3>Cat Photos</h3>
      <!-- TODO: Add link to cat photos -->
      <p>Click here to view more cat photos.</p>
      <img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back.">
    </main>
  </body>
</html>
```

</section>
