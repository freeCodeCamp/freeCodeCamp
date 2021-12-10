---
id: 587d7b8a367417b2b2512b4d
title: Використовуйте призначення за рахунок деструктуризації, щоб передати об'єкт як параметри функції
challengeType: 1
forumTopicId: 301217
dashedName: use-destructuring-assignment-to-pass-an-object-as-a-functions-parameters
---

# --description--

У деяких випадках ви можете деструктурувати об'єкт в самому аргументі функції.

Розглянемо наступний код:

```js
const profileUpdate = (profileData) => {
  const { name, age, nationality, location } = profileData;

}
```

Ефективний спосіб деструктуризації об'єкта в функцію. Це можна виконати шляхом аналізу:

```js
const profileUpdate = ({ name, age, nationality, location }) => {

}
```

Коли `profileData` переходить у функцію, значення деструктуруються з параметра функції в використання функції.

# --instructions--

Використовуйте деструктивне привласнення в межах аргументу `half` щоб відправити лише `max` та `min` всередині функції.

# --hints--

`stats` має бути `object`.

```js
assert(typeof stats === 'object');
```

`half(stats)` має бути `28.015`

```js
assert(half(stats) === 28.015);
```

Деструкція є важливим елементом.

```js
assert(__helpers.removeWhiteSpace(code).match(/half=\({\w+,\w+}\)/));
```

Необхідно використовувати деструктивний параметр.

```js
assert(!code.match(/stats\.max|stats\.min/));
```

# --seed--

## --seed-contents--

```js
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

// Only change code below this line
const half = (stats) => (stats.max + stats.min) / 2.0; 
// Only change code above this line
```

# --solutions--

```js
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

const half = ( {max, min} ) => (max + min) / 2.0;
```
