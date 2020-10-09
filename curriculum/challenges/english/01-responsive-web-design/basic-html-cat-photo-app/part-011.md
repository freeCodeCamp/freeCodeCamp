---
id: 5ddbd81294d8ddc1510a8e56
title: Part 11
challengeType: 0
---

## Description
<section id='description'>

A link's text must be placed between the opening and closing tags of an anchor (`a`) element. For example, `<a href="https://www.freecodecamp.org">click here to go to freeCodeCamp.org</a>` is a link with the text `click here to go to freeCodeCamp.org`.

Add the anchor text `cat photos` to the anchor element. This will become the link's text.

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: "Your anchor (`a`) element should have an opening tag. Opening tags have this syntax: `<elementName>`."
    testString: assert( document.querySelector('a') );
  - text: "Your anchor (`a`) element should have a closing tag. Closing tags have a `/` just after the `<` character."
    testString: assert( code.match(/<\/a\>/) );
  - text: Your anchor (`a`) element's text should be `cat photos`. Make sure to put the link text between the anchor (`a`) element's opening tag and closing tag.
    testString: assert( document.querySelector('a').innerText.toLowerCase().replace(/\s+/g, ' ') === 'cat photos' );

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<html>
  <body>
    <h1>CatPhotoApp</h1>
    <main>
      <h2>Cat Photos</h2>
      <!-- TODO: Add link to cat photos -->
      <p>Click here to view more cat photos.</p>
      --fcc-editable-region--
      <a href="https://freecatphotoapp.com"></a>
      --fcc-editable-region--
      <img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back.">
    </main>
  </body>
</html>
```

</div>
</section>
