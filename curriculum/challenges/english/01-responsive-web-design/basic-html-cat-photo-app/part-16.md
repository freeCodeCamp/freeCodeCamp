---
id: 5dfa2527b521be39a3de7be2
title: Part 16
challengeType: 0
isBeta: true
---

## Description
<section id='description'>

We actually don't want the anchor element to link to catphotos.com. On the anchor tag, change the value of the `href` attribute to equal "#". 

Doing this will keep the text as a link, but it will no longer link to anything. This is often used to create a placeholder link or when changing the behavior of a link using JavaScript.

</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: See description above for instructions.
    testString: assert( document.querySelector('a').href.slice(-1) === '#' );

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
      <p>Click here to view more <a target="_blank" href="https://catphotos.com">cat photos</a>.</p>
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
      <p>Click here to view more <a target="_blank" href="#">cat photos</a>.</p>
      <img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back.">
    </main>
  </body>
</html>
```

</section>
