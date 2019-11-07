---
id: 5ddbd81294d8ddc1510a8e56
title: Part 13
challengeType: 0
isBeta: true
---

## Description
<section id='description'>

Now add the anchor text "cat photos" to the anchor element. This will become the link's text. 

For example, `<a href="https://www.freecodecamp.org">click here to go to freeCodeCamp.org</a>` has the anchor text "click here to go to freeCodeCamp.org".

</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: See description above for instructions.
    testString: assert( document.querySelector('a').innerText === 'cat photos' );

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
      <a href="https://catphotos.com"></a>
      <img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back.">
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
      <a href="https://catphotos.com">cat photos</a>
      <img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back.">
    </main>
  </body>
</html>
```

</section>
