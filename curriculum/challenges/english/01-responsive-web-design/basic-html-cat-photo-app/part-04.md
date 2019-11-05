---
id: 5dc17dc8f86c76b9248c6eb5
title: Part 04
challengeType: 0
isBeta: true
---

## Description
<section id='description'>

Commenting allows you to leave messages without affecting the output displayed to the end user. It also allows you to make code inactive. A comment in HTML starts with `<!--`, contains any number of lines of text, and ends with `-->`. 

Add a comment above the `p` element with the text: "TODO: Add link to cat photos". For example the comment `<!-- TODO: Remove h1 -->` contains the text "TODO: Remove h1".

</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: See description above for instructions.
    testString: |
      assert(code.replace(/\s/g, '').includes('<!--TODO:Addlinktocatphotos-->'));

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
    <h1>Hello World</h1>
    <h2>CatPhotoApp</h2>
    <!-- TODO: Add link to cat photos -->
    <p>Click here to view more cat photos.</p>
  </body>
</html>
```

</section>
