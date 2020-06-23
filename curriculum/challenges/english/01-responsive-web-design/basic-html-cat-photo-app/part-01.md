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
  - text: "Your <code>h1</code> element should have an opening tag. Hint: Opening tags have this syntax: <code>&lt;elementName&gt;</code>."
    testString: assert( document.querySelector('h1') );
  - text: "Your <code>h1</code> element should have a closing tag. Hint: <code>h1</code> elements have an opening and closing tag. Closing tags start with a <code>/</code>."
    testString: assert( code.match(/\<\/h1\>/) );
  - text: "Your <code>h1</code> element's text should be 'Hello World'. Hint: You have either omitted the text or have a typo."
    testString: assert( document.querySelector('h1').innerText.toLowerCase() === 'hello world' );
  - text: "Your <code>h1</code> element's text should be 'Hello World'. Hint: Only place the text 'Hello World' between the opening and closing <code>h1</code> tags."
    testString: assert( /hello\s+world/i.test(code) );

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<!DOCTYPE html>
<html>
  <body>
    <h1>Goodbye World</h1>
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
