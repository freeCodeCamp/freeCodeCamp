---
id: 587d7da9367417b2b2512b67
title: Додавання елементів в кінець масиву за допомогою concat замість push
challengeType: 1
forumTopicId: 301226
dashedName: add-elements-to-the-end-of-an-array-using-concat-instead-of-push
---

# --description--

Найважливішим у функційному програмуванні є створення та використання незмінних функцій.

У попередньому завданні ви дізнались про метод `concat`, за допомогою якого можна злити масиви в один, не змінюючи початкові масиви. Порівняйте метод `concat` з методом `push`. `push` додає елементи в кінець того масиву, в якому викликаний, тим самим змінюючи його. Ось приклад:

```js
const arr = [1, 2, 3];
arr.push(4, 5, 6);
```

`arr` матиме змінене значення `[1, 2, 3, 4, 5, 6]`, що не відповідає функційному програмуванню.

`concat` надає можливість додавати нові елементи в кінець масиву без побічних ефектів.

# --instructions--

Змініть функцію `nonMutatingPush` так, щоб вона використовувала `concat`, аби додати `newItem` в кінець `original`, не змінюючи масиви `original` чи `newItem`. Функція повинна повертати масив.

# --hints--

Ваш код повинен використовувати метод `concat`.

```js
assert(code.match(/\.concat/g));
```

Ваш код не повинен використовувати метод `push`.

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

`nonMutatingPush([1, 2, 3], [4, 5])` має повертати `[1, 2, 3, 4, 5]`.

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
