---
id: 5efae16e3cbd2bbdab94e334
title: Step 31
challengeType: 0
dashedName: step-31
---

# --description--

Dopo l'ultimo elemento `img`, aggiungi un elemento `figcaption` con il testo `Cats hate other cats.`

# --hints--

L'elemento `figcaption` dovrebbe avere un tag di apertura. I tag di apertura hanno la seguente sintassi: `<nomeElemento>`.

```js
assert(document.querySelectorAll('figcaption').length === 2);
```

L'elemento `figcaption` dovrebbe avere un tag di chiusura. I tag di chiusura hanno un carattere `/` subito dopo il carattere `<`.

```js
assert(code.match(/<\/figcaption\>/g).length === 2);
```

Ci dovrebbe essere un elemento `figure` proprio sopra il tag di chiusura del secondo elemento `section`.

```js
assert($('main > section')[1].lastElementChild.nodeName === 'FIGURE');
```

L'ultimo elemento `img` dovrebbe essere annidato nell'elemento `figure`.

```js
const catsImg = document.querySelectorAll('figure > img')[1];
assert(
  catsImg &&
    catsImg.getAttribute('src').toLowerCase() === 'https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg'
);
```

L'elemento `figure` dovrebbe avere un tag di apertura. I tag di apertura hanno la seguente sintassi: `<nomeElemento>`.

```js
assert(document.querySelectorAll('figure').length === 2);
```

L'elemento `figure` dovrebbe avere un tag di chiusura. I tag di chiusura hanno un carattere `/` subito dopo il carattere `<`.

```js
assert(code.match(/<\/figure\>/g).length === 2);
```

L'elemento `figcaption` dovrebbe essere annidato nell'elemento `figure`.

```js
assert(document.querySelectorAll('figure > figcaption').length === 2);
```

L'elemento `figcaption` annidato nell'elemento `figure` dovrebbe essere al di sotto dell'elemento `img`. L'elemento `img` e l'elemento `figcaption` sono nell'ordine sbagliato.

```js
assert(
  document.querySelectorAll('figcaption')[1].previousElementSibling.nodeName ===
    'IMG'
);
```

Il testo dell'elemento `figcaption` dovrebbe essere `Cats hate other cats.` Hai omesso una parola o hai un refuso.

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

