---
id: 5ef9b03c81a63668521804e0
title: Part 44
challengeType: 0
isHidden: true
---

## Description
<section id='description'>

The `for` attribute allows assistive technologies like screen readers to create a linked relationship between the `label` and the child `input` element. For example: `<label for="cat"><input id="cat" type="radio"> Cat</label>`.

Add a `for` attribute to the `label` element that is set to the `id` of the nested `input` element.

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your radio button should still be located between the opening and closing tags of the `label` element. 
    testString: |
      const labelChildNodes = [ ...$('form > label')[0].childNodes ];
      assert( labelChildNodes.filter(childNode => childNode.nodeName === "INPUT").length );
  - text: Your `label` element should have a `for` attribute. Check that there is a space after the opening tag's name and/or there are spaces before all attribute names.
    testString: assert( $('label')[0].hasAttribute('for') );
  - text: Your `label` element should have a `for` attribute with the value `indoor`. You have either omitted the value or have a typo. Remember that attribute values should be surrounded with quotation marks.
    testString: assert( $('label')[0].getAttribute('for').match(/^indoor$/) );

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
          <label><input id="indoor" type="radio"> Indoor</label>
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
