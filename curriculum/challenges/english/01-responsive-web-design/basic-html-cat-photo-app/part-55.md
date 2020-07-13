---
id: 5ef9b03c81a63668521804e7
title: Part 55
challengeType: 0
isHidden: true
---

## Description
<section id='description'>

Now you will add a footer section to the page. 

After the `main` element, add a `footer` element.

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
<html>
  <body>
    <h1>CatPhotoApp</h1>
    <main>
      <section>
        <h2>Cat Photos</h2>
        <!-- TODO: Add link to cat photos -->
        <p>Click here to view more <a target="_blank" href="https://www.freecodecamp.org/cat-photos">cat photos</a>.</p>
        <a href="https://www.freecodecamp.org/cat-photos"><img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>
      </section>
      <section>
        <h2>Cat Lists</h2>
        <h3>Things cats love:</h3>
        <ul>
          <li>cat nip</li>
          <li>laser pointers</li>
          <li>lasagna</li>
        </ul>
        <figure>
          <img src="https://bit.ly/fcc-lasagna" alt="A slice of lasagna on a plate.">
          <figcaption>Cats <em>love</em> lasagna.</figcaption>  
        </figure>
        <h3>Top 3 things cats hate:</h3>
        <ol>
          <li>flea treatment</li>
          <li>thunder</li>
          <li>other cats</li>
        </ol>
        <figure>
          <img src="https://bit.ly/fcc-cats" alt="Five cats looking around a field.">
          <figcaption>Cats <strong>hate</strong> other cats.</figcaption>  
        </figure>
      </section>
      <section>
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
      </section>
    </main>
  </body>
</html>
```

</div>
</section>
