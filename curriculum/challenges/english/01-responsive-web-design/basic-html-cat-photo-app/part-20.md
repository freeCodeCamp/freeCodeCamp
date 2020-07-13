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
  - text: There should be an `img` element right above the `main` element's closing tag. You have them in the wrong order.
    testString: assert( document.querySelector('main').lastElementChild.nodeName === 'IMG' );
  - text: The new `img` element either does not have an `alt` attribute or it is not set to a non-blank value. Check that there is a space after the opening tag's name and/or there are spaces before all attribute names.
    testString: assert( document.querySelector('main').lastElementChild.getAttribute('alt') );
  - text: The new `img` element should have an `alt` value of `A slice of lasagna on a plate.`
    testString: assert( document.querySelector('main').lastElementChild.getAttribute('alt').replace(/\s+/g, ' ').match(/A slice of lasagna on a plate\.?/i) );
  - text: The new `img` element should have an `src` value of `https://bit.ly/fcc-lasagna`.
    testString: assert( document.querySelector('main').lastElementChild.getAttribute('src') === 'https://bit.ly/fcc-lasagna');
  - text: Although you have set the new `img` element's `src` to the correct URL, it is recommended to always surround the value of an attribute with quotation marks.
    testString: assert( !/\<img\s+src\s*=\s*https:\/\/bit\.ly\/fcc-lasagna/.test(code) );

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
      <section>
        <h2>Cat Photos</h2>
        <!-- TODO: Add link to cat photos -->
        <p>Click here to view more <a target="_blank" href="https://www.freecodecamp.org/cat-photos">cat photos</a>.</p>
        <a href="https://www.freecodecamp.org/cat-photos"><img src="https://bit.ly/fcc-relaxing-cat" alt="A cute orange cat lying on its back."></a>
      </section>
      <section>
        <h2>Cat Lists</h2>
        <h3>Things cats love:</h3>
        --fcc-editable-region--
        <ul>
          <li>cat nip</li>
          <li>laser pointers</li>
          <li>lasagna</li>
        </ul>
        --fcc-editable-region--
      </section>
    </main>
  </body>
</html>
```

</div>
</section>
