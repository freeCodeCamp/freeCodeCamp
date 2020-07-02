---
id: 5dc24614f86c76b9248c6ebd
title: Part 10
challengeType: 0
isHidden: true
---

## Description
<section id='description'>

After the paragraph element, add an anchor (`a`) element with an `href` attribute that links to the `catphotos.com` website at `https://catphotos.com`.

For example, `<a href="https://www.freecodecamp.org"></a>` is an anchor element that links to `freecodecamp.org`. At this point the anchor element will not show up in the browser.

</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: "Your anchor (`a`) element should have an opening tag. Opening tags have the following syntax: `<elementName>`."
    testString: assert( document.querySelector('a') );
  - text: "Your anchor (`a`) element should have a closing tag. Closing tags have a `/` just after the `<` character."
    testString: assert( code.match(/<\/a\>/) );
  - text: "Your anchor (`a`) element does not have an `href` attribute. You have either omitted the attribute or have a typo."
    testString: const hrefVal = document.querySelector('a').getAttribute('href'); assert( hrefVal || hrefVal === '' );
  - text: "Your anchor (`a`) element should link to `https://catphotos.com`. You have either omitted the URL or have a typo."
    testString: assert( document.querySelector('a').getAttribute('href') === 'https://catphotos.com' );
  - text: "Your anchor (`a`) element should be below the `p` element. You have them in the wrong order."
    testString: const collection = [...document.querySelectorAll('a, p')].map(node => node.nodeName); assert( collection.indexOf('P') < collection.indexOf('A') );

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
      <p>Click here to view more cat photos.</p>
      <img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back.">
    </main>
  </body>
</html>
```

</div>
</section>
