---
id: 5efada803cbd2bbdab94e332
title: Passo 29
challengeType: 0
dashedName: step-29
---

# --description--

Dentro do elemento `figure` que você acabou de adicionar, coloque um elemento `img` com um atributo `src` definido como `https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg`.

# --hints--

O segundo elemento `figure` deve ter uma tag de abertura. As tags de abertura têm essa sintaxe: `<elementName>`.

```js
assert(document.querySelectorAll('figure').length >= 2);
```

O segundo elemento `figure` deve ter uma tag de fechamento. As tags de fechamento têm um caractere `/` logo após o caractere `<`.

```js
assert(code.match(/<\/figure>/g).length >= 2);
```

O segundo elemento `figure` deve estar logo acima da tag de fechamento de fechamento do segundo elemento `section`. Eles estão na ordem errada.

```js
assert($('main > section')[1].lastElementChild.nodeName === 'FIGURE');
```

Você deve adicionar um terceiro elemento `img` dentro do elemento `figure`.

```js
const catsImg = document.querySelectorAll('figure > img')[1];
assert(
  catsImg
);
```

A terceira imagem deve ter um atributo `src` com o valor de `https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg`.

```js
const catsImg = document.querySelectorAll('figure > img')[1];
assert(
  catsImg &&
    catsImg.getAttribute('src').toLowerCase() === 'https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg'
);
```

Embora você tenha definido o valor de `src` com o URL correto, é recomendável sempre cercar o valor de um atributo com aspas.

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

