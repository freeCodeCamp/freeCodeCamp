---
id: 5dc23ecef86c76b9248c6eb9
title: Part 08
challengeType: 0
isBeta: true
---

## Description
<section id='description'>

This page will have a few different section. 

Indicate the first section by adding an `h3` element with the text "Cat Photos" above the comment.

</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: "Your <code>h3</code> element should have an opening tag. Opening tags have this syntax: <code>&lt;elementName&gt;</code>."
    testString: assert( document.querySelector('h3') );
  - text: "Your <code>h3</code> element should have a closing tag. Closing tags have a <code>/</code> just after the <code>&lt;</code> character."
    testString: assert( code.match(/\<\/h3\>/) );
  - text: "Your <code>h3</code> element's text should be 'Cat Photos'. You have either omitted the text or have a typo."
    testString: assert( document.querySelector('h3').innerText.toLowerCase() === 'cat photos' );
  - text: "Your <code>h3</code> element should be above the comment. You have them in the wrong order."
    testString: const noSpaces = code.replace(/\s/g, ''); assert( noSpaces.match(/\<h3\>catphotos\<\/h3\>\<\!\-\-todo:addlinktocatphotos\-\-\>/i) );

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
    </main>
  </body>
</html>
```

</section>
