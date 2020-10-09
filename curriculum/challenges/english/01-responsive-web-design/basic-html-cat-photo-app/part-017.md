---
id: 5dfa3589eacea3f48c6300ae
title: Part 17
challengeType: 0
---

## Description
<section id='description'>

Within the second `section` element, add a new `h2` element with the text `Cat Lists`.

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: "Your `section` element should have an opening tag. Opening tags have this syntax: `<elementName>`."
    testString: |
      assert(
        document.querySelectorAll('section').length === 2 &&
        code.match(/<\/section>/g).length === 2
      );
  - text: "Your `h2` element should have an opening tag. Opening tags have this syntax: `<elementName>`."
    testString: assert( document.querySelectorAll('h2').length === 2 );
  - text: "Your `h2` element should have a closing tag. Closing tags have a `/` just after the `<` character."
    testString: assert( code.match(/<\/h2\>/g).length === 2 );
  - text: Your second `h2` element should be right above the second `section` element's closing tag. It is not in the correct position.
    testString: |
      const secondSection = document.querySelectorAll('section')[1];
      assert( secondSection.lastElementChild.nodeName === 'H2' );
  - text: The second `h2` element should have the text `Cat Lists`. You have either omitted the text or have a typo.
    testString: assert( document.querySelectorAll('main > section')[1].lastElementChild.innerText.toLowerCase() ===  'cat lists');

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
