---
id: 5dc23991f86c76b9248c6eb8
title: Part 6
challengeType: 0
---

## Description
<section id='description'>

HTML elements are often nested within other HTML elements. In the previous step you nested the `h2` element, comment and `p` element within the `main` element. A nested element is a child of its parent element.

To make HTML easier to read, indent the `h2` element, the comment, and `p` element exactly two spaces to indicate they are children of the `main` element.

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your should have an `h2` element with text `Cat Photos`. You may have accidentally deleted it, it is missing both opening and closing tags, or the text has changed.
    testString: assert( document.querySelector('h2') && code.match(/<\/h2\>/) && document.querySelector('h2').innerText.toLowerCase() === 'cat photos' );
  - text: Your `h2` element should below the `main` element's opening tag and its opening tag should start 6 spaces over from the start of the line.
    testString: assert( code.toLowerCase().match(/<main\>\n\s{6}<h2>/) );
  - text: Your code should have a comment. You removed the comment from an earlier step.
    testString: assert( code.match(/<!--.*-->/) );
  - text: "The comment's text should be `TODO: Add link to cat photos`. Do not change the text or spacing of the comment."
    testString: 'assert( code.match(/<!--\s*todo:\s+add\s+link\s+to\s+cat\s+photos\.?\s*-->/i) );'
  - text: Your comment should be below the `h2` element and start 6 spaces over from the start of the line.
    testString: 'assert( code.toLowerCase().match(/<\/h2>\n\s{6}<!--\s*todo:\s+add\s+link\s+to\s+cat\s+photos\s*-->/) );'
  - text: Your code should have a `p` element. You have removed the `p` element from an earlier step.
    testString: assert( document.querySelector('p') );
  - text: The text of the `p` element should be `Click here to view more cat photos.` Do not change the text, spacing, or punctuation of the `p` element.
    testString: assert( document.querySelector('p').innerText.toLowerCase().match(/click\s+here\s+to\s+view\s+more\s+cat\s+photos\.?$/) );
  - text: Your `p` element should be below the comment and its opening tag should start 6 spaces over from the start of the line.
    testString: assert( code.toLowerCase().match(/-->\n\s{6}<p>/) );

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
    --fcc-editable-region--
    <h2>Cat Photos</h2>
    <!-- TODO: Add link to cat photos -->
    <p>Click here to view more cat photos.</p>
    --fcc-editable-region--
    </main>
  </body>
</html>
```

</div>
</section>
