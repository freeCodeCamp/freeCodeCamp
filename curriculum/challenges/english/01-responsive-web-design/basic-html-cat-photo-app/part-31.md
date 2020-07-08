---
id: 5ef9b03c81a63668521804d5
title: Part 31
challengeType: 0
isHidden: true
---

## Description
<section id='description'>

After the last `figure` element add another `h2` tag with the text `Cat Form`.

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your `h2` element should have an opening tag.
    testString: assert( document.querySelectorAll('h2').length === 3 );
  - text: Your `h2` element should have a closing tag.
    testString: assert( code.match(/\<\/h2\>/g).length === 3 );
  - text: There should be an `h2` element right above the `main` element's closing tag.
    testString: assert( document.querySelector('main').lastElementChild.nodeName === 'H2' );
  - text: Your `h2` element's text should be `Cat Form`.
    testString: assert( document.querySelectorAll('h2')[2].innerText.toLowerCase().replace(/\s+/g, ' ') === 'cat form' );

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
        <img src="https://bit.ly/fcc-cats" alt="Five cats looking around a field.">
        <figcaption>Cats <strong>hate</strong> other cats.</figcaption>  
      </figure>
    </main>
  </body>
</html>
```

</div>
</section>
