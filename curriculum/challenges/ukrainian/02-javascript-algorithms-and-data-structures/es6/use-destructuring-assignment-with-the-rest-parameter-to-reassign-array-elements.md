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
const testArr_ = [1, 2, 3, 4, 5];
const testArrWORemoved_ = removeFirstTwo(testArr_);
assert(testArrWORemoved_.every((e, i) => e === i + 3) && testArrWORemoved_.length === 3);
```

`removeFirstTwo()` не має змінювати `list`

```js
const testArr_ = [1, 2, 3, 4, 5];
const testArrWORemoved_ = removeFirstTwo(testArr_);
assert(testArr_.every((e, i) => e === i + 1) && testArr_.length === 5);
```

Не використовуйте `Array.slice()`.

```js
(getUserInput) => assert(!getUserInput('index').match(/slice/g));
```

Використайте деструктуризацію на `list`.

```js
assert(
  __helpers
    .removeWhiteSpace(code)
    .match(/\[(([_$a-z]\w*)?,){1,}\.\.\.shorterList\]=list/i)
);
```

# --seed--

## --seed-contents--

```js
function removeFirstTwo(list) {
  // Only change code below this line
  const shorterList = list; // Change this line
  // Only change code above this line
  return shorterList;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);
```

# --solutions--

```js
function removeFirstTwo(list) {
  const [, , ...shorterList] = list;
  return shorterList;
}

const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sourceWithoutFirstTwo = removeFirstTwo(source);
```
