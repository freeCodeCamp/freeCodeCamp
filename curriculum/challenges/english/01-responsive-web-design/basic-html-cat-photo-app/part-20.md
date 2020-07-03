---
id: 5dfb6250eacea3f48c6300b2
title: Part 20
challengeType: 0
isHidden: true
---

## Description
<section id='description'>

After the unordered list, add a new image with an `src` of `https://bit.ly/fcc-lasagna` and an `alt` of `A slice of lasagna on a plate.`

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: There should be an `img` element right above the `main` element's closing tag.
    testString: assert( document.querySelector('main').lastElementChild.nodeName === 'IMG' );
  - text: The new `img` element should have an `src` value of `https://bit.ly/fcc-lasagna`.
    testString: assert( document.querySelector('main').lastElementChild.getAttribute('src') === 'https://bit.ly/fcc-lasagna');
  - text: The new `img` element should have an `alt` value of `A slice of lasagna on a plate.`
    testString: assert( document.querySelector('main').lastElementChild.getAttribute('alt').replace(/\s+/g, ' ').match(/A slice of lasagna on a plate\.?/i) );
  - text: There should be a `ul` element above the new image.
    testString: |
      const lastMainElemNode = document.querySelector('main').lastElementChild;
      assert(lastMainElemNode.previousElementSibling.nodeName === 'UL');

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
      <p>Click here to view more <a target="_blank" href="#">cat photos</a>.</p>
      <a href="#"><img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>
      <h2>Cat Lists</h2>
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

</div>
</section>
