---
id: 5ef9b03c81a63668521804d5
title: Part 33
challengeType: 0
---

## Description
<section id='description'>

Inside the third `section` element add an `h2` tag with the text `Cat Form`.

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: "Unable to find the third `section` element. You may have accidentally deleted it or the opening tag or closing tag."
    testString: |
      assert(
        document.querySelectorAll('section').length === 3 &&
        code.match(/<\/section>/g).length === 3
      );
  - text: Your `h2` element should have an opening tag and closing tag. You may be missing one or both of the required tags.
    testString: |
      assert(
        document.querySelectorAll('h2').length >= 3 &&
        code.match(/<\/h2>/g).length >= 3
      );
  - text: You should only add one `h2` element. Please remove any extras.
    testString: assert( document.querySelectorAll('h2').length === 3 );
  - text: The new `h2` element should be located right above the third `section` element's closing tag.
    testString: |
      const thirdSection = document.querySelectorAll('section')[2];
      assert( thirdSection.lastElementChild.nodeName === 'H2' );
  - text: Your `h2` element's text should be `Cat Form`.
    testString: |
      const thirdSection = document.querySelectorAll('section')[2];
      assert( thirdSection.querySelector('h2').innerText.toLowerCase().replace(/\s+/g, ' ') === 'cat form' );

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
      --fcc-editable-region--
      <section>
      </section>
      --fcc-editable-region--
    </main>
  </body>
</html>
```

</div>
</section>
