---
id: 5efada803cbd2bbdab94e332
title: Schritt 29
challengeType: 0
dashedName: step-29
---

# --description--

Bette innerhalb des `figure`-Elements, das du eben hinzugefügt hast, ein `img`-Element mit einem `src`-Attribut ein, das auf `https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg` gesetzt ist.

# --hints--

Dein zweites `figure`-Element sollte ein öffnendes Tag haben. Öffnende Tags haben diese Syntax: `<elementName>`.

```js
assert(document.querySelectorAll('figure').length >= 2);
```

Dein zweites `figure`-Element sollte ein schließendes Tag haben. Schließende Tags haben ein `/` direkt nach dem `<`-Zeichen.

```js
assert(code.match(/<\/figure>/g).length >= 2);
```

Es sollte ein zweites `figure`-Element genau über dem zweiten schließenden Tag des `section`-Elements geben. Sie sind in falscher Reihenfolge.

```js
assert($('main > section')[1].lastElementChild.nodeName === 'FIGURE');
```

Du solltest ein drittes `img`-Element in dem `figure`-Element einbetten.

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

Obwohl du den `src` des neuen Bilds auf die richtige URL gesetzt hast, wird empfohlen, den Wert immer zwischen Anführungszeichen anzugeben.

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

