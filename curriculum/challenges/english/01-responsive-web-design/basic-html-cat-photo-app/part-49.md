---
id: 5efc54138d6a74d05e68af76
title: Part 49
challengeType: 0
isHidden: true
---

## Description
<section id='description'>

Add an `id` attribute with the value `loving` to the checkbox input. Also, to increase accessibility, add a `for` attribute to the `label` element around the checkbox input and give it the same value, `loving`.

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
      <form action="/submit-cat-photo">
        <label for="indoor"><input id="indoor" type="radio" name="indoor-outdoor"> Indoor</label>
        <label for="outdoor"><input id="outdoor" type="radio" name="indoor-outdoor"> Outdoor</label>
        <br>
        <label><input type="checkbox" name="personality"> Loving</label>
        <input type="text" placeholder="cat photo URL" required>
        <button type="submit">Submit</button>
      </form>
    </main>
  </body>
</html>
```

</div>
</section>
