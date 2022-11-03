---
id: 587d7b8a367417b2b2512b4c
title: >-
  Використовуйте решту параметрів з деструктивним призначенням для перепризначення масиву елементів
challengeType: 1
forumTopicId: 301218
dashedName: >-
  use-destructuring-assignment-with-the-rest-parameter-to-reassign-array-elements
---

# --description--

У деяких ситуаціях нам потрібно зберегти елементи в окремий масив.

Результат схожий на `Array.prototype.slice()`, як показано нижче:

```js
const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b);
console.log(arr);
```

У такому разі консоль відображатиме значення `1, 2` та `[3, 4, 5, 7]`.

Змінні `a` та `b` приймають перші та другі значення з масиву. Після цього, завдяки параметру `arr` решта значень подаються у масиві. Решта елементів працює тільки-но у вигляді останньої змінної списку. Як і в даних, ви не можете використовувати інший параметр для охоплення підмасиву, який залишає останній елемент вихідного масиву.

# --instructions--

Use a destructuring assignment with the rest parameter to emulate the behavior of `Array.prototype.slice()`. `removeFirstTwo()` should return a sub-array of the original array `list` with the first two elements omitted.

# --hints--

`removeFirstTwo([1, 2, 3, 4, 5])` should be `[3, 4, 5]`

```js
const testArr_ = [1, 2, 3, 4, 5];
const testArrWORemoved_ = removeFirstTwo(testArr_);
assert(testArrWORemoved_.every((e, i) => e === i + 3) && testArrWORemoved_.length === 3);
```

`removeFirstTwo()` should not modify `list`

```js
const testArr_ = [1, 2, 3, 4, 5];
const testArrWORemoved_ = removeFirstTwo(testArr_);
assert(testArr_.every((e, i) => e === i + 1) && testArr_.length === 5);
```

`Array.slice()` не варто використовувати.

```js
(getUserInput) => assert(!getUserInput('index').match(/slice/g));
```

Необхідно використовувати деструктуризацію `list`.

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
