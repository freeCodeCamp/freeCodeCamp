---
id: 5dfa2527b521be39a3de7be2
title: Part 14
challengeType: 0
isHidden: true
---

## Description
<section id='description'>

What if you didn't want the anchor element to link to anything? You could change the value of the `href` attribute to `#`. This is often used to create a placeholder link or when changing the behavior of a link using JavaScript. 

Change the value of the `href` attribute to be `#` for the `cat photo` link.

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your `p` element should have a nested anchor (`a`) element with the text `cat photos`. You may have deleted it or have a typo.
    testString: const anchor = $('p > a'); assert(anchor.length && anchor[0].innerText.toLowerCase().replace(/\s+/g, ' ') === 'cat photos');
  - text: Your `p` element should not have more than one nested anchor (`a`) element. Remove the extra anchor elements.
    testString: assert($('p > a').length < 2);
  - text: Your anchor (`a`) element's `href` attribute should be `#`. It either does not have an `href` attribute or it is not set to a non-blank value. Check that there is a space after the opening tag's name and/or there are spaces before all attribute names.
    testString: assert( $('p > a')[0].getAttribute('href') === '#' );

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
      --fcc-editable-region--
      <p>Click here to view more <a target="_blank" href="https://catphotos.com">cat photos</a>.</p>
      --fcc-editable-region--
      <img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back.">
    </main>
  </body>
</html>
```

</div>
</section>
