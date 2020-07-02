---
id: 5dfa3589eacea3f48c6300ae
title: Part 16
challengeType: 0
isHidden: true
---

## Description
<section id='description'>

Time for a new section of the page. 

Before the `</main>` closing tag, add a new `h2` element with the text "Cat Lists".

</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: You should now have two `h2` elements. The first one is `Cat Photos` and the last one should be right before the `main` element's closing tag.`element.
    testString: assert( document.querySelector('main').lastElementChild.nodeName === 'H2' );
  - text: The second `h2` element should have the text `Cat Lists`.
    testString: assert( document.querySelector('main').lastElementChild.innerText.replace(/\s/g,'').toLowerCase() ===  'catlists');

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
    </main>
  </body>
</html>
```

</div>
</section>
