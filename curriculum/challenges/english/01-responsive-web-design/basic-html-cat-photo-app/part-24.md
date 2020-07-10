---
id: 5ef9b03c81a63668521804d1
title: Part 24
challengeType: 0
isHidden: true
---

## Description
<section id='description'>

After the `figure` element, add a `p` element with the text `Top 3 things cats hate:`.

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: There should be a `p` element right above the `main` element's closing tag.
    testString: assert( document.querySelector('main').lastElementChild.nodeName === 'P' );
  - text: The `p` element right above the `main` element's closing tag should have the text `Top 3 things cats hate:`. Make sure to include the colon at the end of the text.
    testString: assert( document.querySelector('main').lastElementChild.innerText.toLowerCase().replace(/\s+/g, ' ') === 'top 3 things cats hate:' );
  - text: There should be a closing `</figure>` tag. You might have accidentally deleted the closing `</figure>` tag, or removed the `figure` element altogether.
    testString: assert( code.match(/<\/figure\>/) );

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
        --fcc-editable-region--
        <figure>
          <img src="https://bit.ly/fcc-lasagna" alt="A slice of lasagna on a plate.">
          <figcaption>Cats <em>love</em> lasagna.</figcaption>  
        </figure>
        --fcc-editable-region--
      </section>
    </main>
  </body>
</html>
```

</div>
</section>
