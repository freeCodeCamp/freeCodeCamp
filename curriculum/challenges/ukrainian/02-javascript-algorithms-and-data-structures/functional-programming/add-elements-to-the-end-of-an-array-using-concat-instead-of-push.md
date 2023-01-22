---
id: 587d7da9367417b2b2512b67
title: Додати елементи в кінець масиву за допомогою контикату  замість натискання
challengeType: 1
forumTopicId: 301226
dashedName: add-elements-to-the-end-of-an-array-using-concat-instead-of-push
---

# --description--

Функціональне програмування - це створення та використання функцій, що не змінюються.

The last challenge introduced the `concat` method as a way to merge arrays into a new array without mutating the original arrays. Порівняйте метод `concat` з методом `push`. `push` adds items to the end of the same array it is called on, which mutates that array. Ось один із прикладів:

```js
const arr = [1, 2, 3];
arr.push(4, 5, 6);
```

`arr` would have a modified value of `[1, 2, 3, 4, 5, 6]`, which is not the functional programming way.

`concat` offers a way to merge new items to the end of an array without any mutating side effects.

# --instructions--

Change the `nonMutatingPush` function so it uses `concat` to merge `newItem` to the end of `original` without mutating `original` or `newItem` arrays. Функція повинна повертати масив.

# --hints--

Ваш код повинен застосовувати метод `concat`.

```js
assert(code.match(/\.concat/g));
```

Не застосовуйте метод `push` у вашому коді.

```js
assert(!code.match(/\.?[\s\S]*?push/g));
```

Масив `first` не повинен змінюватись.

```js
assert(JSON.stringify(first) === JSON.stringify([1, 2, 3]));
```

Масив `second` не повинен змінюватись.

```js
assert(JSON.stringify(second) === JSON.stringify([4, 5]));
```

`nonMutatingConcat([1, 2, 3], [4, 5])` повинен змінюватися на  `[1, 2, 3, 4, 5]`.

```js
assert(
  JSON.stringify(nonMutatingPush([1, 2, 3], [4, 5])) ===
    JSON.stringify([1, 2, 3, 4, 5])
);
```

# --seed--

## --seed-contents--

```js
function nonMutatingPush(original, newItem) {
  // Only change code below this line
  return original.push(newItem);

  // Only change code above this line
}

const first = [1, 2, 3];
const second = [4, 5];
nonMutatingPush(first, second);
```

# --solutions--

```js
function nonMutatingPush(original, newItem) {
  return original.concat(newItem);
}
const first = [1, 2, 3];
const second = [4, 5];
```
