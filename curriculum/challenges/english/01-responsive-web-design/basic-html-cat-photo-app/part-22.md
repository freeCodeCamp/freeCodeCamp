---
id: 5dfb6250eacea3f48c6300b2
title: Part 22
challengeType: 0
isBeta: true
---

## Description
<section id='description'>

After the unordered list, add another image with a `src` of "lasagna.jpg" and an `alt` of "Lasagna".

</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: See description above for instructions.
    testString: assert( (() => { const lasagnaImg = Array.from(document.querySelectorAll('img')).filter(img => img.alt.toLowerCase() === 'lasagna')[0]; return lasagnaImg.alt.toLowerCase() === 'lasagna' && lasagnaImg.src.slice(-11) === 'lasagna.jpg' && code.replace(/\s/g, '').includes('</ul><img') })() );
    # testString: assert( (() => { const lasagnaImg = Array.from(document.querySelectorAll('img'))[1]; return lasagnaImg.alt.toLowerCase() === 'lasagna' && lasagnaImg.src.slice(-11) === 'lasagna.jpg' && code.replace(/\s/g, '').includes('</ul><img') })() );

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
      <ul>
        <li>cat nip</li>
        <li>laser pointers</li>
        <li>lasagna</li>
      </ul>
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
        <li>cat nip</li>
        <li>laser pointers</li>
        <li>lasagna</li>
      </ul>
      <img src="lasagna.jpg" alt="Lasagna">
    </main>
  </body>
</html>
```

</section>
