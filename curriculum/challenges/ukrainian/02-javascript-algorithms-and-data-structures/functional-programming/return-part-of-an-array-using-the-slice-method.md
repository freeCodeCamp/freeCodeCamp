---
id: 587d7b90367417b2b2512b65
title: Повернення частини масиву з використанням методу slice
challengeType: 1
forumTopicId: 301239
dashedName: return-part-of-an-array-using-the-slice-method
---

# --description--

Метод «`slice`» повертає копію певних елементів масиву. Він використовує два аргументи: перший бере індекс, де починається slice, і другий — це індекс, де slice закінчується (не включно). Якщо аргументи не надані, то за замовчуванням - почати з початку масиву і дійти до кінця, що є не найлегшим способом скопіювати весь масив. Метод «`slice`» не змінює вихідний масив, але повертає новий.

Ось приклад:

```js
const arr = ["Cat", "Dog", "Tiger", "Zebra"];
const newArray = arr.slice(1, 3);
```

`newArray` матиме значення `["Dog", "Tiger"]`.

# --instructions--

Використовуйте метод «`slice`» у функції `sliceArray` для того, щоб повернути частину масиву `anim`, що обумовлений наданими індексами `beginSlice` та `endSlice`. Функція повинна повертати масив.

# --hints--

Використовуйте метод «`slice`» у своєму коді.

```js
assert(code.match(/\.slice/g));
```

Змінна `inputAnim` не повинна змінюватися.

```js
assert(
  JSON.stringify(inputAnim) ===
    JSON.stringify(['Cat', 'Dog', 'Tiger', 'Zebra', 'Ant'])
);
```

`sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 1, 3)` повинен повертатися як `["Dog", "Tiger"]`.

```js
assert(
  JSON.stringify(sliceArray(['Cat', 'Dog', 'Tiger', 'Zebra', 'Ant'], 1, 3)) ===
    JSON.stringify(['Dog', 'Tiger'])
);
```

`sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 0, 1)` повинен повертатися як `["Cat"]`.

```js
assert(
  JSON.stringify(sliceArray(['Cat', 'Dog', 'Tiger', 'Zebra', 'Ant'], 0, 1)) ===
    JSON.stringify(['Cat'])
);
```

`sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 1, 4)` повинен повертатися як `["Dog", "Tiger", "Zebra"]`.

```js
assert(
  JSON.stringify(sliceArray(['Cat', 'Dog', 'Tiger', 'Zebra', 'Ant'], 1, 4)) ===
    JSON.stringify(['Dog', 'Tiger', 'Zebra'])
);
```

# --seed--

## --seed-contents--

```js
function sliceArray(anim, beginSlice, endSlice) {
  // Only change code below this line


  // Only change code above this line
}

const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);
```

# --solutions--

```js
function sliceArray(anim, beginSlice, endSlice) {
  return anim.slice(beginSlice, endSlice);
}
const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
```
