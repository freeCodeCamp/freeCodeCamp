---
id: 5ef9b03c81a63668521804db
title: Part 40
challengeType: 0
---

## Description
<section id='description'>

To prevent a user from submitting your form when required information is missing, you need to add the `required` attribute to an `input` element. There's no need to set a value to the `required` attribute. Instead, just add the word `required` to the `input` element, making sure there is space between it and other attributes.

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: You have either deleted your `input` element or it has invalid syntax. All attributes' values should be surrounded by quotation marks.
    testString: assert( $('input').length );
  - text: Your `form` should only contain the `input` element. Remove any HTML additional elements or text within the `form` element.
    testString: assert( $('form')[0].children.length === 1 && $('form')[0].innerText.trim().length === 0 );
  - text: Your `input` element should have a `required` attribute. Remember, you just add the word `required` inside the `input` element's tag.
    testString: assert( $('input')[0].hasAttribute('required') );
  - text: A value should not be given to the `required` attribute.
    testString: assert( $('input')[0].getAttribute('required') === '' );

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
          <input type="text" name="catphotourl" placeholder="cat photo URL">
          --fcc-editable-region--
        </form>
      </section>
    </main>
  </body>
</html>
```

</div>
</section>
