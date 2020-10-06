---
id: 5dfa30b9eacea3f48c6300ad
title: Part 14
challengeType: 0
---

## Description
<section id='description'>

Turn the image into a link by surrounding it with necessary element tags. Use `https://freecatphotoapp.com` as the anchor's `href` attribute value.

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: You should have an `img` element with an `src` value of `https://bit.ly/fcc-relaxing-cat`. You may have accidentally deleted it.
    testString: assert( document.querySelector('img') && document.querySelector('img').getAttribute('src') === 'https://bit.ly/fcc-relaxing-cat' );
  - text: "Your anchor (`a`) element should have an opening tag. Opening tags have this syntax: `<elementName>`."
    testString: assert( document.querySelectorAll('a').length >= 2 );
  - text: You should only add one opening anchor (`a`) tag. Please remove any extras.
    testString: assert( document.querySelectorAll('a').length === 2 );
  - text: Your anchor (`a`) element should have a closing tag. Closing tags have a `/` just after the `<` character.
    testString: assert( code.match(/<\/a>/g).length >= 2 );
  - text: You should only add one closing anchor (`a`) tag. Please remove any extras.
    testString: assert( code.match(/<\/a>/g).length === 2 );
  - text: Your anchor (`a`) element does not have an `href` attribute. Check that there is a space after the opening tag's name and/or there are spaces before all attribute names.
    testString: assert( document.querySelector('a').hasAttribute('href') );
  - text: Your anchor (`a`) element should link to `https://freecatphotoapp.com`. You have either omitted the URL or have a typo.
    testString: assert( document.querySelectorAll('a')[1].getAttribute('href') === 'https://freecatphotoapp.com' );
  - text: Your `img` element should be nested within the anchor (`a`) element. The entire `img` element should be inside the opening and closing tags of the anchor (`a`) element. 
    testString: assert( document.querySelector('img').parentNode.nodeName === "A" );

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
      <p>Click here to view more <a target="_blank" href="https://freecatphotoapp.com">cat photos</a>.</p>
      --fcc-editable-region--
      <img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back.">
      --fcc-editable-region--
    </main>
  </body>
</html>
```

</div>
</section>
