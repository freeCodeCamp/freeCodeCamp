---
id: 5dfb6a35eacea3f48c6300b4
title: Part 24
challengeType: 0
isBeta: true
---

## Description
<section id='description'>

After the `img` tag that is nested in the `figure` element, add a `<figcaption>` element with the text "Cats love lasagna.".

For example, `<figcaption>cat</figcaption>` has the text "cat".

</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: See description above for instructions.
    testString: assert( code.replace(/\s/g, '').includes('<figure><imgsrc="lasagna.jpg"alt="Lasagna"><figcaption>Catslovelasagna.</figcaption></figure>') );
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
      <figure>
        <img src="lasagna.jpg" alt="Lasagna">
      </figure>
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
      <figure>
        <img src="lasagna.jpg" alt="Lasagna">
        <figcaption>Cats love lasagna.</figcaption>  
      </figure>
    </main>
  </body>
</html>
```

</section>
