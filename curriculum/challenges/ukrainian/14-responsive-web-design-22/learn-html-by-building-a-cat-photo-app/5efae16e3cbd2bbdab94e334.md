---
id: 5efae16e3cbd2bbdab94e334
title: Крок 31
challengeType: 0
dashedName: step-31
---

# --description--

Після останнього елемента `img` додайте елемент `figcaption` із текстом `Cats hate other cats.`

# --hints--

Ваш елемент `figcaption` повинен мати початковий теґ. Початкові теґи мають такий синтаксис: `<elementName>`.

```js
assert(document.querySelectorAll('figcaption').length === 2);
```

Ваш елемент `figcaption` повинен мати кінцевий теґ. Кінцеві теґи мають `/` відразу після символу `<`.

```js
assert(code.match(/<\/figcaption\>/g).length === 2);
```

Прямо над кінцевим теґом другого елемента `section` повинен бути елемент `figure`.

```js
assert($('main > section')[1].lastElementChild.nodeName === 'FIGURE');
```

Останній елемент `img` повинен бути вкладеним в елементі `figure`.

```js
const catsImg = document.querySelectorAll('figure > img')[1];
assert(
  catsImg &&
    catsImg.getAttribute('src').toLowerCase() === 'https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg'
);
```

Ваш елемент `figure` повинен мати початковий теґ. Початкові теґи мають такий синтаксис: `<elementName>`.

```js
assert(document.querySelectorAll('figure').length === 2);
```

Ваш елемент `figure` повинен мати кінцевий теґ. Кінцеві теґи мають `/` відразу після символу `<`.

```js
assert(code.match(/<\/figure\>/g).length === 2);
```

Елемент `figcaption` повинен бути вкладеним в елементі `figure`.

```js
assert(document.querySelectorAll('figure > figcaption').length === 2);
```

Елемент `figcaption`, вкладений в елемент `figure`, повинен бути під елементом `img`. Елементи `img` та `figcaption` розташовані в неправильному порядку.

```js
assert(
  document.querySelectorAll('figcaption')[1].previousElementSibling.nodeName ===
    'IMG'
);
```

Елемент `figcaption` повинен мати текст `Cats hate other cats.` Ви пропустили слово або маєте друкарську помилку.

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

