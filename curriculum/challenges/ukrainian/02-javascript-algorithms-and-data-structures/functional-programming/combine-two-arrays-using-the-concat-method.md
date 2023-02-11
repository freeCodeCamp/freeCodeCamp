---
id: 587d7da9367417b2b2512b66
title: Об’єднання двох масивів за допомогою методу concat
challengeType: 1
forumTopicId: 301229
dashedName: combine-two-arrays-using-the-concat-method
---

# --description--

<dfn>Конкатенація</dfn> – це склеювання елементів. JavaScript пропонує метод `concat` для рядків та масивів, який працює однаково для обох. Щодо масивів: метод викликається на масиві, потім інший масив надається як аргумент до `concat` та додається до кінця першого масиву. Він повертає новий масив та не змінює жодного з вихідних масивів. Ось приклад:

```js
[1, 2, 3].concat([4, 5, 6]);
```

Поверненим масивом буде `[1, 2, 3, 4, 5, 6]`.

# --instructions--

Використайте метод `concat` у функції `nonMutatingConcat`, щоб конкатенувати `attach` до кінця `original`. Функція повинна повернути конкатенований масив.

# --hints--

Ваш код повинен використовувати метод `concat`.

```js
assert(code.match(/\.concat/g));
```

Масив `first` не повинен змінюватись.

```js
assert(JSON.stringify(first) === JSON.stringify([1, 2, 3]));
```

Масив `second` не повинен змінюватись.

```js
assert(JSON.stringify(second) === JSON.stringify([4, 5]));
```

`nonMutatingConcat([1, 2, 3], [4, 5])` має повертати `[1, 2, 3, 4, 5]`.

```js
assert(
  JSON.stringify(nonMutatingConcat([1, 2, 3], [4, 5])) ===
    JSON.stringify([1, 2, 3, 4, 5])
);
```

# --seed--

## --seed-contents--

```js
function nonMutatingConcat(original, attach) {
  // Only change code below this line


  // Only change code above this line
}

const first = [1, 2, 3];
const second = [4, 5];
nonMutatingConcat(first, second);
```

# --solutions--

```js
function nonMutatingConcat(original, attach) {
  return original.concat(attach);
}
const first = [1, 2, 3];
const second = [4, 5];
```
