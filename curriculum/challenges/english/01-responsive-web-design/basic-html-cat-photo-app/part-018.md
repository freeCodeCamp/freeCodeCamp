---
id: 5dfa371beacea3f48c6300af
title: Part 18
challengeType: 0
---

## Description
<section id='description'>

When you add a lower rank heading element to the page, it's implied that you're starting a new subsection.

After the last `h2` element of the second `section` element, add an `h3` element with the text `Things cats love:`.

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The second `section` element appears to be missing or does not have both an opening and closing tag.
    testString: assert( (document.querySelectorAll('main > section')[1] && code.match(/\<\/section>/g).length == 2) );
  - text: There should be an `h3` element right above the second `section` element's closing tag.
    testString: assert( document.querySelectorAll('main > section')[1].lastElementChild.nodeName === 'H3' );
  - text: The `h3` element right above the second `section` element's closing tag should have the text `Things cats love:`. Make sure to include the colon at the end of the text.
    testString: assert( document.querySelectorAll('main > section')[1].lastElementChild.innerText.toLowerCase().replace(/\s+/g, ' ') === 'things cats love:' );
  - text: There should be an `h2` element with the text `Cat Lists` above the last `h3` element that is nested in the last `section` element'. You may have accidentally deleted the `h2` element.
    testString: |
      const secondSectionLastElemNode = document.querySelectorAll('main > section')[1].lastElementChild;
      assert(
        secondSectionLastElemNode.nodeName === 'H3' && secondSectionLastElemNode.previousElementSibling.innerText.toLowerCase().replace(/\s+/g, ' ') === 'cat lists'
      );

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
        <h2>Cat Lists</h2>
      </section>
      --fcc-editable-region--
    </main>
  </body>
</html>
```

</div>
</section>
