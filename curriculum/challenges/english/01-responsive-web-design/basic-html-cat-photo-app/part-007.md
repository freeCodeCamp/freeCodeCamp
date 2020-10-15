---
id: 5dc23f9bf86c76b9248c6eba
title: Part 7
challengeType: 0
---

## Description
<section id='description'>

You can add images to your website by using the `img` element. `img` elements have an opening tag without a closing tag. A tag for an element without  a closing tag is known as a <dfn>self-closing tag</dfn>. 

Add an `img` element below the `p` element. At this point, no image will show up in the browser.

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: "Your `img` element should have an opening tag. Opening tags have this syntax: `<elementName>`."
    testString: assert( document.querySelector('img') );
  - text: Your `img` element should not have a closing tag. Closing tags have a `/` just after the `<` character.
    testString: assert( !code.match(/<\/img\>/) );
  - text: You should only have one `img` element. Remove any extras.
    testString: assert( document.querySelectorAll('img').length === 1 );
  - text: Your `img` element should be below the `p` element. You have them in the wrong order.
    testString: const collection = [...document.querySelectorAll('p,img')].map(node => node.nodeName); assert( collection.indexOf('P') < collection.indexOf('IMG') );

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
    </main>
  </body>
</html>
```

</div>
</section>
