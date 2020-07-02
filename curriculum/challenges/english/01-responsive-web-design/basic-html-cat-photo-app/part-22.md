---
id: 5dfb6a35eacea3f48c6300b4
title: Part 22
challengeType: 0
isHidden: true
---

## Description
<section id='description'>

After the `img` tag that is nested in the `figure` element, add a `<figcaption>` element with the text `Cats love lasagna.`

For example, `<figcaption>cat</figcaption>` has the text "cat".

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: There should be a `figure` element right above the `main` element's closing tag.
    testString: assert( document.querySelector('main').lastElementChild.nodeName === 'FIGURE' );
  - text: The Lasagna `img` element should be nested in the `figure` element.
    testString: assert( document.querySelector('figure > img') && document.querySelector('figure > img').getAttribute('src').toLowerCase() === 'https://bit.ly/fcc-lasagna');
  - text: "Your `figure` element should have an opening tag. Opening tags have the following syntax: `<elementName>`."
    testString: assert( document.querySelector('figure') );
  - text: Your `figure` element should have a closing tag. Closing tags have a `/` just after the `<` character.
    testString: assert( code.match(/<\/figure\>/) );
  - text: "Your `figcaption` element should have an opening tag. Opening tags have the following syntax: `<elementName>`."
    testString: assert( document.querySelector('figcaption') );
  - text: Your `figcaption` element should have a closing tag. Closing tags have a `/` just after the `<` character.
    testString: assert( code.match(/<\/figcaption\>/) );
  - text: The `figcaption` element should be nested in the `figure` element.
    testString: assert( document.querySelector('figure > figcaption') && document.querySelector('figure > figcaption'));
  - text: The `figcaption` element nested in the `figure` element should be below the `img` element. You have the `img` element and the `figcaption` element in the wrong order.
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
      </figure>
    </main>
  </body>
</html>
```

</div>
</section>
