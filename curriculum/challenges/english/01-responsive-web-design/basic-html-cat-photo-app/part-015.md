---
id: 5f07be6ef7412fbad0c5626b
title: Part 15
challengeType: 0
---

## Description
<section id='description'>

Before adding any new content, you should make use of a `section` element to separate the cat photos content from the future content.

Take all the elements currently located within the `main` element and nest them in a `section` element.

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: "Your `section` element should have an opening tag. Opening tags have the following syntax: `<elementName>`."
    testString: assert( document.querySelector('section') );
  - text: Your `section` element should have a closing tag. Closing tags have a `/` just after the `<` character.
    testString: assert( code.match(/<\/section\>/) );
  - text: The entire `section` element should be between the opening and closing tags of the `main` element.
    testString: assert( document.querySelector('section').parentNode.nodeName === "MAIN" );
  - text: The existing `h2`, comment, `p` element, and anchor (`a`) element should be between the opening and closing tags of the `section` element.
    testString: |
      const childrenOfSection = [ ...document.querySelector('section').childNodes ];
      const foundElems = childrenOfSection.filter(child => {
        return ['H2', 'A', 'P'].includes(child.nodeName);
      });
      assert( foundElems.length === 3 );

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
    <main>
      <h2>Cat Photos</h2>
      <!-- TODO: Add link to cat photos -->
      <p>Click here to view more <a target="_blank" href="https://freecatphotoapp.com">cat photos</a>.</p>
      <a href="https://freecatphotoapp.com"><img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>
    </main>
    --fcc-editable-region--
  </body>
</html>
```

</div>
</section>
