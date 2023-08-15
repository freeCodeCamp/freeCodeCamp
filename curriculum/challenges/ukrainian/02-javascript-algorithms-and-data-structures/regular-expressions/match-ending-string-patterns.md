---
id: 587d7db7367417b2b2512b9e
title: Збіги кінця рядка
challengeType: 1
forumTopicId: 301352
dashedName: match-ending-string-patterns
---

# --description--

У попередньому завданні ви навчилися використовувати символ карет для пошуку шаблонів на початку рядків. Існує й спосіб пошуку шаблонів у кінці рядків.

Ви можете виконати пошук по кінцях рядків, використовуючи символ долара `$` у кінці регулярного виразу.

```js
let theEnding = "This is a never ending story";
let storyRegex = /story$/;
storyRegex.test(theEnding);
let noEnding = "Sometimes a story will have to end";
storyRegex.test(noEnding);
```

Перший виклик `test` поверне `true`, а другий поверне `false`.

# --instructions--

Використайте символ прив’язки (`$`), щоб знайти збіг рядка `caboose` у кінці рядка `caboose`.

# --hints--

Знайдіть `caboose` за допомогою символа долара `$` у регулярному виразі.

```js
assert(lastRegex.source == 'caboose$');
```

Ваш регулярний вираз не повинен використовувати жодних прапорців.

```js
assert(lastRegex.flags == '');
```

Знайдіть збіг для `caboose` у кінці рядка `The last car on a train is the caboose`

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
