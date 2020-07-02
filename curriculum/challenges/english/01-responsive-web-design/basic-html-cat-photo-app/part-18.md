---
id: 5dfa37b9eacea3f48c6300b0
title: Part 18
challengeType: 0
isHidden: true
---

## Description
<section id='description'>

After the paragraph tag, add an opening tag for an unordered list, `<ul>`. On the next line, add a closing tag, `</ul>`.

The unordered list will not appear in the browser until content is added.

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'Your `ul` element should have an opening tag. Opening tags have this syntax: `<elementName>`.'
    testString: assert( document.querySelector('ul') );
  - text: Your `ul` element should have a closing tag. Closing tags have a `/` just after the `<` character.
    testString: assert( code.match(/<\/ul>/) );
  - text: The `ul` element should be above the `main` element's closing tag.
    testString: assert( document.querySelector('main').lastElementChild.nodeName === 'UL' );

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
    </main>
  </body>
</html>
```

</div>
</section>
