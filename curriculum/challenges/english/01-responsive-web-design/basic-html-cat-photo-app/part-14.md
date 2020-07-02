---
id: 5dfa2527b521be39a3de7be2
title: Part 14
challengeType: 0
isHidden: true
---

## Description
<section id='description'>

If you didn't want the anchor element to link to catphotos.com? On the anchor tag, change the value of the `href` attribute to equal "#". 

Doing this will keep the text as a link, but it will no longer link to anything. This is often used to create a placeholder link or when changing the behavior of a link using JavaScript.

</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The value of the `target` attribute should `#`. You have either omitted the value or have a typo. Remember that attribute values should be surrounded with quotes.
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
    <h1>CatPhotoApp</h1>
    <main>
      <h2>Cat Photos</h2>
      <!-- TODO: Add link to cat photos -->
      <p>Click here to view more <a target="_blank" href="https://catphotos.com">cat photos</a>.</p>
      <img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back.">
    </main>
  </body>
</html>
```

</div>
</section>
