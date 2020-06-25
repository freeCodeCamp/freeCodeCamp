---
id: 5dc23f9bf86c76b9248c6eba
title: Part 09
challengeType: 0
isBeta: true
---

## Description
<section id='description'>

You can add images to your website by using the `img` element.

Add an `<img>` tag below the paragraph element. You should take note that `img` elements do not need a closing tag.  The tag and elements without a closing tags is known as a <dfn>self-closing tag</dfn>.  At this point, the image element will not show up in the browser.

</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: "Your `img` element should have an opening tag. Opening tags have the following syntax: `<elementName>`."
    testString: assert( document.querySelector('img') );
  - text: Your `img` element should not have a closing tag. Closing tags have a `/` just after the `<` character.
    testString: assert( !code.match(/\<\/img\>/) );
  - text: Your `img` element should be below the `p` element. You have them in the wrong order.
    testString: const collection = [...document.querySelectorAll('p,img')].map(node => node.nodeName); assert( collection.indexOf('P') < collection.indexOf('IMG') );

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<!DOCTYPE html>
<html>
  <body>
    <h2>CatPhotoApp</h2>
    <main>
      <!-- TODO: Add link to cat photos -->
      <p>Click here to view more cat photos.</p>
    </main>
  </body>
</html>
```

</div>
</section>

## Solution
<section id='solution'>

```html
<!DOCTYPE html>
<html>
  <body>
    <h2>CatPhotoApp</h2>
    <main>
      <h3>Cat Photos</h3>
      <!-- TODO: Add link to cat photos -->
      <p>Click here to view more cat photos.</p>
      <img>
    </main>
  </body>
</html>
```

</section>
