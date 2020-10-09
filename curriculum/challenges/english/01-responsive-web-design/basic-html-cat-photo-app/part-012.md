---
id: 5dfa22d1b521be39a3de7be0
title: Part 12
challengeType: 0
---

## Description
<section id='description'>

Turn the words `cat photos` located inside `p` element into a link by replacing the words with the anchor element added previously. The `p` element should show the same text in the browser, but the words `cat photos` should now be a link. There should only be one link showing in the app.

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should only contain one anchor (`a`) element. Remove any extra anchor elements.
    testString: assert( document.querySelectorAll('a').length === 1 );
  - text: Your anchor (`a`) element should be nested within the `p` element.
    testString: assert( $('p > a').length);
  - text: The link's text should be `cat photos`. You have either omitted the text or have a typo.
    testString: const nestedAnchor = $('p > a')[0];
      assert( 
        nestedAnchor.getAttribute('href') === 'https://freecatphotoapp.com' &&
        nestedAnchor.innerText.toLowerCase().replace(/\s+/g, ' ') === 'cat photos'
      );
  - text: After nesting the anchor (`a`) element, the only `p` element content visible in the browser should be `Click here to view more cat photos.` Double check the text, spacing, or punctuation of both the `p` and nested anchor element.
    testString: |
      const pText = document.querySelector('p').innerText.toLowerCase().replace(/\s+/g, ' ');
      assert( pText.match(/click here to view more cat photos\.?$/) );

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
      <h2>Cat Photos</h2>
      <!-- TODO: Add link to cat photos -->
      --fcc-editable-region--
      <p>Click here to view more cat photos.</p>
      <a href="https://freecatphotoapp.com">cat photos</a>
      --fcc-editable-region--
      <img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back.">
    </main>
  </body>
</html>
```

</div>
</section>
