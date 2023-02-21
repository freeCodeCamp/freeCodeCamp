---
id: 5675e877dbd60be8ad28edc6
title: Ітерація масиву за допомогою циклу for
challengeType: 1
videoUrl: 'https://scrimba.com/c/caeR3HB'
forumTopicId: 18216
dashedName: iterate-through-an-array-with-a-for-loop
---

# --description--

У JavaScript часто доводиться перебрати вміст масиву. Це можна зробити за допомогою циклу `for`. Цей код виводитиме кожен елемент масиву `arr` на консоль:

```js
const arr = [10, 9, 8, 7, 6];

for (let i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}
```

Пам’ятайте, що масиви мають індексацію на основі нуля і це означає, що останнім індексом масиву є `length - 1`. Нашою умовою для цього циклу є `i < arr.length`, який зупиняє цикл, коли `i` дорівнює `length`. У цьому випадку останньою ітерацією є `i === 4`, тобто коли `i` дорівнює `arr.length - 1` і виводить `6` на консоль. Тоді `i` збільшується до `5`, і цикл закінчується через те, що `i < arr.length` є `false`.

# --instructions--

Оголосіть та ініціалізуйте змінну `total` до `0`. Використайте цикл `for`, щоб додати значення кожного елемента масиву `myArr` до `total`.

# --hints--

`total` повинна бути оголошеною та ініціалізованою до 0.

```js
assert(code.match(/(var|let|const)\s*?total\s*=\s*0.*?;?/));
```

`total` має дорівнювати 20.

```js
assert(total === 20);
```

Ви повинні використати цикл `for`, щоб перебрати `myArr`.

```js
assert(/for\s*\(/g.test(code) && /myArr\s*\[/g.test(code));
```

Не потрібно намагатися напряму присвоїти значення 20 до `total`.

```js
assert(!__helpers.removeWhiteSpace(code).match(/total[=+-]0*[1-9]+/gm));
```

# --seed--

## --after-user-code--

```js
(function(){if(typeof total !== 'undefined') { return "total = " + total; } else { return "total is undefined";}})()
```

## --seed-contents--

```js
// Setup
const myArr = [2, 3, 4, 5, 6];

// Only change code below this line

```

# --solutions--

```js
const myArr = [2, 3, 4, 5, 6];
let total = 0;

for (let i = 0; i < myArr.length; i++) {
  total += myArr[i];
}
```
