---
id: 5cfa550e84205a357704ccb6
title: Деструктуроване присвоєння для отримання значень з об’єктів
challengeType: 1
forumTopicId: 301216
dashedName: use-destructuring-assignment-to-extract-values-from-objects
---

# --description--

<dfn>Деструктуроване присвоєння</dfn> є спеціальним синтаксисом, представленим в ES6, за допомогою якого можна акуратно присвоювати значення, взяте прямо з об’єкта.

Розглянемо наступний приклад коду ES5:

```js
const user = { name: 'John Doe', age: 34 };

const name = user.name;
const age = user.age;
```

`name` матиме значення рядка `John Doe`, а `age` матиме значення числа `34`.

Ось еквівалентна інструкція присвоєння з деструктованим синтаксисом ES6:

```js
const { name, age } = user;
```

Знову ж таки, `name` матиме значення рядка `John Doe`, а `age` матиме значення числа `34`.

Тут будуть створені змінні `name` та `age`, а також їм будуть присвоєні значення (відповідно до значень з об’єкта `user`). Можете помітити, наскільки почистішав код.

Ви можете отримати потрібну кількість значень з потрібного вам об’єкта.

# --instructions--

Замініть два присвоєння на еквівалентні деструктуровані присвоєння. Вони досі повинні присвоювати змінним `today` та `tomorrow` значення `today` та `tomorrow` з об’єкта `HIGH_TEMPERATURES`.

# --hints--

Ви повинні видалити синтаксис присвоєння ES5.

```js
assert(
  !code.match(/today\s*=\s*HIGH_TEMPERATURES\.(today|tomorrow)/g)
);
```

Ви повинні використати деструктуризацію, щоб створити змінну `today`.

```js
assert(
  code.match(/(var|let|const)\s*{\s*(today[^}]*|[^,]*,\s*today)\s*}\s*=\s*HIGH_TEMPERATURES(;|\s+|\/\/)/g)
);
```

Ви повинні використати деструктуризацію, щоб створити змінну `tomorrow`.

```js
assert(
  code.match(/(var|let|const)\s*{\s*(tomorrow[^}]*|[^,]*,\s*tomorrow)\s*}\s*=\s*HIGH_TEMPERATURES(;|\s+|\/\/)/g)
);
```

`today` повинна дорівнювати `77`, а `tomorrow` повинна дорівнювати `80`.

```js
assert(today === 77 && tomorrow === 80);
```

# --seed--

## --seed-contents--

```js
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// Only change code below this line

const today = HIGH_TEMPERATURES.today;
const tomorrow = HIGH_TEMPERATURES.tomorrow;

// Only change code above this line
```

# --solutions--

```js
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

const { today, tomorrow } = HIGH_TEMPERATURES;
```
