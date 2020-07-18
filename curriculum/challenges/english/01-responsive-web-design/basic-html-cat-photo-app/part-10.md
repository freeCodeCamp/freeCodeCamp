---
id: 5dc24614f86c76b9248c6ebd
title: Part 10
challengeType: 0
isHidden: true
---

## Description
<section id='description'>

You can add a link to the app by using an anchor (`a`) element. For example, `<a href="https://www.freecodecamp.org"></a>` is an anchor (`a`) element that links to `freecodecamp.org`. 

After the `p` element, add an anchor (`a`) element with an `href` attribute that links to a page on the Free Code Camp website located at `https://www.freecodecamp.org/cat-photos`. At this point, no link will show up in the browser.

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: "Your anchor (`a`) element should have an opening tag. Opening tags have this syntax: `<elementName>`."
    testString: assert( document.querySelector('a') );
  - text: "Your anchor (`a`) element should have a closing tag. Closing tags have a `/` just after the `<` character."
    testString: assert( code.match(/<\/a\>/) );
  - text: "Your anchor (`a`) element should be below the `p` element. You have them in the wrong order."
    testString: const collection = [...document.querySelectorAll('a, p')].map(node => node.nodeName); assert( collection.indexOf('P') < collection.indexOf('A') );
  - text: Your anchor (`a`) element does not have an `href` attribute. Check that there is a space after the opening tag's name and/or there are spaces before all attribute names.
    testString: assert( document.querySelector('a').hasAttribute('href') );
  - text: "Your anchor (`a`) element should link to `https://www.freecodecamp.org/cat-photos`. You have either omitted the URL or have a typo."
    testString: assert( document.querySelector('a').getAttribute('href') === 'https://www.freecodecamp.org/cat-photos' );
  - text: Although you have set the anchor ('a') element's `href` attribute to the correct link, it is recommended to always surround the value of an attribute with quotation marks.
    testString: assert( !/\<a\s+href\s*=\s*https:\/\/www.freecodecamp.org\/cat-photos/.test(code) );

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
      <p>Click here to view more cat photos.</p>
      --fcc-editable-region--
      <img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back.">
    </main>
  </body>
</html>
```

</div>
</section>
