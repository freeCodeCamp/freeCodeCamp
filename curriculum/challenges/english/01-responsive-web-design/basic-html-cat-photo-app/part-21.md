---
id: 5dfb655eeacea3f48c6300b3
title: Part 21
challengeType: 0
isHidden: true
---

## Description
<section id='description'>

Nest the `img` you just added within a `<figure>` element. The `<figure>` element element represents self-contained content and will allow you to associate an image caption.

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: "Your `figure` element should have an opening tag. Opening tags have the following syntax: `<elementName>`."
    testString: assert( document.querySelector('figure') );
  - text: Your `figure` element should have a closing tag. Closing tags have a `/` just after the `<` character.
    testString: assert( code.match(/<\/figure\>/) );
  - text: There should be an `figure` element right above the `main` element's closing tag.
    testString: assert( document.querySelector('main').lastElementChild.nodeName === 'FIGURE' );
  - text: The Lasagna `img` element should be nested in the `figure` element.
    testString: assert( document.querySelector('figure > img') && document.querySelector('figure > img').getAttribute('src').toLowerCase() === 'https://bit.ly/fcc-lasagna');
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
      <img src="https://bit.ly/fcc-lasagna" alt="Lasagna">
    </main>
  </body>
</html>
```

</div>
</section>
