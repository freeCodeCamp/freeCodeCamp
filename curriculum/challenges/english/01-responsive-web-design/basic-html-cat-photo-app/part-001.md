---
id: 5dc174fcf86c76b9248c6eb2
title: Part 1
challengeType: 0
---

## Description
<section id='description'>

HTML elements have opening tags like `<h1>` and closing tags like `</h1>`.

Find the `h1` element and change the text between its opening and closing tags to say `CatPhotoApp`.

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The text `CatPhotoApp` should be present in the code. You may want to check your spelling.
    testString: assert( code.match(/catphotoapp/i) );
  - text: 'Your `h1` element should have an opening tag. Opening tags have this syntax: `<elementName>`.'
    testString: assert( document.querySelector('h1') );
  - text: Your `h1` element should have a closing tag. Closing tags have a `/` just after the `<` character.
    testString: assert( code.match(/<\/h1\>/) );
  - text: You have more than one `h1` element. Remove the extra `h1` element.
    testString: assert( document.querySelectorAll('h1').length === 1 );
  - text: Your `h1` element's text should be `CatPhotoApp`. You have either omitted the text, have a typo, or it is not between the `h1` element's opening and closing tags.
    testString: assert( document.querySelector('h1').innerText.toLowerCase() === 'catphotoapp' );

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<html>
  <body>
    --fcc-editable-region--
    <h1>Hello World</h1>
    --fcc-editable-region--
  </body>
</html>
```

</div>
</section>
