---
id: 5dfb6a35eacea3f48c6300b4
title: Part 22
challengeType: 0
isHidden: true
---

## Description
<section id='description'>

Figure caption (`figcaption`) elements are used to add a caption to describe whatever is in the surrounding `figure` element. For example, `<figcaption>A cute cat</figcaption>` has the text `A cute cat`.

After the image nested in the `figure` element, add a `figcaption` element with the text `Cats love lasagna.`

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The Lasagna `img` element should be nested in the `figure` element.
    testString: assert( document.querySelector('figure > img') && document.querySelector('figure > img').getAttribute('src').toLowerCase() === 'https://bit.ly/fcc-lasagna');
  - text: "Your `figcaption` element should have an opening tag. Opening tags have the following syntax: `<elementName>`."
    testString: assert( document.querySelector('figcaption') );
  - text: Your `figcaption` element should have a closing tag. Closing tags have a `/` just after the `<` character.
    testString: assert( code.match(/<\/figcaption\>/) );
  - text: The `figcaption` element should be nested in the `figure` element.
    testString: assert( document.querySelector('figure > figcaption') && document.querySelector('figure > figcaption'));
  - text: The `figcaption` element nested in the `figure` element should be below the `img` element. You have them in the wrong order.
    testString: assert( document.querySelector('figcaption').previousElementSibling.nodeName === 'IMG');
  - text: Your `figcaption` element's text should be `Cats love lasagna.` You have either omitted the text or have a typo.
    testString: assert( document.querySelector('figcaption').innerText.match(/Cats love lasagna.?$/i) );
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
        --fcc-editable-region--
        <img src="https://bit.ly/fcc-lasagna" alt="A slice of lasagna on a plate.">
        --fcc-editable-region--
      </figure>
    </main>
  </body>
</html>
```

</div>
</section>
