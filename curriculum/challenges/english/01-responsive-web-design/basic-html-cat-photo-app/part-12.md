---
id: 5dfa22d1b521be39a3de7be0
title: Part 12
challengeType: 0
isHidden: true
---

## Description
<section id='description'>

Modify your code so that the anchor element you just added is nested within the paragraph element. The paragraph element should contain the same text, but the words `cat photos` should now be a link. 

Here is an example of an anchor element nested within a paragraph: `<p>Here is a <a href="http://freecodecamp.org">link to freecodecamp.org</a>.</p>`.

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should only contain one anchor (`a`) element element. Nest the anchor element you added into the `p` element.
    testString: assert( document.querySelectorAll('a').length === 1 );
  - text: Your anchor (`a`) element should be nested within the `p` element. Replace the text `cat photos` in the `p` element with your anchor element.
    testString: const nestedAnchor = document.querySelector('p').querySelector('a'); 
      assert( 
        nestedAnchor.getAttribute('href') === 'https://catphotos.com' &&
        nestedAnchor.innerText.toLowerCase().replace(/\s/g, '') === 'catphotos'
      );
  - text: After nesting the anchor (`a`) element, the `p` element's text should still be `Click here to view more cat photos.` Double check the text, spacing, or punctuation of both the `p` and nested anchor element.
    testString: const pText = document.querySelector('p').innerText.toLowerCase().replace(/\s/g, ''); assert( pText.includes('clickheretoviewmorecatphotos') );

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
      <p>Click here to view more cat photos.</p>
      <a href="https://catphotos.com">cat photos</a>
      <img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back.">
    </main>
  </body>
</html>
```

</div>
</section>
