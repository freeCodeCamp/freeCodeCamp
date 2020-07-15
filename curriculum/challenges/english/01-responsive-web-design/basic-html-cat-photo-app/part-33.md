---
id: 5ef9b03c81a63668521804d7
title: Part 33
challengeType: 0
isHidden: true
---

## Description
<section id='description'>

The `action` attribute indicates where form data should be sent. For example, `<form action="/submit-url"></form>` tells the browser that the form data should be sent to the path `/submit-url`.

Add an `action` attribute with the value `/submit-cat-photo` to the `form` element.

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your `form` element should have an opening tag and closing tag. You may be missing one or both of the required tags, or have them in the wrong order.
    testString: |
      assert(
        document.querySelector('form') &&
        code.match(/<\/form>/g)
      );
  - text: Your `form` element nested in the last `section` element should be below the `h2` element. You have the `h2` element and the `form` element in the wrong order.
    testString: assert( document.querySelector('form').previousElementSibling.nodeName === 'H2');
  - text: Your `form` element should have no content. Remove any HTML elements or text within the `form` element.
    testString: assert( $('form')[0].innerHTML.trim().length === 0 );
  - text: Your `form` element should have an `action` attribute with the value `/submit-cat-photo`.
    testString: const form = document.querySelector('form'); assert( form.getAttribute('action').match(/\/submit\-cat\-photo/i) );

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
        <form>
        </form>
        --fcc-editable-region--
      </section>
    </main>
  </body>
</html>
```

</div>
</section>
