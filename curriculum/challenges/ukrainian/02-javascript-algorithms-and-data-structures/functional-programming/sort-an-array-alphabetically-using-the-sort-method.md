---
id: 587d7da9367417b2b2512b69
title: Сортування масиву в алфавітному порядку за допомогою методу sort
challengeType: 1
forumTopicId: 18303
dashedName: sort-an-array-alphabetically-using-the-sort-method
---

# --description--

Метод `sort` сортує елементи масиву відповідно до функції зворотного виклику.

Наприклад:

```js
function ascendingOrder(arr) {
  return arr.sort(function(a, b) {
    return a - b;
  });
}

ascendingOrder([1, 5, 2, 3, 4]);
```

Поверненим значенням буде `[1, 2, 3, 4, 5]`.

```js
function reverseAlpha(arr) {
  return arr.sort(function(a, b) {
    return a === b ? 0 : a < b ? 1 : -1;
  });
}

reverseAlpha(['l', 'h', 'z', 'b', 's']);
```

Поверненим значенням буде `['z', 's', 'l', 'h', 'b']`.

Метод сортування JavaScript за замовчуванням – це значення Unicode, що може надати несподівані результати. Тому краще надавати функцію зворотного виклику, щоб визначити порядок сортування об’єктів масиву. Коли надається така функція зворотного виклику (зазвичай називається `compareFunction`), елементи масиву впорядковуються відповідно до її поверненого значення. Якщо `compareFunction(a,b)` повертає значення двох елементів (`a` та `b`) менше за 0, то `a` йтиме перед `b`. Якщо `compareFunction(a,b)` повертає значення двох елементів (`a` та `b`) більше за 0, то `b` йтиме перед `a`. Якщо `compareFunction(a,b)` повертає значення двох елементів (`a` та `b`) рівне 0, то `a` та `b` залишаться без змін.

# --instructions--

Використайте метод `sort` у функції `alphabeticalOrder`, щоб відсортувати елементи в `arr` за алфавітним порядком. Функція повинна повертати відсортований масив.

# --hints--

Ваш код повинен використовувати метод `sort`.

```js
assert(code.match(/\.sort/g));
```

`alphabeticalOrder(["a", "d", "c", "a", "z", "g"])` має повертати `["a", "a", "c", "d", "g", "z"]`.

```js
assert(
  JSON.stringify(alphabeticalOrder(['a', 'd', 'c', 'a', 'z', 'g'])) ===
    JSON.stringify(['a', 'a', 'c', 'd', 'g', 'z'])
);
```

`alphabeticalOrder(["x", "h", "a", "m", "n", "m"])` має повертати `["a", "h", "m", "m", "n", "x"]`.

```js
assert(
  JSON.stringify(alphabeticalOrder(['x', 'h', 'a', 'm', 'n', 'm'])) ===
    JSON.stringify(['a', 'h', 'm', 'm', 'n', 'x'])
);
```

`alphabeticalOrder(["a", "a", "a", "a", "x", "t"])` має повертати `["a", "a", "a", "a", "t", "x"]`.

```js
assert(
  JSON.stringify(alphabeticalOrder(['a', 'a', 'a', 'a', 'x', 't'])) ===
    JSON.stringify(['a', 'a', 'a', 'a', 't', 'x'])
);
```

# --seed--

## --seed-contents--

```js
function alphabeticalOrder(arr) {
  // Only change code below this line

  return arr
  // Only change code above this line
}

alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);
```

# --solutions--

```js
function alphabeticalOrder(arr) {
  return arr.sort();
}
```
