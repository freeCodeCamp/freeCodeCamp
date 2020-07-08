---
id: 5dfa30b9eacea3f48c6300ad
title: Part 15
challengeType: 0
isHidden: true
---

## Description
<section id='description'>

Make the image link to `https://www.freecodecamp.org/cat-photos` by surrounding it with opening and closing anchor (`a`) tags and using `https://www.freecodecamp.org/cat-photos` as the anchor's `href` attribute value.

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: You should have an `img` element with an `src` value of `https://bit.ly/fcc-relaxing-cat`. You may have accidentally deleted it.
    testString: assert( document.querySelector('img') && document.querySelector('img').getAttribute('src') === 'https://bit.ly/fcc-relaxing-cat' );
  - text: "Your anchor (`a`) element should have an opening tag. Opening tags have this syntax: `<elementName>`."
    testString: assert( document.querySelector('a') );
  - text: Your anchor (`a`) element should have a closing tag. Closing tags have a `/` just after the `<` character.
    testString: assert( code.match(/<\/a>/) );
  - text: Your anchor (`a`) element should have an `href` value of `https://www.freecodecamp.org/cat-photos`.
    testString: assert( document.querySelector('a').getAttribute('href') === 'https://www.freecodecamp.org/cat-photos' );
  - text: Your `img` element should be nested within the anchor (`a`) element. The entire `img` element should be inside the opening and closing tags of the anchor (`a`) element. 
    testString: assert( document.querySelector('img').parentNode.nodeName === "A" );

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
      <p>Click here to view more <a target="_blank" href="https://www.freecodecamp.org/cat-photos">cat photos</a>.</p>
      --fcc-editable-region--
      <img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back.">
      --fcc-editable-region--
    </main>
  </body>
</html>
```

</div>
</section>
