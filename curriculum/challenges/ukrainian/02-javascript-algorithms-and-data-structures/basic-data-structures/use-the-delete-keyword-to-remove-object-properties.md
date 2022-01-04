---
id: 587d7b7c367417b2b2512b1b
title: Використати ключове слово delete для видалення властивостей об'єкта
challengeType: 1
forumTopicId: 301168
dashedName: use-the-delete-keyword-to-remove-object-properties
---

# --description--

Тепер вам відомо, що таке об'єкти, а також їхні основні функції і переваги. Коротше кажучи, вони — бази даних "ключ-значення", які забезпечують гнучкий та інтуїтивно зрозумілий спосіб структурування даних, ***і***, вони сприяють зменшенню часу пошуку. У решті цих завдань ми опишемо кілька типових операцій, які ви можете здійснити стосовно об'єктів, щоб вам було зручно застосовувати такі корисні структури даних у ваших програмах.

У попередніх завданнях ми як додавали пари "ключ-значення" в об'єкт, так і змінювали їх. Таким чином, ми зрозуміємо, як ми можемо *видалити* пару "ключ-значення" з об'єкта.

Повернімося до нашого прикладу об'єкту `foods` востаннє. Якщо ми хочемо видалити ключ `apples`, ми можемо зробити це за допомогою ключового слова `delete` наступним чином:

```js
delete foods.apples;
```

# --instructions--

Використайте це ключове слово для видалення `oranges`, `plums` і `strawberries` ключів з об'єкту `foods`.

# --hints--

Об'єкт `foods` має включати тільки три ключі: `apples`, `grapes` і `bananas`.

```js
assert(
  !foods.hasOwnProperty('oranges') &&
    !foods.hasOwnProperty('plums') &&
    !foods.hasOwnProperty('strawberries') &&
    Object.keys(foods).length === 3
);
```

Ключі `oranges`, `plums` і `strawberries` необхідно видалити, використовуючи `delete`.

```js
assert(
  code.search(/oranges:/) !== -1 &&
    code.search(/plums:/) !== -1 &&
    code.search(/strawberries:/) !== -1
);
```

# --seed--

## --seed-contents--

```js
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

// Only change code below this line

// Only change code above this line

console.log(foods);
```

# --solutions--

```js
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

delete foods.oranges;
delete foods.plums;
delete foods.strawberries;

console.log(foods);
```
