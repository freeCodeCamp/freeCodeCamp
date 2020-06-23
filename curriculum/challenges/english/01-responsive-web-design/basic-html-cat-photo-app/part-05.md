---
id: 5dc23742f86c76b9248c6eb6
title: Part 05
challengeType: 0
isBeta: true
---

## Description
<section id='description'>

Now delete the `h1` element so we can simplify our view.

</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: See description above for instructions.
    testString: assert( !code.includes('<h1>Hello World</h1>') );

```

```yml
tests:
  - text: "You should remove the <code>h1</code> element's opening tag. Opening tags have this syntax: <code>&lt;elementName&gt;</code>."
    testString: assert( !document.querySelector('h1') );
  - text: "You should remove the <code>h1</code> element's closing tag. Closing tags have a <code>/</code> just after the <code>&lt;</code> character."
    testString: assert( !code.match(/\<\/h1\>/) );
  - text: "You should also remove the text 'Hello World'."
    testString: const noSpaces = code.replace(/\s/g, ''); assert( !noSpaces.toLowerCase().includes('helloworld') );

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<!DOCTYPE html>
<html>
  <body>
    <h1>Hello World</h1>
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
    <!-- TODO: Add link to cat photos -->
    <p>Click here to view more cat photos.</p>
  </body>
</html>
```

</section>
