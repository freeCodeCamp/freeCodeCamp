---
id: 5ef9b03c81a63668521804d8
title: Part 36
challengeType: 0
---

## Description
<section id='description'>

The `input` element is allows you several ways to collect data from a web form. Like anchor (`a`) elements, `input` elements are <dfn>self-closing</dfn> and do not need closing tags.

Nest an `input` element in the `form` element.

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your `form` element should have an opening tag and closing tag in the correct order. You may be missing one or both of the required tags, or have them in the wrong order.
    testString: |
      const noSpaces = code.replace(/\s/g, '');
      assert(
        document.querySelector('form') &&
        code.match(/<\/form>/g) &&
        noSpaces.indexOf('<form') < noSpaces.indexOf('</form>')
      );
  - text: Your `form` element's opening tag should only have an `action` attribute. Remove anything else you may have typed in it.
    testString: assert( [...document.querySelector('form').attributes].length < 2 );
  - text: You should create an input element. Check the syntax.
    testString: assert( document.querySelector('input') );
  - text: Your `input` element should have an opening tag, but not a closing tag.
    testString: assert( document.querySelector('input') && !code.match(/<\/input\>/g) );
  - text: Your `input` element should be nested within the `form` element.
    testString: assert( document.querySelector('form > input') );
  - text: Your `form` should only contain the `input` element. Remove any HTML elements or text between the `form` element's tags.
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
