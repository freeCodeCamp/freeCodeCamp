---
id: 5dc24614f86c76b9248c6ebd
title: Part 12
challengeType: 0
isBeta: true
---

## Description
<section id='description'>

After the paragraph element, add an anchor element that links to the `catphotos.com` website at `https://catphotos.com`. 

For example, `<a href="https://www.freecodecamp.org"></a>` is an anchor element that links to `freecodecamp.org`.

</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: See description above for instructions.
    testString: assert( code.replace(/\s/g, '').includes('<p>Clickheretoviewmorecatphotos.</p><ahref="https://catphotos.com"></a>') );

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
      <a href="https://catphotos.com"></a>
      <img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back.">
    </main>
  </body>
</html>
```

</section>
