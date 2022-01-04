---
id: 5cfa550e84205a357704ccb6
title: Використовуйте деструктивне привласнення для визначення змінних із масивів
challengeType: 1
forumTopicId: 301216
dashedName: use-destructuring-assignment-to-extract-values-from-objects
---

# --description--

<dfn>Призначення деструктуризації</dfn> є спеціальним синтаксисом, запровадженим у ES6, для чіткого призначення параметрів, взятих безпосередньо з об'єкта.

Розглянемо наступний приклад коду ES5:

```js
const user = { name: 'John Doe', age: 34 };

const name = user.name;
const age = user.age;
```

`name` матиме значення рядка `John Doe`, and `age` матиме значення числа `34`.

Ось аналогічна інструкція з використання синтаксису деструкції ES6:

```js
const { name, age } = user;
```

Отже, `name` стане рядком `John Doe`, and `age` матиме значення числа `34`.

Тут змінні `name` та `age` будуть створені і призначені значення їх відповідних значень об'єкта `user`. Ви можете побачити наскільки стало простіше.

Ви можете отримати потрібну кількість значень з потрібного вам об'єкта.

# --instructions--

Замініть два визначення еквівалентами з деструктивного привласнення. Ви все ще призначаєте змінним `today` and `tomorrow` значення `today` та `tomorrow` з об'єкту `HIGH_TEMPERATURES`.

# --hints--

Видаліть призначення синтаксису ES5.

```js
assert(
  !code.match(/today\s*=\s*HIGH_TEMPERATURES\.(today|tomorrow)/g)
);
```

Використовуйте деструкцію, щоб створити змінну `today`.

```js
assert(
  code.match(/(var|let|const)\s*{\s*(today[^}]*|[^,]*,\s*today)\s*}\s*=\s*HIGH_TEMPERATURES(;|\s+|\/\/)/g)
);
```

Використовуйте деструкцію, щоб створити змінну `tomorrow`.

```js
assert(
  code.match(/(var|let|const)\s*{\s*(tomorrow[^}]*|[^,]*,\s*tomorrow)\s*}\s*=\s*HIGH_TEMPERATURES(;|\s+|\/\/)/g)
);
```

`today` буде рівним `77` та `tomorrow` дорівнюватиме `80`.

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
