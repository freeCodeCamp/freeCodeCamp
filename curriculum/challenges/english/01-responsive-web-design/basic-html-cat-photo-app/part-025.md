---
id: 5ef9b03c81a63668521804d1
title: Part 25
challengeType: 0
---

## Description
<section id='description'>

After the `figure` element, add another `h3` element with the text `Top 3 things cats hate:`.

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: There should be an `h3` element right above the second `section` element's closing tag. Make it has an opening and closing tag.
    testString: assert( document.querySelectorAll('main > section')[1].lastElementChild.nodeName === 'H3' && code.match(/<\/h3\>/g).length === 2);
  - text: The new `h3` element should have the text `Top 3 things cats hate:`. Make sure to include the colon at the end of the text.
    testString: assert( document.querySelectorAll('main > section')[1].lastElementChild.innerText.toLowerCase().replace(/\s+/g, ' ') === 'top 3 things cats hate:' );
  - text: There should be a `figure` above the new `h3` element. You may have accidentally deleted the `figure` element.
    testString: |
      const secondSectionLastElemNode = document.querySelectorAll('main > section')[1].lastElementChild;
      assert(
        secondSectionLastElemNode.nodeName === 'H3' && secondSectionLastElemNode.previousElementSibling.nodeName === 'FIGURE'
      );

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
