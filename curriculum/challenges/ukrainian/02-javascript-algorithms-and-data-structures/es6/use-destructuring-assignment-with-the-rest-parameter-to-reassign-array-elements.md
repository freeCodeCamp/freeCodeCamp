---
id: 587d7b8a367417b2b2512b4c
title: >-
  Деструктуризація через залишкові елементи
challengeType: 1
forumTopicId: 301218
dashedName: >-
  use-destructuring-assignment-with-the-rest-parameter-to-reassign-array-elements
---

# --description--

У деяких ситуаціях, які стосуються деструктуризації масивів, потрібно зберегти залишки елементів в окремому масиві.

Результат схожий на `Array.prototype.slice()`, як показано нижче:

```js
const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b);
console.log(arr);
```

У такому разі консоль відображатиме значення `1, 2` та `[3, 4, 5, 7]`.

Змінні `a` та `b` приймають перше та друге значення з масиву. Після цього, оскільки є залишковий синтаксис, `arr` отримує решту значень у формі масиву. Залишковий елемент працює правильно лише у вигляді останньої змінної списку. Тому залишковий синтаксис неможливо використовувати для збору підмасиву, який не містить останній елемент вихідного масиву.

# --instructions--

Використайте деструктуроване присвоєння з залишковим синтаксисом, щоб емулювати поведінку `Array.prototype.slice()`. `removeFirstTwo()` має повернути підмасив вихідного масиву `list` з пропущеними першими двома елементами.

# --hints--

`removeFirstTwo([1, 2, 3, 4, 5])` має бути `[3, 4, 5]`

```js
assert.deepEqual(removeFirstTwo([1, 2, 3, 4, 5]), [3, 4, 5]);
```

`removeFirstTwo()` не має змінювати `list`

```js
const _testArr = [1, 2, 3, 4, 5];
removeFirstTwo(_testArr);
assert.deepEqual(_testArr, [1, 2, 3, 4, 5])
```

Не використовуйте `Array.slice()`.

```js
assert(!__helpers.removeJSComments(code).match(/\.\s*slice\s*\(/));
```

Використайте залишковий синтаксис.

```js
assert.match(code, /\.\.\./);
```

# --seed--

## --seed-contents--

```js
function removeFirstTwo(list) {
  return list;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);
```

# --solutions--

```js
function removeFirstTwo(list) {
  // comment with 'slice' to check comments are removed in tests
  const [, , ...shorterList] = list;
  return shorterList;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);
```
