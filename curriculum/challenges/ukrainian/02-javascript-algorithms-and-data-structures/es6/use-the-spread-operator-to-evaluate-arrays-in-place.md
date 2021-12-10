---
id: 587d7b89367417b2b2512b48
title: Використовуйте спред оператор для оцінки аналізу масиву
challengeType: 1
forumTopicId: 301222
dashedName: use-the-spread-operator-to-evaluate-arrays-in-place
---

# --description--

ES6 представляє собою <dfn>spread operator</dfn>, який дозволяє розширювати масиви та інші елементи.

Код ES5 нижче використовує `apply()` для розрахунку максимального значення в масиві:

```js
var arr = [6, 89, 3, 45];
var maximus = Math.max.apply(null, arr);
```

`maximus` повинен мати значення `89`.

Ми використали `Math.max.apply(null, arr)` тому що `Math.max(arr)` повертає `NaN`. `Math.max()` виконується через спільний аргумент, а не масив. Спред оператор робить синтаксис більш читабельним та зручним в обслуговуванні.

```js
const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr);
```

`maximus` повинен мати значення `89`.

`...arr` перетворюється в відкритий масив. Іншими словами, це *поширює* масив. Проте, спред оператор працює тільки всередині, як аргумент в функції або літери в масиві. Наступний код не буде працювати:

```js
const spreaded = ...arr;
```

# --instructions--

Скопіюйте весь вміст `arr1` в інший масив `arr2` використовуючи спред оператор.

# --hints--

Масив `arr2` має бути правильною копією `arr1`.

```js
assert(arr2.every((v, i) => v === arr1[i]) && arr2.length);
```

`...` спред оператор використовується для дублювання `arr1`.

```js
assert(code.match(/Array\(\s*\.\.\.arr1\s*\)|\[\s*\.\.\.arr1\s*\]/));
```

`arr2` має залишатися без змін, в той час як `arr1` було змінено.

```js
assert((arr1, arr2) => {
  arr1.push('JUN');
  return arr2.length < arr1.length;
});
```

# --seed--

## --seed-contents--

```js
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [];  // Change this line

console.log(arr2);
```

# --solutions--

```js
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];
```
