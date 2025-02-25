---
id: 5efae16e3cbd2bbdab94e334
title: Step 33
challengeType: 0
dashedName: step-33
---

# --description--

After the last `img` element, add a `figcaption` element with the text `Cats hate other cats.`

# --hints--

Your `figcaption` element should have an opening tag. Opening tags have the following syntax: `<elementName>`.

```js
assert.lengthOf(document.querySelectorAll('figcaption'), 2);
```

Your `figcaption` element should have a closing tag. Closing tags have a `/` just after the `<` character.

```js
assert.lengthOf(code.match(/<\/figcaption\>/g), 2);
```

There should be a `figure` element right above the second `section` element's closing tag.

```js
assert.equal(document.querySelectorAll('main > section')[1]?.lastElementChild.nodeName, 'FIGURE');
```

The last `img` element should be nested in the `figure` element.

```js
const catsImg = document.querySelectorAll('figure > img')[1];
assert.equal(
    catsImg?.getAttribute('src')?.toLowerCase(), 'https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg'
);
```

Your `figure` element should have an opening tag. Opening tags have the following syntax: `<elementName>`.

```js
assert.lengthOf(document.querySelectorAll('figure'), 2);
```

Your `figure` element should have a closing tag. Closing tags have a `/` just after the `<` character.

```js
assert.lengthOf(code.match(/<\/figure\>/g), 2);
```

The `figcaption` element should be nested in the `figure` element.

```js
assert.lengthOf(document.querySelectorAll('figure > figcaption'), 2);
```

The `figcaption` element nested in the `figure` element should be below the `img` element. You have the `img` element and the `figcaption` element in the wrong order.

```js
assert.equal(
  document.querySelectorAll('figcaption')[1]?.previousElementSibling.nodeName,
    'IMG'
);
```

The `figcaption` element should have the text `Cats hate other cats.` You have omitted a word or have a typo.

```js
assert.match(
  document
    .querySelectorAll('figcaption')[1]
    ?.innerText.toLowerCase(),
    /Cats hate other cats\.?$/i
);
```

# --seed--

## --seed-contents--

```html
<html>
  <body>
    <main>
      <h1>CatPhotoApp</h1>
      <section>
        <h2>Cat Photos</h2>
        <p>Everyone loves <a href="https://cdn.freecodecamp.org/curriculum/cat-photo-app/running-cats.jpg">cute cats</a> online!</p>
        <p>See more <a target="_blank" href="https://freecatphotoapp.com">cat photos</a> in our gallery.</p>
        <a href="https://freecatphotoapp.com"><img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>
      </section>
      <section>
        <h2>Cat Lists</h2>
        <h3>Things cats love:</h3>
        <ul>
          <li>cat nip</li>
          <li>laser pointers</li>
          <li>lasagna</li>
        </ul>
        <figure>
          <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/lasagna.jpg" alt="A slice of lasagna on a plate.">
          <figcaption>Cats <em>love</em> lasagna.</figcaption>  
        </figure>
        <h3>Top 3 things cats hate:</h3>
        <ol>
          <li>flea treatment</li>
          <li>thunder</li>
          <li>other cats</li>
        </ol>
--fcc-editable-region--
        <figure>
          <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg" alt="Five cats looking around a field.">

        </figure>
--fcc-editable-region--
      </section>
    </main>
  </body>
</html>
```
