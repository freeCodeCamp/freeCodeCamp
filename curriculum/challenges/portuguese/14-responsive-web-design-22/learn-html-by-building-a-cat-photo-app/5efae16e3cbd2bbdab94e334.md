---
id: 5efae16e3cbd2bbdab94e334
title: Passo 31
challengeType: 0
dashedName: step-31
---

# --description--

Depois do último elemento `img`, adicione um elemento `figcaption` com o texto `Cats hate other cats.`

# --hints--

O elemento `figcaption` deve ter uma tag de abertura. As tags de abertura têm a seguinte sintaxe: `<elementName>`.

```js
assert(document.querySelectorAll('figcaption').length === 2);
```

O elemento `figcaption` deve ter uma tag de fechamento. As tags de fechamento têm um caractere `/` logo após o caractere `<`.

```js
assert(code.match(/<\/figcaption\>/g).length === 2);
```

O elemento `figure` deve estar logo acima da tag de fechamento de fechamento do segundo elemento `section`.

```js
assert($('main > section')[1].lastElementChild.nodeName === 'FIGURE');
```

O último elemento `img` deve estar dentro do elemento `figure`.

```js
const catsImg = document.querySelectorAll('figure > img')[1];
assert(
  catsImg &&
    catsImg.getAttribute('src').toLowerCase() === 'https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg'
);
```

O elemento `figure` deve ter uma tag de abertura. As tags de abertura têm a seguinte sintaxe: `<elementName>`.

```js
assert(document.querySelectorAll('figure').length === 2);
```

O elemento `figure` deve ter uma tag de fechamento. As tags de fechamento têm um caractere `/` logo após o caractere `<`.

```js
assert(code.match(/<\/figure\>/g).length === 2);
```

O elemento `figcaption` da lasanha deve estar dentro do elemento `figure`.

```js
assert(document.querySelectorAll('figure > figcaption').length === 2);
```

O elemento `figcaption` dentro do elemento `figure` deve estar abaixo do elemento `img`. O elemento `img` e o elemento `figcaption` estão na ordem errada.

```js
assert(
  document.querySelectorAll('figcaption')[1].previousElementSibling.nodeName ===
    'IMG'
);
```

O elemento `figcaption` deve ter o texto `Cats hate other cats.` Você omitiu uma palavra ou tem um erro de digitação.

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

