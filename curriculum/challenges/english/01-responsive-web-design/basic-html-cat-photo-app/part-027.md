---
id: 5ef9b03c81a63668521804d3
title: Part 27
challengeType: 0
---

## Description
<section id='description'>

After the ordered list, add another `figure` element.

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'Your `figure` element should have an opening tag. Opening tags have this syntax: `<elementName>`.'
    testString: assert( document.querySelectorAll('figure').length === 2 );
  - text: Your `figure` element should have a closing tag. Closing tags have a `/` just after the `<` character.
    testString: assert( code.match(/<\/figure>/g).length === 2 );
  - text: There should be a `figure` element right above the second `section` element's closing tag.
    testString: assert( $('main > section')[1].lastElementChild.nodeName === 'FIGURE' );

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
        --fcc-editable-region--
        <ol>
          <li>flea treatment</li>
          <li>thunder</li>
          <li>other cats</li>
        </ol>
        --fcc-editable-region--
      </section>
    </main>
  </body>
</html>
```

</div>
</section>
