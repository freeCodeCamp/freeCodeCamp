---
id: 5dc2385ff86c76b9248c6eb7
title: Part 06
challengeType: 0
isBeta: true
---

## Description
<section id='description'>

HTML5 has tags that identify different content areas. These tags make your HTML easier to read, and also help with Search Engine Optimization (SEO) and accessibility. 

Identify the main section of this page by adding a `<main>` opening tag after the h2 element, and a `</main>` closing tag after the `p` element.

</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: "Your <code>main</code> element should have an opening tag. Opening tags have this syntax: <code>&lt;elementName&gt;</code>."
    testString: assert( document.querySelector('main') );
  - text: "Your <code>main</code> element should have a closing tag. Closing tags have a <code>/</code> just after the <code>&lt;</code> character."
    testString: assert( code.match(/\<\/main\>/) );
  - text: "Your <code>main</code> element's opening tag should be below the <code>h2</code> element. You have them in the wrong order."
    testString: const collection = [...document.querySelectorAll('main,h2')].map(node => node.nodeName); assert( collection.indexOf('H2') < collection.indexOf('MAIN') );
  - text: "Your <code>main</code> element's closing tag should be below the <code>p</code> element. You have them in the wrong order."
    testString: const mainNode = document.querySelector('main'); const pNode = document.querySelector('p'); assert( mainNode.contains(pNode) && pNode.textContent.toLowerCase().match(/click here to view more cat photos/) );

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
    <!-- TODO: Add link to cat photos -->
    <p>Click here to view more cat photos.</p>
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
    <!-- TODO: Add link to cat photos -->
    <p>Click here to view more cat photos.</p>
    </main>
  </body>
</html>
```

</section>
