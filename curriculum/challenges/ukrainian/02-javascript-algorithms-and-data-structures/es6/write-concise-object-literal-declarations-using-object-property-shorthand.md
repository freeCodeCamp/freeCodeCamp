---
id: 587d7b8a367417b2b2512b4f
title: Написання стислих оголошень літералів об’єктів за допомогою скороченої властивості об’єкта
challengeType: 1
forumTopicId: 301225
dashedName: write-concise-object-literal-declarations-using-object-property-shorthand
---

# --description--

ES6 додає деяку хорошу підтримку для легкого визначення літералів об’єкта.

Розглянемо наступний код:

```js
const getMousePosition = (x, y) => ({
  x: x,
  y: y
});
```

`getMousePosition` є простою функцією, яка повертає об’єкт з двома властивостями. ES6 надає синтаксичний цукор, щоб не доводилось писати `x: x`. Ви можете просто написати `x` один раз, і воно автоматично перетвориться на `x: x` (або щось еквівалентне). Ось та ж сама функція, переписана під новий синтаксис:

```js
const getMousePosition = (x, y) => ({ x, y });
```

# --instructions--

Використайте скорочену властивість об’єкта з його літералами, щоб створити і повернути об’єкт з властивостями `name`, `age` та `gender`.

# --hints--

`createPerson("Zodiac Hasbro", 56, "male")` має повертати `{name: "Zodiac Hasbro", age: 56, gender: "male"}`.

```js
assert.deepEqual(
  { name: 'Zodiac Hasbro', age: 56, gender: 'male' },
  createPerson('Zodiac Hasbro', 56, 'male')
);
```

Ваш код не повинен використовувати `key:value`.

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
