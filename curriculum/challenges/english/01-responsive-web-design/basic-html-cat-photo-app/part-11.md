---
id: 5dc24165f86c76b9248c6ebc
title: Part 11
challengeType: 0
isBeta: true
---

## Description
<section id='description'>

All `img` elements should have an `alt` attribute. The text inside an `alt` attribute is used for screen readers to improve accessibility and is displayed if the image fails to load.  For example, `<img src="cat.jpg" alt="A cat">` has an `alt` attribute with the text "A cat".

Add an `alt` attribute to the `img` element with the text "A cute orange cat lying on its back".

</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your <code>img</code> element does not have an <code>alt</code> attribute. You have either omitted the attribute or have a typo.
    testString: const imgElementText = code.replace(/\s/g, '').match(/\<img([^>].*?>)/)[0]; assert( imgElementText.includes('alt') );
  - text: Your <code>img</code> element's <code>src</code> attribute value should be set to 'A cute orange cat lying on its back'. You have either omitted the text or have a typo.
    testString: const altText = document.querySelector('img').alt.toLowerCase().replace(/\s/g, ''); assert( altText.match(/acuteorangecatlyingonitsback/) );

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
