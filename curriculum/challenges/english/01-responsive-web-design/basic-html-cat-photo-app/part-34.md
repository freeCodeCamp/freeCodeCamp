---
id: 5ef9b03c81a63668521804d8
title: Part 34
challengeType: 0
isHidden: true
---

## Description
<section id='description'>

The `input` element is one of the most versatile HTML elements, and gives you many ways to collect data from web forms. Like anchor (`a`) elements, `input` elements are <dfn>self-closing</dfn> and do not need closing tags.

Nest an `input` element in the `form` element.

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your `input` element should have an opening tag, but not a closing tag.
    testString: assert( document.querySelector('input') && !code.match(/<\/input\>/g) );
  - text: Your `input` element should be nested within the `form` element.
    testString: assert( document.querySelector('form > input') );
  - text: Your `form` should only contain the `input` element. Remove any HTML additional elements or text within the `form` element.
    testString: assert( $('form')[0].children.length === 1 && $('form')[0].innerText.trim().length === 0 );

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
        --fcc-editable-region--
        <form action="https://freecatphotoapp.com/submit-cat-photo">
        </form>
        --fcc-editable-region--
      </section>
    </main>
  </body>
</html>
```

</div>
</section>
