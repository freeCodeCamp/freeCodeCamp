---
id: 5dfb5ecbeacea3f48c6300b1
title: Крок 21
challengeType: 0
dashedName: step-21
---

# --description--

Використовуйте елементи (`li`) предметів списку, щоб створити предмети в списку. Ось приклад предметів списку в невпорядкованому списку:

```html
<ul>
  <li>milk</li>
  <li>cheese</li>
</ul>
```

Всередині елемента `ul` вкладіть три предмети списку, щоб зобразити три речі, які люблять коти:

`cat nip` `laser pointers` `lasagna`

# --hints--

Ви повинні мати три елементи `li`. Кожен елемент `li` повинен мати власні початковий та кінцевий теґи.

```js
assert($('li').length === 3 && code.match(/<\/li\>/g).length === 3);
```

Ви повинні мати три елементи `li` з текстом `cat nip`, `laser pointers` та `lasagna` в будь-якому порядку. Ви або не написали текст, або маєте друкарську помилку.

```js
assert.deepStrictEqual(
  [...document.querySelectorAll('li')]
    .map((item) => item.innerText.toLowerCase())
    .sort((a, b) => a.localeCompare(b)),
  ['cat nip', 'lasagna', 'laser pointers']
);
```

Три елементи `li` повинні бути розташовані між початковим та кінцевим теґами елемента `ul`.

```js
assert(
  [...document.querySelectorAll('li')].filter(
    (item) => item.parentNode.nodeName === 'UL'
  ).length === 3
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
--fcc-editable-region--
        <ul>

        </ul>
--fcc-editable-region--
      </section>
    </main>
  </body>
</html>
```

