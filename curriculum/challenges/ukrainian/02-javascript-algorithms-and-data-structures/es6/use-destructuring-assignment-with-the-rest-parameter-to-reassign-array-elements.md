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

Використовуйте деструктивне привласнення з рештою параметрів `Array.prototype.slice()`, так як `arr` є підмасивом оригінального масиву `source` з опущеними двома елементами.

# --hints--

`arr` має бути `[3,4,5,6,7,8,9,10]`

```js
assert(arr.every((v, i) => v === i + 3) && arr.length === 8);
```

`source` має бути `[1,2,3,4,5,6,7,8,9,10]`

```js
assert(source.every((v, i) => v === i + 1) && source.length === 10);
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
    .match(/\[(([_$a-z]\w*)?,){1,}\.\.\.arr\]=list/i)
);
```

# --seed--

## --seed-contents--

```js
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  // Only change code below this line
  const arr = list; // Change this line
  // Only change code above this line
  return arr;
}
const arr = removeFirstTwo(source);
```

# --solutions--

```js
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  const [, , ...arr] = list;
  return arr;
}
const arr = removeFirstTwo(source);
```
