---
id: 5ef9b03c81a63668521804de
title: Part 42
challengeType: 0
isHidden: true
---

## Description
<section id='description'>

Related radio buttons should have the a `name` attribute with the same value to create a radio button group. For example, `<label><input type="radio" name="animal"> cat</label>`. By creating a radio group, selecting a radio button will automatically deselect the other buttons within the same group. 

Add the `name` attribute with the value `indoor-outdoor` to the radio button.

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your radio button should still be located between the opening and closing tags of the `label` element. 
    testString: |
      const labelChildNodes = [ ...$('form > label')[0].childNodes ];
      assert( labelChildNodes.filter(childNode => childNode.nodeName === "INPUT").length );
  - text: Your radio button should have a `name` attribute. Check that there is a space after the opening tag's name and/or there are spaces before all attribute names.
    testString: assert( $('input')[0].hasAttribute('name') );
  - text: Your radio element should have a `name` attribute with the value `indoor-outdoor`. You have either omitted the value or have a typo. Remember that attribute values should be surrounded with quotation marks.
    testString: assert( $('input')[0].getAttribute('name').match(/^indoor-outdoor$/) );

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
