---
id: 5ef9b03c81a63668521804d7
title: Part 33
challengeType: 0
isHidden: true
---

## Description
<section id='description'>

Indicate where to submit the form data by adding an `action` attribute with the value `/submit-cat-photo` to the `form` element.

For example, `<form action="/submit-url"></form>` indicates that the form data should be sent to the URL `/submit-url`.

</section>

## Instructions
<section id='instructions'>
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: See description above for instructions.
    testString: ''

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
      <p>Click here to view more <a target="_blank" href="#">cat photos</a>.</p>
      <a href="#"><img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>
      <h2>Cat Lists</h2>
      <p>Things cats love:</p>
      <ul>
        <li>cat nip</li>
        <li>laser pointers</li>
        <li>lasagna</li>
      </ul>
      <figure>
        <img src="https://bit.ly/fcc-lasagna" alt="Lasagna">
        <figcaption>Cats <em>love</em> lasagna.</figcaption>  
      </figure>
      <p>Top 3 things cats hate:</p>
      <ol>
        <li>flea treatment</li>
        <li>thunder</li>
        <li>other cats</li>
      </ol>
      <figure>
        <img src="https://bit.ly/fcc-cats" alt="Cats">
        <figcaption>Cats <strong>hate</strong> other cats.</figcaption>  
      </figure>
      <h2>Cat Form</h2>
      <form>
      </form>
    </main>
  </body>
</html>
```

</div>
</section>
