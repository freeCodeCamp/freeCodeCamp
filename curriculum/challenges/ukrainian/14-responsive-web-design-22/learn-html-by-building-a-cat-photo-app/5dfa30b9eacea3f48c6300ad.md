---
id: 5dfa30b9eacea3f48c6300ad
title: Крок 15
challengeType: 0
dashedName: step-15
---

# --description--

У попередніх кроках ви використовували елемент прив’язки, щоб перетворити текст на посилання. Інші типи вмісту також можна перетворити на посилання, загорнувши їх в теги прив’язки.

Перетворіть зображення на посилання, оточивши його необхідними теґами елементів. Використайте `https://freecatphotoapp.com` як значення атрибута `href` елемента прив'язки.

# --hints--

Ви повинні мати елемент `img` з `src` зі значенням `https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg`. Можливо, ви випадково видалили його.

```js
assert(
  document.querySelector('img') &&
    document.querySelector('img').getAttribute('src') ===
      'https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg'
);
```

Ваш елемент прив'язки (`a`) повинен мати початковий теґ. Початкові теґи мають такий синтаксис: `<elementName>`.

```js
assert(document.querySelectorAll('a').length >= 2);
```

Ви повинні додати лише один початковий теґ прив'язки (`a`). Будь ласка, видаліть всі зайві.

```js
assert(document.querySelectorAll('a').length === 2);
```

Ваш елемент прив'язки (`a`) повинен мати кінцевий теґ. Кінцеві теґи мають `/` відразу після символу `<`.

```js
assert(code.match(/<\/a>/g).length >= 2);
```

Ви повинні додати лише один кінцевий теґ прив'язки (`a`). Будь ласка, видаліть всі зайві.

```js
assert(code.match(/<\/a>/g).length === 2);
```

Ваш елемент прив'язки (`a`) не має атрибута `href`. Перевірте, чи є пробіл після назви початкового теґа та/або є пробіли перед усіма назвами атрибутів.

```js
assert(document.querySelector('a').hasAttribute('href'));
```

Ваш елемент прив'язки (`a`) повинен посилати на `https://freecatphotoapp.com`. Ви або не написали URL-адресу, або маєте друкарську помилку.

```js
assert(
  document.querySelectorAll('a')[1].getAttribute('href') ===
    'https://freecatphotoapp.com'
);
```

Ваш елемент `img` повинен бути вкладеним в межах елемента прив'язки (`a`). Весь елемент `img` повинен бути всередині початкового та кінцевого теґів елемента прив'язки (`a`).

```js
assert(document.querySelector('img').parentNode.nodeName === 'A');
```

# --seed--

## --seed-contents--

```html
<html>
  <body>
    <main>
      <h1>CatPhotoApp</h1>
      <h2>Cat Photos</h2>
      <!-- TODO: Add link to cat photos -->
      <p>See more <a target="_blank" href="https://freecatphotoapp.com">cat photos</a> in our gallery.</p>
--fcc-editable-region--
      <img src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back.">
--fcc-editable-region--
    </main>
  </body>
</html>
```

