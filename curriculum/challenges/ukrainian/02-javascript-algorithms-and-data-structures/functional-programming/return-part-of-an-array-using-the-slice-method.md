---
id: 587d7b90367417b2b2512b65
title: Повернення частини масиву за допомогою методу slice
challengeType: 1
forumTopicId: 301239
dashedName: return-part-of-an-array-using-the-slice-method
---

# --description--

Метод `slice` повертає копію певних елементів масиву. Він може приймати два аргументи: перший надає індекс, де починається слайс, а другий є індексом, де слайс закінчується (не включно). Якщо аргументи не надані, то початок і кінець відповідають початкові і кінцеві масиву, що є найлегшим способом створити копію масиву. Метод `slice` не змінює вихідний масив, а повертає новий.

Ось приклад:

```js
const arr = ["Cat", "Dog", "Tiger", "Zebra"];
const newArray = arr.slice(1, 3);
```

`newArray` матиме значення `["Dog", "Tiger"]`.

# --instructions--

Використайте метод `slice` у функції `sliceArray`, щоб повернути частину масиву `anim`, врахувавши надані індекси `beginSlice` та `endSlice`. Функція повинна повертати масив.

# --hints--

Ваш код повинен використовувати метод `slice`.

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

`sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 1, 3)` має повертати `["Dog", "Tiger"]`.

```js
assert(
  JSON.stringify(sliceArray(['Cat', 'Dog', 'Tiger', 'Zebra', 'Ant'], 1, 3)) ===
    JSON.stringify(['Dog', 'Tiger'])
);
```

`sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 0, 1)` має повертати `["Cat"]`.

```js
assert(
  JSON.stringify(sliceArray(['Cat', 'Dog', 'Tiger', 'Zebra', 'Ant'], 0, 1)) ===
    JSON.stringify(['Cat'])
);
```

`sliceArray(["Cat", "Dog", "Tiger", "Zebra", "Ant"], 1, 4)` має повертати `["Dog", "Tiger", "Zebra"]`.

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
