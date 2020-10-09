---
id: 5ef9b03c81a63668521804e1
title: Part 49
challengeType: 0
---

## Description
<section id='description'>

The `fieldset` element is used to group related inputs and labels together in a web form. `fieldset` elements are <dfn>block-level elements</dfn>, meaning that they appear on a new line.

Nest the `Indoor` and `Outdoor` radio buttons within a `fieldset` element, and don't forget to indent the buttons.

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Both radio buttons should still be located between opening and closing `label` element tags. 
    testString: |
      const labelChildNodes = [ ...$('label') ].map(node => [ ...node.childNodes ]);
      assert( labelChildNodes.filter(childNode => childNode[0].nodeName === "INPUT").length === 2 );
  - text: "Your `fieldset` element should have an opening tag. Opening tags have the following syntax: `<elementName>`."
    testString: assert( document.querySelector('fieldset') );
  - text: Your `fieldset` element should have a closing tag. Closing tags have a `/` just after the `<` character.
    testString: assert( code.match(/<\/fieldset\>/) );
  - text: Both radio button and associated labels should be between the opening and closing tags of the `fieldset` element.
    testString: |
      const radioButtons = [ ...$('input[type="radio"]') ];
      assert( radioButtons.every(btn => btn.parentNode.parentNode.nodeName === "FIELDSET") );

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
          <label><input id="indoor" type="radio" name="indoor-outdoor" value="indoor"> Indoor</label>
          <label><input id="outdoor" type="radio" name="indoor-outdoor" value="outdoor"> Outdoor</label>
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
