---
id: 5dc23991f86c76b9248c6eb8
title: Part 07
challengeType: 0
isBeta: true
---

## Description
<section id='description'>

HTML elements are often nested within other HTML elements. On this page, the comment and `p` element are nested within the `main` element.

When you nest one element inside another, the nested element becomes a child of the parent. To make HTML easier to read, you should indent child elements inside their parent element.

Indent the comment and `p` element on this page so it is easer to see that they are children of the `main` element.

</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: "Do not change the text or spacing of the commented out text. It should be 'TODO: Add link to cat photos'."
    testString: |
      assert( code.match(/<\!\-\- TODO\: Add link to cat photos \-\-\>/) );
  - text: "Do not change the text or spacing of the <code>p</code> element's text. It should be 'Click here to view more cat photos.'"
    testString: assert( document.querySelector('p').innerText === 'Click here to view more cat photos.' );
  - text: "Your comment should be indented within the <code>main</code> element."
    testString: |
      assert( code.match(/\<main\>\n\s{5,}\<\!\-\- TODO\: Add link to cat photos \-\-\>/) );
  - text: "Your <code>p</code> element should be indented within the <code>main</code> element."
    testString: assert( code.match(/\n\s{5,}\<p\>Click here to view more cat photos\.\<\/p\>\n\s{4,}\<\/main\>/) );

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
