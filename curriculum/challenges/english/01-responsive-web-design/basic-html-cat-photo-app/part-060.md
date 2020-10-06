---
id: 5ef9b03c81a63668521804e5
title: Part 60
challengeType: 0
---

## Description
<section id='description'>

In order to make a checkbox checked or radio button selected by default, you need to add the `checked` attribute to it. There's no need to set a value to the `checked` attribute. Instead, just add the word `checked` to the `input` element, making sure there is space between it and other attributes.

Make the first radio button and the first checkbox selected by default.

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Make sure there still are two radio buttons and three checkboxes nested in their respective `fieldset` elements.
    testString: assert( $('input[type="radio"]').length === 2 && $('fieldset > input[type="checkbox"]').length === 3 );
  - text: The first radio button is missing the `checked` attribute.
    testString: assert( $('input[type="radio"]')[0].hasAttribute('checked') );
  - text: The second radio button should not have the `checked` attribute.
    testString: assert( !$('input[type="radio"]')[1].hasAttribute('checked') );
  - text: The first checkbox is missing the `checked` attribute.
    testString: assert( $('input[type="checkbox"]')[0].hasAttribute('checked') );
  - text: The second checkbox should not have the `checked` attribute.
    testString: assert( !$('input[type="checkbox"]')[1].hasAttribute('checked') );
  - text: The third checkbox should not have the `checked` attribute.
    testString: assert( !$('input[type="checkbox"]')[2].hasAttribute('checked') );

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
          --fcc-editable-region--
          <fieldset>
            <legend>Is your cat an indoor or outdoor cat?</legend>
            <label><input id="indoor" type="radio" name="indoor-outdoor" value="indoor"> Indoor</label>
            <label><input id="outdoor" type="radio" name="indoor-outdoor" value="outdoor"> Outdoor</label>
          </fieldset>
          <fieldset>
            <legend>What's your cat's personality?</legend>
            <input id="loving" type="checkbox" name="personality" value="loving"> <label for="loving">Loving</label>
            <input id="lazy" type="checkbox" name="personality" value="lazy"> <label for="lazy">Lazy</label>
            <input id="energetic" type="checkbox" name="personality" value="energetic"> <label for="energetic"> Energetic</label>
          </fieldset>
          --fcc-editable-region--
          <input type="text" name="catphotourl" placeholder="cat photo URL" required>
          <button type="submit">Submit</button>
        </form>
      </section>
    </main>
  </body>
</html>
```

</div>
</section>
