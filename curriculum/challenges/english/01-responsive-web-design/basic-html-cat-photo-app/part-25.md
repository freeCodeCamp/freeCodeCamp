---
id: 5ef9b03c81a63668521804d2
title: Part 25
challengeType: 0
isHidden: true
---

## Description
<section id='description'>

The code for an ordered list is similar to an unordered list, except the opening / closing tags look like this: `<ol> </ol>`. An ordered list is numbered when displayed. 

After the final `p` element, add an ordered list with these three list items: `flea treatment`, `thunder` and `other cats`.

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'Your `ol` element should have an opening tag. Opening tags have this syntax: `<elementName>`.'
    testString: assert( document.querySelector('ol') );
  - text: Your `ol` element should have a closing tag. Closing tags have a `/` just after the `<` character.
    testString: assert( code.match(/<\/ol>/) );
  - text: The `ol` element should be above the `main` element's closing tag.
    testString: assert( document.querySelector('main').lastElementChild.nodeName === 'OL' );
  - text: The three `li` elements should be nested inside the `ol` element.
    testString: assert( [ ...document.querySelectorAll('li') ].filter(item => item.parentNode.nodeName === 'OL').length === 3 );
  - text: You should have 3 `li` elements with the text `flea treatment`, `thunder` and `other cats` in any order.
    testString: assert.deepStrictEqual( [ ...document.querySelectorAll('li') ].filter(item => item.parentNode.nodeName === 'OL').map(item => item.innerText.toLowerCase()).sort((a, b) => a.localeCompare(b)), ["flea treatment", "other cats", "thunder"] );

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
        <figcaption>Cats <em>love</em> lasagna.</figcaption>  
      </figure>
      <p>Top 3 things cats hate:</p>
    </main>
  </body>
</html>
```

</div>
</section>
