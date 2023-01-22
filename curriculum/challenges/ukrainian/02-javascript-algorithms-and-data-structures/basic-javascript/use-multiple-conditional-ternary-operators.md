---
id: 587d7b7e367417b2b2512b21
title: Використання декількох умовних (трикомпонентних) операторів
challengeType: 1
videoUrl: 'https://scrimba.com/c/cyWJBT4'
forumTopicId: 301179
dashedName: use-multiple-conditional-ternary-operators
---

# --description--

У попередньому завданні ви використовували одинарний умовний оператор. Ви також можете їх об'єднати для того, щоб перевірити декілька умов.

Наступна функція використовує `if`, `else if`, а також `else` твердження, щоб перевірити декілька умов:

```js
function findGreaterOrEqual(a, b) {
  if (a === b) {
    return "a and b are equal";
  }
  else if (a > b) {
    return "a is greater";
  }
  else {
    return "b is greater";
  }
}
```

Вказану вище функцію можна переписати, використовуючи декілька умовних операторів:

```js
function findGreaterOrEqual(a, b) {
  return (a === b) ? "a and b are equal" 
    : (a > b) ? "a is greater" 
    : "b is greater";
}
```

Найкращою практикою вважають відформатування декількох умовних операторів таким чином, що кожна умова буде знаходитися в окремому рядку, як вказано вище. Використання декількох умовних операторів без правильних відступів може ускладнити читання вашого коду. Наприклад:

```js
function findGreaterOrEqual(a, b) {
  return (a === b) ? "a and b are equal" : (a > b) ? "a is greater" : "b is greater";
}
```

# --instructions--

У функції `checkSign`, використовуйте декілька умовних операторів, дотримуючись рекомендованого формату, що використаний у `findGreaterOrEqual` - для того, щоб перевірити чи число додатнє, від'ємне або нуль. Функція має повернути `positive`, `negative` or `zero`.

# --hints--

`checkSign` має використовувати декілька умовних операторів

```js
assert(/.+?\s*?\?\s*?.+?\s*?:\s*?.+?\s*?\?\s*?.+?\s*?:\s*?.+?/gi.test(code));
```

`checkSign(10)` повинен повертати рядок `positive`. Зверніть увагу на те, що написання з великої літери - важливе

```js
assert(checkSign(10) === 'positive');
```

`checkSign(-12)` повинен повертати рядок `negative`. Зверніть увагу на те, що написання з великої літери - важливе

```js
assert(checkSign(-12) === 'negative');
```

`checkSign(0)` повинен повертати рядок `zero`. Зверніть увагу на те, що написання з великої літери - важливе

```js
assert(checkSign(0) === 'zero');
```

# --seed--

## --seed-contents--

```js
function checkSign(num) {

}

checkSign(10);
```

# --solutions--

```js
function checkSign(num) {
  return (num > 0) ? 'positive' : (num < 0) ? 'negative' : 'zero';
}
```
