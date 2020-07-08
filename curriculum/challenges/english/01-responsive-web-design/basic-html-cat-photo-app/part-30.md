---
id: 5ef9b03c81a63668521804d4
title: Part 30
challengeType: 0
isHidden: true
---

## Description
<section id='description'>

The `strong` element is used to indicate that some text is of strong importance or urgent.

In the `figcaption` you just added, indicate that `hate` is of strong importance by adding `<strong>` before the word and `</strong>` after the word.

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'Your `strong` element should have an opening tag. Opening tags have this syntax: `<elementName>`.'
    testString: assert( document.querySelector('strong') );
  - text: Your strong element should have a closing tag. Closing tags have a `/` just after the `<` character.
    testString: assert( code.match(/<\/strong\>/) );
  - text: Your strong element should surround the word `hate` in the text `Cats hate other cats.` You have either omitted the text or have a typo.
    testString: assert( document.querySelectorAll('figcaption')[1].querySelector('strong').innerText.toLowerCase() === 'hate' );

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
        <figcaption>Cats hate other cats.</figcaption>  
      </figure>
    </main>
  </body>
</html>
```

</div>
</section>
