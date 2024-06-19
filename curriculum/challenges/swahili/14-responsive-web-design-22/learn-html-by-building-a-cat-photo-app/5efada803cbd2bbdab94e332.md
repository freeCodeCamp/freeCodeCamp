---
id: 5efada803cbd2bbdab94e332
title: Hatua ya 29
challengeType: 0
dashedName: step-29
---

# --description--

Ndani ya kipengele cha `figure` ulichoongeza hivi punde, weka kipengele cha `img` chenye sifa ya `src` iliyowekwa `https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg`.

# --hints--

Kipengele chako cha pili cha `figure` kinafaa kuwa na tagi ya kufungua. Tagi za ufunguzi zina sintaksia hii: `<elementName>`.

```js
assert(document.querySelectorAll('figure').length >= 2);
```

Kipengele chako cha pili cha `figure` kinafaa kuwa na tagi ya kufunga. Tagi za kufunga zina `/` mara baada ya herufi ya `<`.

```js
assert(code.match(/<\/figure>/g).length >= 2);
```

Kunapaswa kuwa na kipengele cha pili cha `figure` juu ya tagi ya kufunga ya kipengele cha pili cha `section`. Unazo katika mpangilio mbaya.

```js
assert($('main > section')[1].lastElementChild.nodeName === 'FIGURE');
```

Unapaswa kuwa na kipengele cha tatu cha `img` kilichowekwa katika kipengele cha `figure`.

```js
const catsImg = document.querySelectorAll('figure > img')[1];
assert(
  catsImg
);
```

The third image should have a `src` attribute set to `https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg`.

```js
const catsImg = document.querySelectorAll('figure > img')[1];
assert(
  catsImg &&
    catsImg.getAttribute('src').toLowerCase() === 'https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg'
);
```

Ingawa umeweka `src` ya picha mpya kwenye URL sahihi, inashauriwa kuzunguka thamani ya sifa kila wakati kwa alama za nukuu.

```js
assert(!/\<img\s+.+\s+src\s*=\s*https:\/\/cdn\.freecodecamp\.org\/curriculum\/cat-photo-app\/cats\.jpg/.test(code));
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

        </figure>
--fcc-editable-region--
      </section>
    </main>
  </body>
</html>
```

