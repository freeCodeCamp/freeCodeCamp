---
id: 587d7b88367417b2b2512b44
title: Написання стрілкових функцій з параметрами
challengeType: 1
forumTopicId: 301223
dashedName: write-arrow-functions-with-parameters
---

# --description--

До стрілкової функції так само можна передати аргументи, як і до звичайної.

```js
const doubler = (item) => item * 2;
doubler(4);
```

`doubler(4)` повертатиме значення `8`.

Якщо стрілкова функція має один параметр, то дужки можна опустити.

```js
const doubler = item => item * 2;
```

До стрілкової функції можна передати більше одного аргументу.

```js
const multiplier = (item, multi) => item * multi;
multiplier(4, 2);
```

`multiplier(4, 2)` повертатиме значення `8`.

# --instructions--

Перепишіть функцію `myConcat`, яка додає вміст `arr2` до `arr1`, щоб функція використовувала синтаксис стрілкової функції.

# --hints--

Ви повинні замінити ключове слово `var`.

```js
assert.notMatch(code, /var/g);
```

`myConcat` повинна бути константною змінною (використовуйте `const`).

```js
assert.match(code, /const\s+myConcat/g);
```

`myConcat` повинна бути стрілковою функцією з двома параметрами

```js
assert(
  /myConcat=\(\w+,\w+\)=>/.test(code.replace(/\s/g, '')) &&
    typeof myConcat === 'function'
);
```

`myConcat()` має повертати `[1, 2, 3, 4, 5]`.

```js
assert.deepEqual(myConcat([1, 2], [3, 4, 5]), [1, 2, 3, 4, 5]);
```

Не використовуйте ключове слово `function`.

```js
assert.notMatch(code, /function/g);
```

# --seed--

## --seed-contents--

```js
var myConcat = function(arr1, arr2) {
  return arr1.concat(arr2);
};

console.log(myConcat([1, 2], [3, 4, 5]));
```

# --solutions--

```js
const myConcat = (arr1, arr2) =>  {
  return arr1.concat(arr2);
};

console.log(myConcat([1, 2], [3, 4, 5]));
```
