---
id: 5dc24165f86c76b9248c6ebc
title: Part 09
challengeType: 0
isHidden: true
---

## Description
<section id='description'>

All `img` elements should have an `alt` attribute. The text inside an `alt` attribute is used for screen readers to improve accessibility and is displayed if the image fails to load.  For example, `<img src="cat.jpg" alt="A cat">` has an `alt` attribute with the text `A cat`.

Add an `alt` attribute to the `img` element with the text `A cute orange cat lying on its back`.

</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should have an `img` element. You removed the `img` element from an earlier step.
    testString: assert( document.querySelector('img') );
  - text: Your <code>img</code> element does not have an <code>alt</code> attribute. You have either omitted the attribute or have a typo.
    testString: const altVal = document.querySelector('img').getAttribute('alt'); assert( altVal || altVal === '' );
  - text: Your <code>img</code> element's <code>src</code> attribute value should be set to 'A cute orange cat lying on its back'. You have either omitted the text or have a typo.
    testString: const altText = document.querySelector('img').alt.toLowerCase().replace(/\s/g, ''); assert( altText.match(/acuteorangecatlyingonitsback\.?$/) );

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<!DOCTYPE html>
<html>
  <body>
    <h1>CatPhotoApp</h1>
    <main>
      <h2>Cat Photos</h2>
      <!-- TODO: Add link to cat photos -->
      <p>Click here to view more cat photos.</p>
      <img src="https://bit.ly/fcc-relaxing-cat">
    </main>
  </body>
</html>
```

</div>
</section>
