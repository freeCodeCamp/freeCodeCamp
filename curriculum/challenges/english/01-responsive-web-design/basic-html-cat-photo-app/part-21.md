---
id: 5dfb5ecbeacea3f48c6300b1
title: Part 21
challengeType: 0
isBeta: true
---

## Description
<section id='description'>

Now nest three list item elements (`<li>`) within the `ul` element displaying three things cats love. Make the items cat nip, laser pointers and lasagna. 

Here is an example of list items in an unordered list:

```js
<ul>
  <li>milk</li>
  <li>cheese</li>
</ul>
```

</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: See description above for instructions.
    testString: assert.deepStrictEqual( Array.from(document.querySelectorAll('li')).map(item => item.innerText.toLowerCase()).sort((a, b) => a.localeCompare(b)), ["cat nip", "lasagna", "laser pointers"] );

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
      <p>Click here to view more <a target="_blank" href="#">cat photos</a>.</p>
      <a href="#"><img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>
      <h3>Cat Lists</h3>
      <p>Things cats love:</p>
      <ul>
      </ul>
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
      <a href="#"><img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>
      <h3>Cat Lists</h3>
      <p>Things cats love:</p>
      <ul>
        <li>cat nip</li>
        <li>laser pointers</li>
        <li>lasagna</li>
      </ul>
    </main>
  </body>
</html>
```

</section>
