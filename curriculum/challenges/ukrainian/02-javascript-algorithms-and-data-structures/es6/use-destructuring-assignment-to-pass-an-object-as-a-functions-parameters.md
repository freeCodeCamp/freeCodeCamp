---
id: 587d7b8a367417b2b2512b4d
title: Деструктуроване присвоєння для передачі об’єкта як параметра функції
challengeType: 1
forumTopicId: 301217
dashedName: use-destructuring-assignment-to-pass-an-object-as-a-functions-parameters
---

# --description--

У деяких випадках ви можете деструктурувати об’єкт в самому аргументі функції.

Розглянемо наступний код:

```js
const profileUpdate = (profileData) => {
  const { name, age, nationality, location } = profileData;

}
```

Він ефективно деструктурує об’єкт, надісланий до функції. Це також можна зробити на місці:

```js
const profileUpdate = ({ name, age, nationality, location }) => {

}
```

Коли `profileData` передається до функції вище, значення параметрів деструктуруються для використання у функції.

# --instructions--

Використайте деструктивне присвоєння в межах аргументу функції `half`, щоб всередині функції відправити лише `max` та `min`.

# --hints--

`stats` повинен бути об’єктом (`object`).

```js
assert(typeof stats === 'object');
```

`half(stats)` має бути `28.015`

```js
assert(half(stats) === 28.015);
```

Використайте деструктуризацію.

```js
assert(__helpers.removeWhiteSpace(code).match(/half=\({\w+,\w+}\)/));
```

Використайте деструктурований параметр.

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
