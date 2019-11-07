---
id: 5dc23ecef86c76b9248c6eb9
title: Part 08
challengeType: 0
isBeta: true
---

## Description
<section id='description'>

This page will have a few different section. 

Indicate the first section by adding an `h3` element with the text "Cat Photos" above the comment.

</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: See description above for instructions.
    testString: |
      assert( code.replace(/\s/g, '').includes('<main><h3>CatPhotos</h3><!--TODO:Addlinktocatphotos-->') );

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
    </main>
  </body>
</html>
```

</section>
