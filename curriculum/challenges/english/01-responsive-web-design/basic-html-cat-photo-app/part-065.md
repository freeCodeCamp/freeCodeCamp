---
id: 5ef9b03c81a63668521804eb
title: Part 65
challengeType: 0
---

## Description
<section id='description'>

The `title` element determines what browsers show in the title bar or tab for the page.

Add a `title` element within the `head` element. Its text should be `CatPhotoApp`.

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: You have either deleted the `head` element or it is missing an opening tag or closing tag.
    testString: assert( code.match(/\<head\>/) && code.match(/\<\/head\>/) );
  - text: Your `title` element should be nested in the `head` element. Make sure to added an opening tag and closing tag for the `title` element.
    testString: |
      const noSpaces = code.replace(/\s/g, '');
      assert( noSpaces.match(/\<head\>\<title\>.*\<\/title\>\<\/head\>/) );
  - text: Your `title` element should have a closing tag. Closing tags have a `/` just after the `<` character.
    testString: |
      assert( code.match(/\<\/title\>/) );
  - text: Your `title` element's text should be `CatPhotoApp`. You have either omitted the text or have a typo.
    testString: assert( document.title && document.title.toLowerCase() === 'catphotoapp' );

```

</section>

## Challenge Seed
<section id='challengeSeed'>
<div id='html-seed'>

```html
<html>
  --fcc-editable-region--
  <head>
  </head>
  --fcc-editable-region--
  <body>
    <h1>CatPhotoApp</h1>
    <main>
      <section>
        <h2>Cat Photos</h2>
        <!-- TODO: Add link to cat photos -->
        <p>Click here to view more <a target="_blank" href="https://freecatphotoapp.com">cat photos</a>.</p>
        <a href="https://freecatphotoapp.com"><img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>
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
        <form action="https://freecatphotoapp.com/submit-cat-photo">
          <fieldset>
            <legend>Is your cat an indoor or outdoor cat?</legend>
            <label><input id="indoor" type="radio" name="indoor-outdoor" value="indoor" checked> Indoor</label>
            <label><input id="outdoor" type="radio" name="indoor-outdoor" value="outdoor"> Outdoor</label>
          </fieldset>
          <fieldset>
            <legend>What's your cat's personality?</legend>
            <input id="loving" type="checkbox" name="personality" value="loving" checked> <label for="loving">Loving</label>
            <input id="lazy" type="checkbox" name="personality" value="lazy"> <label for="lazy">Lazy</label>
            <input id="energetic" type="checkbox" name="personality" value="energetic"> <label for="energetic">Energetic</label>
          </fieldset>
          <input type="text" name="catphotourl" placeholder="cat photo URL" required>
          <button type="submit">Submit</button>
        </form>
      </section>
    </main>
    <footer>
      <p>
        No Copyright - <a href="https://www.freecodecamp.org">freeCodeCamp.org</a>
      </p>
    </footer>
  </body>
</html>
```

</div>
</section>
