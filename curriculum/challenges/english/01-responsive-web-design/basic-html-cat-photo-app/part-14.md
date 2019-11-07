---
id: 5dfa22d1b521be39a3de7be0
title: Part 14
challengeType: 0
isBeta: true
---

## Description
<section id='description'>

Modify your code so that the anchor element you just added is nested within the paragraph element. The paragraph element should contain the same text, but the words 'cat photos' should now be a link. 

Here is an example of an anchor element nested within a paragraph: `<p>Here is a <a href="http://freecodecamp.org">link to freecodecamp.org</a>.</p>`

</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: See description above for instructions.
    testString: assert( code.replace(/\s/g, '').includes('<p>Clickheretoviewmore<ahref="https://catphotos.com">catphotos</a>.</p>') );

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
      <a href="https://catphotos.com">cat photos</a>
      <img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back.">
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
      <p>Click here to view more <a href="https://catphotos.com">cat photos</a>.</p>
      <img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back.">
    </main>
  </body>
</html>
```

</section>
