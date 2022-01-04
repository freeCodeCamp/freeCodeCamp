---
id: 587d7b88367417b2b2512b47
title: Використання параметру скидання і параметру функцій
challengeType: 1
forumTopicId: 301221
dashedName: use-the-rest-parameter-with-function-parameters
---

# --description--

Щоб створити гнучкіші функції, ES6 пропонує <dfn>параметр скидання</dfn> для параметрів функцій. За допомогою параметра скидання можна створити функції зі змінною кількістю аргументів. Ці аргументи зберігаються в масиві, який буде доступний пізніше з внутрішньої функції.

Погляньте на цей код:

```js
function howMany(...args) {
  return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2));
console.log(howMany("string", null, [1, 2, 3], { }));
```

Консоль відображатиме рядки `You have passed 3 arguments.` і `You have passed 4 arguments.`.

Параметр скидання усуває потребу в перевірці `args` масиву і дає змогу застосувати `map()`, `filter()` і `reduce()` у масиві параметрів.

# --instructions--

Змініть функції `sum` за допомогою параметру скидання у такий спосіб, щоб функція `sum` могла прийняти будь-яку кількість аргументів і повернути їх суму.

# --hints--

Результатом `sum(0,1,2)` має бути 3

```js
assert(sum(0, 1, 2) === 3);
```

Результатом `sum(1,2,3,4)` має бути 10

```js
assert(sum(1, 2, 3, 4) === 10);
```

Результатом `sum(5)` має бути 5

```js
assert(sum(5) === 5);
```

Результатом `sum()` має бути 0

```js
assert(sum() === 0);
```

`sum` має бути функцією зі стрілкою, що використовує синтаксис параметру скидання (`...`) у параметрі `args`.

```js
assert(__helpers.removeWhiteSpace(code).match(/sum=\(\.\.\.args\)=>/));
```

# --seed--

## --seed-contents--

```js
const sum = (x, y, z) => {
  const args = [x, y, z];
  return args.reduce((a, b) => a + b, 0);
}
```

# --solutions--

```js
const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
}
```
