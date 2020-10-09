---
id: 5ef9b03c81a63668521804df
title: Part 45
challengeType: 0
---

## Description
<section id='description'>

The `id` attribute is used to identify specific HTML elements. Each `id` attribute's value must be unique all other `id` values for the entire page.

Add an `id` attribute with the value `indoor` to the radio button. When elements have multiple attributes, the order of the attributes doesn't matter.

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your radio button should still be located between the opening and closing tags of the `label` element. 
    testString: |
      const labelChildNodes = [ ...$('form > label')[0].childNodes ];
      assert( labelChildNodes.filter(childNode => childNode.nodeName === "INPUT").length );
  - text: Your radio button should have an `id` attribute. Check that there is a space after the opening tag's name and/or there are spaces before all attribute names.
    testString: assert( $('input')[0].hasAttribute('id') );
  - text: Your radio element should have an `id` attribute with the value `indoor`. You have either omitted the value or have a typo. Remember that attribute values should be surrounded with quotation marks.
    testString: assert( $('input')[0].id.match(/^indoor$/) );

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
          <label><input type="radio"> Indoor</label>
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
