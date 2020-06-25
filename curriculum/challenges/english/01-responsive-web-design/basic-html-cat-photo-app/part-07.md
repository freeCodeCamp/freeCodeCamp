---
id: 5dc23991f86c76b9248c6eb8
title: Part 07
challengeType: 0
isBeta: true
---

## Description
<section id='description'>

HTML elements are often nested within other HTML elements. On this page, the comment and `p` element are nested within the `main` element.

When you nest one element inside another, the nested element becomes a child of the parent. To make HTML easier to read, you should indent child elements inside their parent element.  Most programmers use 2 or 4 spaces to indent their code.

Indent the comment and `p` element on this page so it is easer to see that they are children of the `main` element.

</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: "The comment's text should be 'TODO: Add link to cat photos'. Do not change the text or spacing of the comment."
    testString: 'assert( code.match(/<\!\-\- TODO\: Add link to cat photos \-\-\>/) );'
  - text: The text of the `p` elemnet should be "Click here to view more cat photos. Do not change the text, spacing, or punctuation of the `p` element's text.
    testString: assert( document.querySelector('p').innerText === 'Click here to view more cat photos.' );
  - text: "Your comment should be indented within the `main` element."
    testString: 'assert( code.match(/\<main\>\n\s{2,}\<\!\-\- TODO\: Add link to cat photos \-\-\>/) );'
  - text: "Your `p` element should be indented using the same number of spaces as the comment within the `main` element."
    testString: |
      const commentIndent = code.match(/\<main\>\n(\s+)<\!\-\-/);
      const commentIndentLength = commentIndent ? commentIndent[0].length : 0;
      const pIndent = code.match(/\n(\s+)\<p\>\n(\s+)<\!\-\-/);
      const pIndentLength = pIndent ? pIndent[0].length : 0;
      assert( commentIndentLength === pIndentLength && code.match(/<p\>Click here to view more cat photos\.\<\/p\>/) );

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
      <!-- TODO: Add link to cat photos -->
      <p>Click here to view more cat photos.</p>
    </main>
  </body>
</html>
```

</section>
