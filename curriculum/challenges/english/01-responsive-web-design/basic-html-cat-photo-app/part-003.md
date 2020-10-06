---
id: 5dc17d3bf86c76b9248c6eb4
title: Part 3
challengeType: 0
---

## Description
<section id='description'>

Paragraph (`p`) elements are used to create paragraph text on websites. 

Create a paragraph (`p`) element below your `h2` element, and give it the text `Click here to view more cat photos.`

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: "Your `p` element should have an opening tag. Opening tags have the following syntax: `<elementName>`."
    testString: assert( document.querySelector('p') );
  - text: Your `p` element should have a closing tag. Closing tags have a `/` just after the `<` character.
    testString: assert( code.match(/<\/p\>/) );
  - text: Your `p` element's text should be `Click here to view more cat photos.` You have either omitted the text or have a typo.
    testString: const extraSpacesRemoved = document.querySelector('p').innerText.replace(/\s+/g, ' '); assert( extraSpacesRemoved.match(/click here to view more cat photos\.?$/i) );
  - text: Your `p` element should be below the `h2` element. You have them in the wrong order.
    testString: const collection = [...document.querySelectorAll('h2,p')].map(node => node.nodeName); assert( collection.indexOf('H2') < collection.indexOf('P') );

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<html>
  <body>
    <h1>CatPhotoApp</h1>
    --fcc-editable-region--
    <h2>Cat Photos</h2>
    --fcc-editable-region--
  </body>
</html>
```

</div>
</section>
