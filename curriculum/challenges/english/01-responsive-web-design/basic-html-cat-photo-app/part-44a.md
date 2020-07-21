---
id: 5f05a1d8e233dff4a68508d8
title: Part 44a
challengeType: 0
isHidden: true
---

## Description
<section id='description'>

Add another radio button with the option `Outdoor` under the first one. Wrap the new radio button in a `label`, and to set the `for` and `id` attributes to `outdoor`.

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'Your new `label` element should have an opening tag. Opening tags have this syntax: `<elementName>`.'
    testString: assert( document.querySelectorAll('label').length === 2 );
  - text: Your new `label` element should have a closing tag. Closing tags have a `/` just after the `<` character.
    testString: assert( code.match(/<\/label\>/g).length === 2 );
  - text: Your new radio button should be below the first one. You have them in the wrong order.
    testString: |
      const collection = [...document.querySelectorAll('input[type="radio"]')].map(node => node.nextSibling.nodeValue.replace(/\s+/g, ''));
      assert( collection.indexOf('Indoor') < collection.indexOf('Outdoor') );
  - text: The text ` Outdoor` should be located directly to the right of your new `radio` button. Make sure there is a space between the element and the text. You have either omitted the text or have a typo.
    testString: |
      const radioInputElem = $('input')[1];
      assert( radioInputElem.nextSibling.nodeValue.replace(/\s+/g, ' ').match(/ Outdoor/i) );
  - text: Your new radio button and its text should all be located between the opening and closing tags of the `label` element. 
    testString: |
      const labelChildNodes = [ ...$('form > label')[1].childNodes ];
      assert( labelChildNodes.filter(childNode => childNode.nodeName === "INPUT").length );
  - text: Your new `label` element should have a `for` attribute with the value `outdoor`. You have either omitted the value or have a typo. Remember that attribute values should be surrounded with quotation marks.
    testString: assert( $('label')[1].getAttribute('for').match(/^outdoor$/) );
  - text: Your new `label` element should have a `for` attribute with the value `outdoor`. You have either omitted the value or have a typo. Remember that attribute values should be surrounded with quotation marks.
    testString: assert( $('label')[1].getAttribute('for').match(/^outdoor$/) );
  - text: Your new radio button should have an `id` attribute. Check that there is a space after the opening tag's name and/or there are spaces before all attribute names.
    testString: assert( $('input')[1].hasAttribute('id') );
  - text: Your new radio element should have an `id` attribute with the value `outdoor`. You have either omitted the value or have a typo. Remember that attribute values should be surrounded with quotation marks.
    testString: assert( $('input')[1].id.match(/^outdoor$/) );

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
        <form action="https://freecatphotoapp.com/submit-cat-photo">
          --fcc-editable-region--
          <label for="indoor"><input id="indoor" type="radio"> Indoor</label>
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
