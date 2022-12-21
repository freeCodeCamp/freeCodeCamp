---
id: 56533eb9ac21ba0edf2244c0
title: Глобальна та Локальна Область видимості в роботі
challengeType: 1
videoUrl: 'https://scrimba.com/c/c2QwKH2'
forumTopicId: 18194
dashedName: global-vs--local-scope-in-functions
---

# --description--

<dfn>Локальні</dfn> та <dfn>глобальні</dfn> змінні можна використовувати з одним і тим самим іменем. Коли ви це зробите, локальна змінна має перевагу над глобальною змінною.

У цьому прикладі:

```js
const someVar = "Hat";

function myFun() {
  const someVar = "Head";
  return someVar;
}
```

Функція `myFun` поверне рядок `Head`, оскільки присутній місцевий варіант змінної.

# --instructions--

Додайте локальну змінну до функції `myOutfit`, щоб перевизначити значення `outerWear` з рядком `sweater`.

# --hints--

Краще не змінювати значення глобального `outerWear`.

```js
assert(outerWear === 'T-Shirt');
```

`myOutfit` повинен повертати рядок `sweater`.

```js
assert(myOutfit() === 'sweater');
```

Не можна змінювати оператор повернення.

```js
assert(/return outerWear/.test(code));
```

# --seed--

## --seed-contents--

```js
// Setup
const outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line

  // Only change code above this line
  return outerWear;
}

myOutfit();
```

# --solutions--

```js
const outerWear = "T-Shirt";
function myOutfit() {
  const outerWear = "sweater";
  return outerWear;
}
```
