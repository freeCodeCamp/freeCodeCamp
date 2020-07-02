---
id: 5dfa371beacea3f48c6300af
title: Part 17
challengeType: 0
isHidden: true
---

## Description
<section id='description'>

After the last `h2` element, add a paragraph element with the text `Things cats love:`.

</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: There should be a `p` element right above the `main` element's closing tag.
    testString: assert( document.querySelector('main').lastElementChild.nodeName === 'P' );
  - text: The `p` element right above the `main` element's closing tag should have the text `Things cats love:`. Make sure to include the colon at the end of the text.
    testString: assert( document.querySelector('main').lastElementChild.innerText.toLowerCase().replace(/\s/g, '') === 'thingscatslove:' );
  - text: There should be an `h2` element with the text `Cat Lists`. You may have accidentally deleted the `h2` element.
    testString: |
      const catListH2 = [ ...document.querySelectorAll('h2') ].filter(h2 => {
        return h2.innerText.toLowerCase().replace(/\s/g, '') === 'catlists'
      });
      assert( catListH2.length === 1);
  - text: There should be an `h2` element with the text `Cat Lists` above the last `p` element that is nested in the `main` element. You may have accidentally deleted the `h2` element.
    testString: |
      const lastMainElemNode = document.querySelector('main').lastElementChild;
      assert(
        lastMainElemNode.nodeName === 'P' && lastMainElemNode.previousElementSibling.innerText.toLowerCase().replace(/\s/g, '') === 'catlists'
      );

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
    </main>
  </body>
</html>
```

</div>
</section>
