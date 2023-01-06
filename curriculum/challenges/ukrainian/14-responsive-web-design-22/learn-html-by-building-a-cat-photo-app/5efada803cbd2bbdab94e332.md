---
id: 5efada803cbd2bbdab94e332
title: Крок 29
challengeType: 0
dashedName: step-29
---

# --description--

Всередині елемента `figure`, який ви щойно додали, вкладіть елемент `img` з атрибутом `src` зі значенням `https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg`.

# --hints--

Ваш другий елемент `figure` повинен мати початковий теґ. Початкові теґи мають такий синтаксис: `<elementName>`.

```js
assert(document.querySelectorAll('figure').length >= 2);
```

Ваш другий елемент `figure` повинен мати кінцевий теґ. Кінцеві теґи мають `/` відразу після символу `<`.

```js
assert(code.match(/<\/figure>/g).length >= 2);
```

Прямо над кінцевим теґом другого елемента `section` повинен бути другий елемент `figure`. Вони знаходяться в неправильному порядку.

```js
assert($('main > section')[1].lastElementChild.nodeName === 'FIGURE');
```

Ви повинні мати третій елемент `img` вкладеним в елемент `figure`.

```js
const catsImg = document.querySelectorAll('figure > img')[1];
assert(
  catsImg
);
```

Третє зображення повинне мати атрибут `src` зі значенням `https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg`.

```js
const catsImg = document.querySelectorAll('figure > img')[1];
assert(
  catsImg &&
    catsImg.getAttribute('src').toLowerCase() === 'https://cdn.freecodecamp.org/curriculum/cat-photo-app/cats.jpg'
);
```

Хоча ви встановили `src` нового зображення як правильну URL-адресу, краще завжди писати значення атрибута в лапках.

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

