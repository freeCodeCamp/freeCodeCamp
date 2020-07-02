---
id: 5ef9b03c81a63668521804d3
title: Part 26
challengeType: 0
isHidden: true
---

## Description
<section id='description'>

After the closing `</ol>` tag, add another `figure` element.

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'Your `figure` element should have an opening tag. Opening tags have this syntax: `<elementName>`.'
    testString: assert( document.querySelectorAll('figure').length === 2 );
  - text: Your `figure` element should have a closing tag. Closing tags have a `/` just after the `<` character.
    testString: assert( code.match(/<\/figure>/g).length === 2 );
  - text: There should be a `figure` element right above the `main` element's closing tag.
    testString: assert( document.querySelector('main').lastElementChild.nodeName === 'FIGURE' );

```

</section>

## Challenge Seed
<section id='challengeSeed'>
<div id='html-seed'>

```html
<!DOCTYPE html>
<html>
  <body>
    <h1>CatPhotoApp</h1>
    <main>
      <h2>Cat Photos</h2>
      <!-- TODO: Add link to cat photos -->
      <p>Click here to view more <a target="_blank" href="#">cat photos</a>.</p>
      <a href="#"><img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>
      <h2>Cat Lists</h2>
      <p>Things cats love:</p>
      <ul>
        <li>cat nip</li>
        <li>laser pointers</li>
        <li>lasagna</li>
      </ul>
      <figure>
        <img src="https://bit.ly/fcc-lasagna" alt="Lasagna">
        <figcaption>Cats <em>love</em> lasagna.</figcaption>  
      </figure>
      <p>Top 3 things cats hate:</p>
      <ol>
        <li>flea treatment</li>
        <li>thunder</li>
        <li>other cats</li>
      </ol>
    </main>
  </body>
</html>
```

</div>
</section>
