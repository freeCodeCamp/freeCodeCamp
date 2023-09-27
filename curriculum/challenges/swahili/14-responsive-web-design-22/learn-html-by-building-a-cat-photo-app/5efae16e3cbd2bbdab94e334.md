---
id: 5efae16e3cbd2bbdab94e334
title: Hatua ya 31
challengeType: 0
dashedName: step-31
---

# --description--

Baada ya kipengele cha mwisho cha `img`, ongeza kipengele cha `figcaption` chenye maandishi `Cats hate other cats.`

# --hints--

Kipengee chako cha `figcaption` kinapaswa kuwa na tagi ya ufunguzi. Tagi za ufunguzi zina sintaksia ifuatayo: `<elementName>`.

```js
assert(document.querySelectorAll('figcaption').length === 2);
```

Kipengee chako cha `figcaption` kinapaswa kuwa na tagi ya kufunga. Tagi za kufunga zina `/` mara baada ya herufi ya `<`.

```js
assert(code.match(/<\/figcaption\>/g).length === 2);
```

Kunapaswa kuwa na kipengele cha `figure` juu ya tagi ya kufunga ya kipengele cha pili cha `section`.

```js
assert($('main > section')[1].lastElementChild.nodeName === 'FIGURE');
```

Kipengele cha mwisho cha `img` kinafaa kuwekwa kwenye kipengee cha `figure`.

```js
const catsImg = document.querySelectorAll('figure > img')[1];
assert(
  catsImg &&
    catsImg.getAttribute('src').toLowerCase() === 'https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg'
);
```

Kipengele chako cha `figure` kinafaa kuwa na tagi ya kufungua. Tagi za ufunguzi zina sintaksia ifuatayo: `<elementName>`.

```js
assert(document.querySelectorAll('figure').length === 2);
```

Kipengele chako cha `figure` kinapaswa kuwa na tagi ya kufunga. Tagi za kufunga zina `/` mara baada ya herufi ya `<`.

```js
assert(code.match(/<\/figure\>/g).length === 2);
```

Kipengee chako kipya cha `figcaption` kinapaswa kuwekwa katika kipengele cha `figure`.

```js
assert(document.querySelectorAll('figure > figcaption').length === 2);
```

Kipengele cha `figcaption` kilichowekwa katika kipengele cha `figure` lazima kiwe chini ya kipengele cha `img`. Una kipengele cha `img` na kipengele cha `figcaption` katika mpangilio usio sahihi.

```js
assert(
  document.querySelectorAll('figcaption')[1].previousElementSibling.nodeName ===
    'IMG'
);
```

Maandishi ya kipengele cha `figcaption` yanapaswa kuwa `Cats hate other cats.` Aidha umesahau maandishi, au kuna makosa ya maandishi.

```js
assert(
  document
    .querySelectorAll('figcaption')[1]
    .innerText.toLowerCase()
    .match(/Cats hate other cats\.?$/i)
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
        <!-- TODO: Add link to cat photos -->
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

