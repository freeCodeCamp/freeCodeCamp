---
id: 5dc2385ff86c76b9248c6eb7
title: Part 06
challengeType: 0
isBeta: true
---

## Description
<section id='description'>

HTML5 has tags that identify different content areas. These tags make your HTML easier to read, and also help with Search Engine Optimization (SEO) and accessibility. 

Identify the main section of this page by adding a `<main>` opening tag after the h2 element. Add a `</main>` closing tag after the `p` element.

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
      assert( code.replace(/\s/g, '').includes('<main><!--TODO:Addlinktocatphotos--><p>Clickheretoviewmorecatphotos.</p></main>') );

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
    <!-- TODO: Add link to cat photos -->
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
    <h2>CatPhotoApp</h2>
    <main>
    <!-- TODO: Add link to cat photos -->
    <p>Click here to view more cat photos.</p>
    </main>
  </body>
</html>
```

</section>
