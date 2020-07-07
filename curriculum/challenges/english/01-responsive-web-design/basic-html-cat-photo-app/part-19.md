---
id: 5dfb5ecbeacea3f48c6300b1
title: Part 19
challengeType: 0
isHidden: true
---

## Description
<section id='description'>

Use list item (`li`) elements to create items in a list. Here is an example of list items in an unordered list:

```html
<ul>
  <li>milk</li>
  <li>cheese</li>
</ul>
```

Nest three list items within the `ul` element to display three things cats love: `cat nip`, `laser pointers` and `lasagna`. 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: You should have 3 `li` elements with the text `cat nip`, `laser pointers` and `lasagna` in any order. You have either omitted some text or have a typo.
    testString: assert.deepStrictEqual( [ ...document.querySelectorAll('li') ].map(item => item.innerText.toLowerCase()).sort((a, b) => a.localeCompare(b)), ["cat nip", "lasagna", "laser pointers"] );
  - text: The three `li` elements should be nested inside the `ul` element.
    testString: assert( [ ...document.querySelectorAll('li') ].filter(item => item.parentNode.nodeName === 'UL').length === 3 );

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
      --fcc-editable-region--
      <ul>
      </ul>
      --fcc-editable-region--
    </main>
  </body>
</html>
```

</div>
</section>
