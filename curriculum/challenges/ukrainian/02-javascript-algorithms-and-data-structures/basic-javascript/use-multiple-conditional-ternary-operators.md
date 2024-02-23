---
id: 587d7b7e367417b2b2512b21
title: Використання декількох умовних (тернарних) операторів
challengeType: 1
videoUrl: 'https://scrimba.com/c/cyWJBT4'
forumTopicId: 301179
dashedName: use-multiple-conditional-ternary-operators
---

# --description--

У попередньому завданні ви використовували одинарний умовний оператор. Ви також можете об’єднати їх для того, щоб перевірити декілька умов.

Наступна функція використовує інструкції `if`, `else if` та `else`, щоб перевірити декілька умов:

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

Використайте декілька умовних операторів у функції `checkSign`, дотримуючись рекомендованого формату, використаного у `findGreaterOrEqual`, щоб перевірити, чи число додатнє, від’ємне або дорівнює нулю. Функція повинна повертати `positive`, `negative` або `zero`.

# --hints--

`checkSign` має використовувати декілька умовних операторів

```js
assert(/.+?\s*?\?\s*?.+?\s*?:\s*?.+?\s*?\?\s*?.+?\s*?:\s*?.+?/gi.test(code));
```

`checkSign(10)` має повертати рядок `positive`. Зверніть увагу на те, що важливе написання з великої/малої літери

```js
assert(checkSign(10) === 'positive');
```

`checkSign(-12)` має повертати рядок `negative`. Зверніть увагу на те, що важливе написання з великої/малої літери

```js
assert(checkSign(-12) === 'negative');
```

`checkSign(0)` має повертати рядок `zero`. Зверніть увагу на те, що важливе написання з великої/малої літери

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
