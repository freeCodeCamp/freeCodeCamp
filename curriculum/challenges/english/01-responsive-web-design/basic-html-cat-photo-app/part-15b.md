---
id: 5f07c98cdb9413cbd4b16750
title: Part 15b
challengeType: 0
isHidden: true
---

## Description
<section id='description'>

It is time to add a new section. Add a second `section` element below the existing `section` element.

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: "Your `section` element should have an opening tag. Opening tags have this syntax: `<elementName>`."
    testString: assert( document.querySelectorAll('section').length >= 2 );
  - text: You should only add one opening `section` tag. Please remove any extras.
    testString: assert( document.querySelectorAll('section').length === 2 );
  - text: Your `section` element should have a closing tag. Closing tags have a `/` just after the `<` character.
    testString: assert( code.match(/<\/section>/g).length >= 2 );
  - text: You should only add one closing `section`) tag. Please remove any extras.
    testString: assert( code.match(/<\/section>/g).length === 2 );
  - text: Both `section` elements should be between the opening and closing tags of the `main` element.
    testString: |
      const childrenOfMain = [ ...document.querySelector('main').children ];
      const foundElems = childrenOfMain.filter(child => {
        return child.nodeName === 'SECTION';
      });
      assert( childrenOfMain.length === 2 );

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
      <section>
        <h2>Cat Photos</h2>
        <!-- TODO: Add link to cat photos -->
        <p>Click here to view more <a target="_blank" href="https://www.freecodecamp.org/cat-photos">cat photos</a>.</p>
        <a href="https://www.freecodecamp.org/cat-photos"><img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>
        </section>
    </main>
    --fcc-editable-region--
  </body>
</html>
```

</div>
</section>
