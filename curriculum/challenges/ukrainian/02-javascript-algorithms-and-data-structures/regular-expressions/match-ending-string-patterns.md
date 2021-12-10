---
id: 587d7db7367417b2b2512b9e
title: Пошук відповідностей шаблонам у кінці рядків
challengeType: 1
forumTopicId: 301352
dashedName: match-ending-string-patterns
---

# --description--

У минулому завданні ви навчилися використовувати символ карет для пошуку шаблонів на початку рядків. Також існує спосіб пошуку шаблонів у кінці рядків.

Ви можете виконати пошук по кінцях рядків, використовуючи символ долара `$` у кінці регулярного виразу.

```js
let theEnding = "This is a never ending story";
let storyRegex = /story$/;
storyRegex.test(theEnding);
let noEnding = "Sometimes a story will have to end";
storyRegex.test(noEnding);
```

Перший виклик `test` повернеться як `true`, тоді ж як другий повернеться як `false`.

# --instructions--

Використовуйте знак прив'язки (`$`), щоб знайти відповідність рядка `caboose` у кінці рядка `caboose`.

# --hints--

Ви можете також виконати пошук `caboose` знаком прив'язки долар `$` у регулярному виразі.

```js
assert(lastRegex.source == 'caboose$');
```

Ваш регулярний вираз не повинен містити жодних маркерів.

```js
assert(lastRegex.flags == '');
```

Ви можете знайти відповідність до `caboose` у кінці рядка `The last car on a train is the caboose`

```js
lastRegex.lastIndex = 0;
assert(lastRegex.test('The last car on a train is the caboose'));
```

# --seed--

## --seed-contents--

```js
let caboose = "The last car on a train is the caboose";
let lastRegex = /change/; // Change this line
let result = lastRegex.test(caboose);
```

# --solutions--

```js
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Change this line
let result = lastRegex.test(caboose);
```
