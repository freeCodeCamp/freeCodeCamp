---
id: 5dc174fcf86c76b9248c6eb2
title: Part 01
challengeType: 0
isBeta: true
---

## Description
<section id='description'>

HTML elements have opening tags like `<h1>` and closing tags like `</h1>`.

Find the `h1` element and change the text between its opening and closing tags to say "Hello World".

</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'Your `h1` element should have an opening tag. Opening tags have this syntax: `<elementName>`.'
    testString: assert( document.querySelector('h1') );
  - text: Your `h1` element should have a closing tag. Closing tags have a `/` just after the `<` character.
    testString: assert( code.match(/\<\/h1\>/) );
  - text: Your `h1` element's text should be 'Hello World'. You have either omitted the text or have a typo.
    testString: assert( document.querySelector('h1').innerText.toLowerCase() === 'hello world' );

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<!DOCTYPE html>
<html>
  <body>
    --fcc-editable-start--
    <h1>Goodbye World</h1>
    --fcc-editable-end--
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
    <h1>Hello World</h1>
  </body>
</html>
```

</section>
