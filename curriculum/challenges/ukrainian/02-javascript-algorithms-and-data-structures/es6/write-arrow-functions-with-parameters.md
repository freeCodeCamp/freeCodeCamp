---
id: 587d7b88367417b2b2512b44
title: Запис функції Arrow з параметрами
challengeType: 1
forumTopicId: 301223
dashedName: write-arrow-functions-with-parameters
---

# --description--

Так само, як і у звичайній функції, ви можете передавати аргументи в функцію Arrow.

```js
const doubler = (item) => item * 2;
doubler(4);
```

`doubler(4)` повинен перетворюватись на `8`.

Якщо функція arrow має один параметр, то дужки можуть бути опущені.

```js
const doubler = item => item * 2;
```

Функція може вміщати в себе більше одного аргументу.

```js
const multiplier = (item, multi) => item * multi;
multiplier(4, 2);
```

`multiplier(4, 2)` повинен перетворюватись на `8`.

# --instructions--

Перепишіть функцію `myConcat`, яка додає вміст `arr2` до `arr1`, щоб функція використовувала синтаксис функції arrow.

# --hints--

Вам слід замінити ключове слово `var`.

```js
assert.notMatch(code, /var/g);
```

`myConcat` має бути постійною змінною (використовуйте `const`).

```js
assert.match(code, /const\s+myConcat/g);
```

`myConcat` має бути функцією з 2 параметрами

```js
assert(
  /myConcat=\(\w+,\w+\)=>/.test(code.replace(/\s/g, '')) &&
    typeof myConcat === 'function'
);
```

`myConcat()` перетворюється на `[1, 2, 3, 4, 5]`.

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
