---
id: 5dc23f9bf86c76b9248c6eba
title: Part 09
challengeType: 0
isBeta: true
---

## Description
<section id='description'>

You can add images to your website by using the `img` element.

Below the paragraph element, add an `<img>` element. 

Note that an image element does not need a closing tag. At this point, the image element will not show up in a browser.

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
      assert( code.replace(/\s/g, '').includes('<p>Clickheretoviewmorecatphotos.</p><img></main>') );

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
      <img>
    </main>
  </body>
</html>
```

</section>
