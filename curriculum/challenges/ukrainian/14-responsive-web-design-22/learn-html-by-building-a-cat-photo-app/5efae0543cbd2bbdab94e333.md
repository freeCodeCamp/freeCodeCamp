---
id: 5efae0543cbd2bbdab94e333
title: Крок 30
challengeType: 0
dashedName: step-30
---

# --description--

Щоб покращити доступність доданого зображення, додайте атрибут `alt` із текстом:

`Five cats looking around a field.`

# --hints--

Ваш елемент `figure` повинен мати початковий теґ. Початкові теґи мають такий синтаксис: `<elementName>`.

```js
assert(document.querySelectorAll('figure').length === 2);
```

Ваш елемент `figure` повинен мати кінцевий теґ. Кінцеві теґи мають `/` відразу після символу `<`.

```js
assert(code.match(/<\/figure>/g).length === 2);
```

Прямо над кінцевим теґом останнього елемента `section` повинен бути елемент `figure`.

```js
assert($('main > section')[1].lastElementChild.nodeName === 'FIGURE');
```

Елемент `img` «Cats» повинен бути вкладеним в елементі `figure`.

```js
const catsImg = document.querySelectorAll('figure > img')[1];
assert(
  catsImg &&
    catsImg.getAttribute('src').toLowerCase() === 'https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg'
);
```

Елемент `img` «Cats» повинен мати атрибут `alt` зі значенням `Five cats looking around a field.`

```js
const catsImg = document.querySelectorAll('figure > img')[1];
assert(
  catsImg
    .getAttribute('alt')
    .replace(/\s+/g, ' ')
    .match(/^Five cats looking around a field\.?$/i)
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
        <figure>
--fcc-editable-region--
          <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg">
--fcc-editable-region--
        </figure>
      </section>
    </main>
  </body>
</html>
```

