---
id: 5dfa30b9eacea3f48c6300ad
title: Part 15
challengeType: 0
isHidden: true
---

## Description
<section id='description'>

Make the image into a link by adding `<a href="#">` before the `img` tag and `</a>` after the image tag.

</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: You should have an `img` element with an `src` value of `https://bit.ly/fcc-relaxing-cat`.  You may have accidentally deleted it.
    testString: "assert( document.querySelector('img') && document.querySelector('img').getAttribute('src') === 'https://bit.ly/fcc-relaxing-cat' );"
  - text: "Your anchor (`a`) element should have an opening tag. Opening tags have the following syntax: `<elementName>`."
    testString: assert( document.querySelector('a') );
  - text: "Your anchor (`a`) element should have a closing tag. Closing tags have a `/` just after the `<` character."
    testString: assert( code.match(/<\/a>/) );
  - text: Your anchor (`a`) element should have an `href` value of `#`.
    testString: "assert( document.querySelector('a').getAttribute('href') === '#' );"
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
      <p>Click here to view more <a target="_blank" href="#">cat photos</a>.</p>
      <img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back.">
    </main>
  </body>
</html>
```

</div>
</section>
