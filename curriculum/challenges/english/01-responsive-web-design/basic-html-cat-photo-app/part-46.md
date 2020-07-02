---
id: 5ef9b03c81a63668521804e2
title: Part 46
challengeType: 0
isHidden: true
---

## Description
<section id='description'>

Forms commonly use checkboxes for questions that may have more than one answer. The code for a checkbox is very similar to that of a radio button.

After the `<br>` tag, add an `input` with its `type` attribute set to `checkbox`, and give it the option of `Loving`.

Here's an example of a checkbox with the option of `tacos`: `<input type="checkbox"> tacos`.

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
        <input type="text" placeholder="cat photo URL" required>
        <button type="submit">Submit</button>
      </form>
    </main>
  </body>
</html>
```

</div>
</section>
