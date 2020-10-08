---
id: 5dfa2407b521be39a3de7be1
title: Part 13
challengeType: 0
---

## Description
<section id='description'>

Add a `target` attribute with the value `_blank` to the anchor (`a`) element's opening tag, so that the link opens in a new tab. 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your `p` element should have a nested anchor (`a`) element with the text `cat photos`. You may have deleted it or have a typo.
    testString: |
      const anchor = $('p > a');
      assert(anchor.length && anchor[0].innerText.toLowerCase().replace(/\s+/g, ' ') === 'cat photos');
  - text: Your anchor (`a`) element does not have a `target` attribute. Check that there is a space after the opening tag's name and/or there are spaces before all attribute names.
    testString: assert( document.querySelector('a').hasAttribute('target') );
  - text: The value of the `target` attribute should '_blank'. You have either omitted the value or have a typo. Remember that attribute values should be surrounded with quotation marks.
    testString: assert( document.querySelector('a').getAttribute('target') === '_blank' );

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
      <p>Click here to view more <a href="https://freecatphotoapp.com">cat photos</a>.</p>
      --fcc-editable-region--
      <img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back.">
    </main>
  </body>
</html>
```

</div>
</section>
