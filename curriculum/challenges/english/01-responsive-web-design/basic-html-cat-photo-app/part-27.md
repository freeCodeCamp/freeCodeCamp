---
id: 5efada803cbd2bbdab94e332
title: Part 27
challengeType: 0
isHidden: true
---

## Description
<section id='description'>

Inside the `figure` element you just added, nest an `img` element with a `src` attribute set to `https://bit.ly/fcc-cats`.

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'Your second `figure` element should have an opening tag. Opening tags have this syntax: `<elementName>`.'
    testString: assert( document.querySelectorAll('figure').length === 2 );
  - text: Your second `figure` element should have a closing tag. Closing tags have a `/` just after the `<` character.
    testString: assert( code.match(/<\/figure>/g).length === 2 );
  - text: There should be a second `figure` element right above the `main` element's closing tag. You have them in the wrong order.
    testString: assert( document.querySelector('main').lastElementChild.nodeName === 'FIGURE' );
  - text: Your third `img` element should be nested in the `figure` element.
    testString: const catsImg = document.querySelectorAll('figure > img')[1]; assert( catsImg && catsImg.getAttribute('src').toLowerCase() === 'https://bit.ly/fcc-cats');

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
      <h2>Cat Photos</h2>
      <!-- TODO: Add link to cat photos -->
      <p>Click here to view more <a target="_blank" href="https://www.freecodecamp.org/cat-photos">cat photos</a>.</p>
      <a href="https://www.freecodecamp.org/cat-photos"><img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>
      <h2>Cat Lists</h2>
      <p>Things cats love:</p>
      <ul>
        <li>cat nip</li>
        <li>laser pointers</li>
        <li>lasagna</li>
      </ul>
      <figure>
        <img src="https://bit.ly/fcc-lasagna" alt="A slice of lasagna on a plate.">
        <figcaption>Cats <em>love</em> lasagna.</figcaption>  
      </figure>
      <p>Top 3 things cats hate:</p>
      <ol>
        <li>flea treatment</li>
        <li>thunder</li>
        <li>other cats</li>
      </ol>
      <figure>
      --fcc-editable-region--
      --fcc-editable-region--
      </figure>
    </main>
  </body>
</html>
```

</div>
</section>
