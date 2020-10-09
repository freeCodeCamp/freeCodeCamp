---
id: 5ef9b03c81a63668521804e8
title: Part 62
challengeType: 0
---

## Description
<section id='description'>

Nest a `p` element with the text `No Copyright - freeCodeCamp.org` within the `footer` element.

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: You have either deleted the `footer` element or it is missing an opening tag or closing tag."
    testString: assert( document.querySelector('footer') && code.match(/<\/footer>/) );
  - text: Your `footer` element should have a `p` element. Make sure to added an opening tag and closing tag for the `p` element.
    testString: assert( document.querySelector('footer > p') );
  - text: Your `footer` element should have a closing tag. Closing tags have a `/` just after the `<` character.
    testString: |
      const pElemClosingTags = code.match(/<\/p\>/g);
      assert( pElemClosingTags && pElemClosingTags.length === 2);
  - text: "Your `p` element's text should be `No Copyright - freeCodeCamp.org`. You have either omitted the text, have a typo, or it is not between the `legend` element's opening and closing tags."
    testString: |
      const extraSpacesRemoved = $('footer > p')[0].innerText.replace(/\s+/g, ' ');
      assert( extraSpacesRemoved.match(/No Copyright - freeCodeCamp\.org$/i) );
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
    --fcc-editable-region--
    <footer>
    </footer>
    --fcc-editable-region--
  </body>
</html>
```

</div>
</section>
