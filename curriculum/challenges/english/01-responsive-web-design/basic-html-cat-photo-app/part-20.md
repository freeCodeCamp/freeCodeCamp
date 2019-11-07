---
id: 5dfa37b9eacea3f48c6300b0
title: Part 20
challengeType: 0
isBeta: true
---

## Description
<section id='description'>

After the paragraph tag, add an opening tag for an unordered list, `<ul>`. On the next line, add a closing tag, `</ul>`.

The unordered list will not appear in the browser until content is added.

</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: See description above for instructions.
    testString: assert( code.replace(/\s/g, '').includes('<p>Thingscatslove:</p><ul></ul></main>') );

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
      <p>Click here to view more <a target="_blank" href="#">cat photos</a>.</p>
      <a href="#"><img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>
      <h3>Cat Lists</h3>
      <p>Things cats love:</p>
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
      <p>Click here to view more <a target="_blank" href="#">cat photos</a>.</p>
      <a href="#"><img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>
      <h3>Cat Lists</h3>
      <p>Things cats love:</p>
      <ul>
      </ul>
    </main>
  </body>
</html>
```

</section>
