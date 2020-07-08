---
id: 5ef9b03c81a63668521804dc
title: Part 40
challengeType: 0
isHidden: true
---

## Description
<section id='description'>

You can use radio buttons for questions where you want only one answer out of multiple options.

Here is an example of a radio button with the option of `cat`: `<input type="radio"> cat`. Remember that `input` elements are <dfn>self-closing</dfn>.

Before the submit button, add two radio buttons on two separate lines with the options `Indoor` and `Outdoor`.

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
      <p>Click here to view more <a target="_blank" href="https://www.freecodecamp.org/cat-photos">cat photos</a>.</p>
      <a href="https://www.freecodecamp.org/cat-photos"><img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>
      <h2>Cat Lists</h2>
      <p>Things cats love:</p>
      <ul>
        <li>cat nip</li>
        <li>laser pointers</li>
        <li>lasagna</li>
      </ul>
      <figure>
        <img src="https://bit.ly/fcc-lasagna" alt="A slice of lasagna on a plate.">
        <figcaption>Cats <em>love</em> lasagna.</figcaption>  
      </figure>
      <p>Top 3 things cats hate:</p>
      <ol>
        <li>flea treatment</li>
        <li>thunder</li>
        <li>other cats</li>
      </ol>
      <figure>
        <img src="https://bit.ly/fcc-cats" alt="Five cats looking around a field.">
        <figcaption>Cats <strong>hate</strong> other cats.</figcaption>  
      </figure>
      <h2>Cat Form</h2>
      <form action="/submit-cat-photo">
        <input type="text" placeholder="cat photo URL" required>
        <button type="submit">Submit</button>
      </form>
    </main>
  </body>
</html>
```

</div>
</section>
