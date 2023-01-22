---
id: 587d7da9367417b2b2512b69
title: Сортування масиву в алфавітному порядку за допомогою сортувального методу
challengeType: 1
forumTopicId: 18303
dashedName: sort-an-array-alphabetically-using-the-sort-method
---

# --description--

Метод `sort` сортує елементи масиву відповідно до функції зворотного зв'язку.

Наприклад:

```js
function ascendingOrder(arr) {
  return arr.sort(function(a, b) {
    return a - b;
  });
}

ascendingOrder([1, 5, 2, 3, 4]);
```

Це б повернуло значення `[1, 2, 3, 4, 5]`.

```js
function reverseAlpha(arr) {
  return arr.sort(function(a, b) {
    return a === b ? 0 : a < b ? 1 : -1;
  });
}

reverseAlpha(['l', 'h', 'z', 'b', 's']);
```

Це б повернуло значення `['z', 's', 'l', 'h', 'b']`.

Типовий метод сортування JavaScript полягає в сортуванні рядкових точок Unicode, що може видавати неочікувані результати. Таким чином, це заохотить виклик функції зворотнього зв'язку, що визначить порядок сортування об'єктів масиву. Коли подана така функція зворотного зв'язку, яка зазвичай називається `compareFunction`, то елементи масиву відсортовуються відповідно до зворотнього значення `compareFunction`: Якщо `compareFunction(a,b)` видає значення менше за 0 для двох елементів `a` і `b`, тоді `a` переміститься перед `b`. Якщо `compareFunction(a,b)` видає значення більше 0 для двох елементів `a` і `b`, тоді `b` переміститься перед `a`. Якщо `compareFunction(a,b)` видає значення рівне 0 для двох елементів `a` і `b`, то `a` і `b` залишаться без змін.

# --instructions--

Використовуйте метод `sort` у функції `alphabeticalOrder`, щоб відсортувати елементи `arr` в алфавітному порядку. Функція має повернути впорядкований масив.

# --hints--

Ваш код повинен використовувати метод `sort`.

```js
assert(code.match(/\.sort/g));
```

`alphabeticalOrder(["a", "d", "c", "a", "z", "g"])` має видати `["a", "a", "c", "d", "g", "z"]`.

```js
assert(
  JSON.stringify(alphabeticalOrder(['a', 'd', 'c', 'a', 'z', 'g'])) ===
    JSON.stringify(['a', 'a', 'c', 'd', 'g', 'z'])
);
```

`alphabeticalOrder(["x", "h", "a", "m", "n", "m"])` має видати `["a", "h", "m", "m", "n", "x"]`.

```js
assert(
  JSON.stringify(alphabeticalOrder(['x', 'h', 'a', 'm', 'n', 'm'])) ===
    JSON.stringify(['a', 'h', 'm', 'm', 'n', 'x'])
);
```

`alphabeticalOrder(["a", "a", "a", "a", "x", "t"])` має видати `["a", "a", "a", "a", "t", "x"]`.

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
