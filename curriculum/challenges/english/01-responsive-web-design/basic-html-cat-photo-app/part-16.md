---
id: 5dfa3589eacea3f48c6300ae
title: Part 16
challengeType: 0
isHidden: true
---

## Description
<section id='description'>

Time for a new section of the page. Within the `main` element, add a new `h2` element with the text `Cat Lists`.  It should appear after the linked image.

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: "Your `h2` element should have an opening tag. Opening tags have this syntax: `<elementName>`."
    testString: assert( document.querySelectorAll('h2').length === 2 );
  - text: "Your `h2` element should have a closing tag. Closing tags have a `/` just after the `<` character."
    testString: assert( code.match(/<\/h2\>/g).length === 2 );
  - text: Your second `h2` element should be right above the `main` element's closing tag. It is not in the correct position.
    testString: assert( document.querySelector('main').lastElementChild.nodeName === 'H2' );
  - text: The second `h2` element should have the text `Cat Lists`. You have either omitted the text or have a typo.
    testString: assert( document.querySelector('main').lastElementChild.innerText.toLowerCase() ===  'cat lists');

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
      --fcc-editable-region--
      <a href="https://www.freecodecamp.org/cat-photos"><img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>
    </main>
    --fcc-editable-region--
  </body>
</html>
```

</div>
</section>
