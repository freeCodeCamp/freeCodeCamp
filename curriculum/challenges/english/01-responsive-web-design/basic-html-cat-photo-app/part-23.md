---
id: 5ef9b03c81a63668521804d0
title: Part 23
challengeType: 0
isHidden: true
---

## Description
<section id='description'>

Emphasize the word `love` by wrapping it in an emphasis (`em`) element.

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'Your emphasis (`em`) element should have an opening tag. Opening tags have this syntax: `<elementName>`.'
    testString: assert( document.querySelector('em') );
  - text: Your emphasis (`em`) element should have a closing tag. Closing tags have a `/` just after the `<` character.
    testString: assert( code.match(/<\/em\>/) );
  - text: Your emphasis (`em`) element should surround the text `love`. You have either omitted the text or have a typo.
    testString: assert( document.querySelector('em').innerText.toLowerCase() === 'love' );

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
        <p>Things cats love:</p>
        <ul>
          <li>cat nip</li>
          <li>laser pointers</li>
          <li>lasagna</li>
        </ul>
        <figure>
          <img src="https://bit.ly/fcc-lasagna" alt="A slice of lasagna on a plate.">
          --fcc-editable-region--
          <figcaption>Cats love lasagna.</figcaption>
          --fcc-editable-region--
        </figure>
      </section>
    </main>
  </body>
</html>
```

</div>
</section>
