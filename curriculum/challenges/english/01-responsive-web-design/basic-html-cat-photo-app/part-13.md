---
id: 5dfa2407b521be39a3de7be1
title: Part 13
challengeType: 0
isHidden: true
---

## Description
<section id='description'>

Add the `target` attribute with the value `_blank` to the anchor tag so that the link opens in a new tab. 

For example, `<a target="_blank" href="http://freecodecamp.org">learn to code</a>`.

</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your anchor (`a`) element does not have a `target` attribute. You have either omitted the attribute or have a typo.
    testString: const targetVal = document.querySelector('a').getAttribute('target'); assert( targetVal || targetVal === '' );
  - text: The value of the `target` attribute should '_blank'. You have either omitted the value or have a typo. Remember that attribute values should be surrounded with quotes.
    testString: assert( document.querySelector('a').getAttribute('target') === '_blank' );

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
      <p>Click here to view more <a href="https://catphotos.com">cat photos</a>.</p>
      <img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back.">
    </main>
  </body>
</html>
```

</div>
</section>
