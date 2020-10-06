---
id: 5ef9b03c81a63668521804dc
title: Part 43
challengeType: 0
---

## Description
<section id='description'>

You can use radio buttons for questions where you want only one answer out of multiple options.

Here is an example of a radio button with the option of `cat`: `<input type="radio"> cat`. Remember that `input` elements are <dfn>self-closing</dfn>.

Before the text input, add a radio button with the option `Indoor`.

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: You should create an input element for your radio button. Check the syntax.
    testString: assert( $('form > input').length >= 2 );
  - text: Your `input` element should have an opening tag, but not a closing tag.
    testString: assert( $('form > input') && !code.match(/<\/input\>/g) );
  - text: You should only have added one input element for your radio button. Remove any extras.
    testString: assert( $('form > input').length === 2 );
  - text: Your new `input` element should be above the existing `input` with `type` attribute set to `text`. You have them in the wrong order.
    testString: |
      const existingInputElem = document.querySelector('form > input[type="text"]');
      assert(
        existingInputElem && existingInputElem.previousElementSibling.nodeName === 'INPUT'
      );
  - text: Your new `input` element does not have a `type` attribute. Check that there is a space after the opening tag's name.
    testString: assert( $('input')[0].hasAttribute('type') );
  - text: Your new `input` element should have a `type` attribute with the value `radio`. You have either omitted the value or have a typo. Remember that attribute values should be surrounded with quotation marks.
    testString: assert( $('input')[0].getAttribute('type').match(/^radio$/i) );
  - text: Although you have set the new `input` element's `type` attribute to `radio`, it is recommended to always surround the value of an attribute with quotation marks.
    testString: assert( !/\<\s*input\s+type\s*=\s*radio/i.test(code) );
  - text: The `radio` button's ` Indoor` text should be located after it instead of before it.
    testString: |
      const radioInputElem = $('input')[0];
      assert( !radioInputElem.previousSibling.nodeValue.match(/Indoor/i) );
  - text: The text ` Indoor` should be located directly to the right of your `radio` button. Make sure there is a space between the element and the text. You have either omitted the text or have a typo.
    testString: |
      const radioInputElem = $('input')[0];
      assert( radioInputElem.nextSibling.nodeValue.replace(/\s+/g, ' ').match(/ Indoor/i) );

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
          <input type="text" name="catphotourl" placeholder="cat photo URL" required>
          --fcc-editable-region--
          <button type="submit">Submit</button>
        </form>
      </section>
    </main>
  </body>
</html>
```

</div>
</section>
