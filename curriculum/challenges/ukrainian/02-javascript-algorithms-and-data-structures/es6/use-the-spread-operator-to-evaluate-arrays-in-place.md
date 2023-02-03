---
id: 587d7b89367417b2b2512b48
title: Використання оператора розширення для оцінки масивів
challengeType: 1
forumTopicId: 301222
dashedName: use-the-spread-operator-to-evaluate-arrays-in-place
---

# --description--

ES6 пропонує <dfn>оператор розширення</dfn>, який дозволяє розширювати масиви та інші вирази в місцях, де очікуються декілька параметрів чи елементів.

Нижчеподаний код ES5 використовує `apply()`, щоб вирахувати максимальне значення в масиві:

```js
var arr = [6, 89, 3, 45];
var maximus = Math.max.apply(null, arr);
```

`maximus` матиме значення `89`.

Нам потрібно було використати `Math.max.apply(null, arr)`, оскільки `Math.max(arr)` повертає `NaN`. `Math.max()` очікує аргументи, розділені комою, а не масив. Оператор розширення робить синтаксис читабельнішим та зручнішим в користуванні.

```js
const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr);
```

`maximus` матиме значення `89`.

`...arr` повертає розпакований масив. Іншими словами, це *розширює* масив. Однак оператор розширення працює лише на місці, наприклад, в аргументі функції чи літералі масиву. Наступний код не буде працювати:

```js
const spreaded = ...arr;
```

# --instructions--

Скопіюйте весь вміст `arr1` до іншого масиву `arr2`, використовуючи оператор розширення.

# --hints--

`arr2` повинен бути правильною копією `arr1`.

```js
assert(arr2.every((v, i) => v === arr1[i]) && arr2.length);
```

Для дублювання `arr1` потрібно використати оператор розширення (`...`).

```js
assert(code.match(/Array\(\s*\.\.\.arr1\s*\)|\[\s*\.\.\.arr1\s*\]/));
```

`arr2` повинен залишатись без змін, а `arr1` повинен бути зміненим.

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
