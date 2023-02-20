---
id: 587d7b8a367417b2b2512b4e
title: Створення рядків за допомогою шаблонних літералів
challengeType: 1
forumTopicId: 301200
dashedName: create-strings-using-template-literals
---

# --description--

Новою особливістю ES6 є <dfn>шаблонний літерал</dfn>. Це особливий тип рядка, який полегшує створення складних рядків.

Шаблонні літерали дозволяють нам створювати багатолінійні рядки та використовувати можливості інтерполяції для створення рядків.

Розглянемо наступний код:

```js
const person = {
  name: "Zodiac Hasbro",
  age: 56
};

const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

console.log(greeting);
```

Консоль показуватиме рядки `Hello, my name is Zodiac Hasbro!` та `I am 56 years old.`.

Тут відбувається багато процесів. По-перше, у прикладі вживаються зворотні лапки (`` ` ``), а не одинарні чи подвійні (`'` чи `"`), щоб обрамити рядок. По-друге, зверніть увагу, що рядок залишається багатолінійним як у коді, так і у виводі. Через це у рядок не потрібно вставляти `\n`. Наведений вище синтаксис `${variable}` є заповнювачем тексту (плейсхолдером). По суті, вам більше не доведеться використовувати конкатенацію з оператором `+`. Щоб додати змінні до рядків, просто помістіть змінну у шаблонний рядок і розмістіть між `${` та `}`. Так само можна помістити інші вирази в рядковий літерал, наприклад `${a + b}`. Цей новий спосіб створення рядків дає вам більше гнучкості під час створення складних рядків.

# --instructions--

Використайте синтаксис шаблонних літералів зі зворотними лапками, щоб створити масив із рядками елементів списку (`li`). Текстом кожного елемента масиву повинен бути один з елементів, що містяться в масиві у властивості `failure` об’єкта `result` та мати атрибут `class` зі значенням `text-warning`. Функція `makeList` повинна повертати масив із рядками елементів списку.

Використайте метод ітератора (будь-який цикл), щоб отримати бажаний вивід (наведений нижче).

```js
[
  '<li class="text-warning">no-var</li>',
  '<li class="text-warning">var-on-top</li>',
  '<li class="text-warning">linebreak</li>'
]
```

# --hints--

`failuresList` має бути масивом, що містить повідомлення `result failure`.

```js
assert(
  typeof makeList(result.failure) === 'object' && failuresList.length === 3
);
```

`failuresList` має дорівнювати вказаному виводу.

```js
assert(
  makeList(result.failure).every(
    (v, i) =>
      v === `<li class="text-warning">${result.failure[i]}</li>` ||
      v === `<li class='text-warning'>${result.failure[i]}</li>`
  )
);
```

Використайте шаблонні рядки та інтерполяцію виразу.

```js
(getUserInput) => assert(getUserInput('index').match(/(`.*\${.*}.*`)/));
```

Використайте цикл.

```js
(getUserInput) =>
  assert(getUserInput('index').match(/for|map|reduce|forEach|while/));
```

# --seed--

## --seed-contents--

```js
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  // Only change code below this line
  const failureItems = [];
  // Only change code above this line

  return failureItems;
}

const failuresList = makeList(result.failure);
```

# --solutions--

```js
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  return arr.map(val => `<li class="text-warning">${val}</li>`);
}

const failuresList = makeList(result.failure);
```
