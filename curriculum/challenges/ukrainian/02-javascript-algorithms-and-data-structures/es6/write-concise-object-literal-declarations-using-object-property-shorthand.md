---
id: 587d7b8a367417b2b2512b4f
title: Давайте напишемо точні декларації об'єкта за допомогою Object Property Shorthand
challengeType: 1
forumTopicId: 301225
dashedName: write-concise-object-literal-declarations-using-object-property-shorthand
---

# --description--

ES6 надає гарну підтримку для легкого визначення літералів об'єкта.

Розглянемо наступний код:

```js
const getMousePosition = (x, y) => ({
  x: x,
  y: y
});
```

`getMousePosition` це проста функція, яка повертає об'єкт з двома властивостями. ES6 втілює синтаксичний цукор (синтаксичний прийом, який полегшує сприйняття тексту програми), щоб не доводилось багато писати `x: x`. Можна просто написати `x` один раз, і він конвертується у `x: x` (або еквівалент) автоматично. Ось та ж сама функція, переписана під новий синтаксис:

```js
const getMousePosition = (x, y) => ({ x, y });
```

# --instructions--

Скористайтеся скороченням властивостей об'єкта з його літералами, щоб створити і звернутися до об'єкта з такими властивостями: `name`, `age` і `gender`.

# --hints--

`createPerson("Zodiac Hasbro", 56, "male")` має повертати `{name: "Zodiac Hasbro", age: 56, gender: "male"}`.

```js
assert.deepEqual(
  { name: 'Zodiac Hasbro', age: 56, gender: 'male' },
  createPerson('Zodiac Hasbro', 56, 'male')
);
```

Ваш код не має містити `key:value`.

```js
(getUserInput) => assert(!getUserInput('index').match(/:/g));
```

# --seed--

## --seed-contents--

```js
const createPerson = (name, age, gender) => {
  // Only change code below this line
  return {
    name: name,
    age: age,
    gender: gender
  };
  // Only change code above this line
};
```

# --solutions--

```js
const createPerson = (name, age, gender) => {
  return {
    name,
    age,
    gender
  };
};
```
