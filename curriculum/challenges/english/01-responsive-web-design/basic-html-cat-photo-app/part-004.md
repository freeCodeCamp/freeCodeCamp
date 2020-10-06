---
id: 5dc17dc8f86c76b9248c6eb5
title: Part 4
challengeType: 0
---

## Description
<section id='description'>

Commenting allows you to leave messages without affecting the browser display. It also allows you to make code inactive. A comment in HTML starts with `<!--`, contains any number of lines of text, and ends with `-->`. For example, the comment `<!-- TODO: Remove h1 -->` contains the text `TODO: Remove h1`.

Add a comment above the `p` element with the text `TODO: Add link to cat photos`. \

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your comment should start with `<!--`. You are missing one or more of the characters that define the start of a comment.
    testString: assert( code.match(/<!--/) );
  - text: Your comment should end with `-->`.  You are missing one or more of the characters that define the end of a comment.
    testString: assert( code.match(/-->/) );
  - text: Your code should not have extra opening/closing comment characters. You have an extra `<!--` or `-->` displaying in the browser.
    testString: |
      const noSpaces = code.replace(/\s/g, '');
      assert (noSpaces.match(/<!--/g).length < 2 && noSpaces.match(/-->/g).length < 2 );
  - text: 'Your comment should contain the text `TODO: Add link to cat photos`.'
    testString: assert( code.match(/<!--\s*todo:\s+add\s+link\s+to\s+cat\s+photos\s*-->/i) );
  - text: Your comment should be above the `p` element. You have them in the wrong order.
    testString: assert( code.replace(/\s/g, '').match(/<!--todo:addlinktocatphotos--><p>clickheretoviewmorecatphotos\.?<\/p>/i) );

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<html>
  <body>
    <h1>CatPhotoApp</h1>
    <h2>Cat Photos</h2>
    --fcc-editable-region--
    <p>Click here to view more cat photos.</p>
    --fcc-editable-region--
  </body>
</html>
```

</div>
</section>
