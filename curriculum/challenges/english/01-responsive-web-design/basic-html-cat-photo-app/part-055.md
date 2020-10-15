---
id: 5efc4f528d6a74d05e68af74
title: Part 55
challengeType: 0
---

## Description
<section id='description'>

There's another way to associate an `input` element's text with the element itself. You can nest the text within a `label` element and add a `for` attribute with the same value as the `input` element's `id` attribute.

Associate the text `Loving` with the checkbox by only nesting the text `Loving` in a `label` element and place it to the right side of the checkbox `input` element.

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: You should make sure the checkbox is still present.
    testString: assert( $('input[type="checkbox"]')[0] );
  - text: Your checkbox should still have an `id` attribute with the value `loving`. You may have removed the attribute or changed its value.
    testString: assert( $('input[type="checkbox"]')[0].id === 'loving' );
  - text: The text ` Loving` should no longer be located directly to the right of your checkbox. It should be wrapped in a `label` element.
    testString: |
      const checkboxInputElem = $('input[type="checkbox"]')[0];
      assert( !checkboxInputElem.nextSibling.nodeValue.replace(/\s+/g, ' ').match(/ Loving/i) );
  - text: You will need to add a new `label` element in which to nest the text `Loving`. Make sure it has both an opening and closing tag.
    testString: assert( document.querySelectorAll('label').length === 3  && code.match(/<\/label\>/g).length === 3 );
  - text: The new `label` element should be located directly to the right of your checkbox. Make sure there is a space between the two elements.
    testString: |
      const checkboxInputElem = $('input[type="checkbox"]')[0];
      assert( checkboxInputElem.nextElementSibling.nodeName === 'LABEL' );
  - text: The new `label` element does not have a `for` attribute. Check that there is a space after the opening tag's name.
    testString: |
      const labelElem = $('input[type="checkbox"]')[0].nextElementSibling;
      assert( labelElem.hasAttribute('for') );
  - text: The new `label` element should have a `for` attribute with the value `loving`. You have either omitted the value or have a typo. Remember that attribute values should be surrounded with quotation marks.
    testString: |
      const labelElem = $('input[type="checkbox"]')[0].nextElementSibling;
      assert( labelElem.getAttribute('for').match(/^loving$/) );
  - text: The text `Loving` should be nested within the new `label` element. You have either omitted the text or have a typo.
    testString: |
      const labelElem = document.querySelector('label[for="loving"]');
      assert( labelElem.textContent.replace(/\s/g, '').match(/Loving/i) );

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
            <label><input id="indoor" type="radio" name="indoor-outdoor" value="indoor"> Indoor</label>
            <label><input id="outdoor" type="radio" name="indoor-outdoor" value="outdoor"> Outdoor</label>
          </fieldset>
          <fieldset>
            <legend>What's your cat's personality?</legend>
            --fcc-editable-region--
            <input id="loving" type="checkbox"> Loving
            --fcc-editable-region--
          </fieldset>
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
