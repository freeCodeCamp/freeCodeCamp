---
id: 5ef9b03c81a63668521804ea
title: Part 58
challengeType: 0
isHidden: true
---

## Description
<section id='description'>

You will notice that the entire contents of the page are nested within an `html` element. All other elements must be descendants of this `html` element. 

Inside the opening `html` tag, add `lang="en"` to specify that the language of the page is English.

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
      <div>
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
      </div>
      <h2>Cat Form</h2>
      <form action="/submit-cat-photo">
        <div>
          <label for="indoor"><input id="indoor" type="radio" name="indoor-outdoor"> Indoor</label>
          <label for="outdoor"><input id="outdoor" type="radio" name="indoor-outdoor"> Outdoor</label>
        </div>
        <div>
          <label for="loving"><input id="loving" type="checkbox" name="personality" checked> Loving</label>
          <label for="lazy"><input id="lazy" type="checkbox" name="personality"> Lazy</label>
          <label for="energetic"><input id="energetic" type="checkbox" name="personality"> Energetic</label>
        </div>
        <input type="text" placeholder="cat photo URL" required>
        <button type="submit">Submit</button>
      </form>
    </main>
    <footer>
      <p>No Copyright - <a href="https://www.freecodecamp.org">freeCodeCamp.org</a></p>
    </footer>
  </body>
</html>
```

</div>
</section>
