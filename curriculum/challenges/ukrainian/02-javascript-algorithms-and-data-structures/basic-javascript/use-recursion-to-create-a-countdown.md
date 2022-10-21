---
id: 5cd9a70215d3c4e65518328f
title: Використовуйте рекурсію для створення зворотного відліку
challengeType: 1
forumTopicId: 305925
dashedName: use-recursion-to-create-a-countdown
---

# --description--

In a <a href="/learn/javascript-algorithms-and-data-structures/basic-javascript/replace-loops-using-recursion" target="_blank" rel="noopener noreferrer nofollow">previous challenge</a>, you learned how to use recursion to replace a `for` loop. Тепер подивимося на більш складну функцію, яка повертає масив послідовних чисел, починаючи з `1` до числа, переданого функції.

Як уже було згадано в попередньому завданні, це буде <dfn>base case</dfn>. Він повідомляє рекурсивній функції, коли їй більше не потрібно викликати саму себе. Це простий випадок, коли значення, яке повертається, вже відоме. Також існує <dfn>recursive call</dfn>, який виконує початкову функцію з різними параметрами. Якщо функція написана правильно, то буде досягнутий базовий випадок.

Наприклад, скажімо, ви хочете написати рекурсивну функцію, яка повертає масив, що містить числа від `1` до `n`. Цій функції потрібно прийняти параметр `n`, який означає остаточне число. Тоді їй потрібно викликати саму себе, поступово зменшуючи значення числа `n`, поки воно не досягне `1`. Ви можете написати функцію наступним чином:

```javascript
function countup(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countup(n - 1);
    countArray.push(n);
    return countArray;
  }
}
console.log(countup(5));
```

Значення `[1, 2, 3, 4, 5]` будуть відображені на консолі.

Спочатку це може здатися парадоксальним, адже значення `n` *зростає*, але значення у остаточному масиві *зростають*. Так відбувається, тому що підвищення відбувається останнім після рекурсивного виклику. У точці, де `n` вставляється в масив `countup(n - 1)` вже проаналізовано та повернуто `[1, 2, ..., n - 1]`.

# --instructions--

Ми вже визначили функцію під назвою `countdown` з одним параметром (`n`). Функція має використовувати рекурсію, щоб повернути масив, який містить цілі числа від `n` до `1` на основі параметра `n`. Якщо функція викликається числом меншим за 1, вона має повернути порожній масив. Наприклад, виклик цієї функції зі значенням `n = 5` має повернути масив `[5, 4, 3, 2, 1]`. Ваша функція має використовувати рекурсію шляхом виклику самої себе, але не повинна використовувати ніякі цикли.

# --hints--

`countdown(-1)` має повернути пустий масив.

```js
assert.isEmpty(countdown(-1));
```

`countdown(10)` має повернути `[10, 9, 8, 7, 6, 5, 4, 3, 2, 1]`

```js
assert.deepStrictEqual(countdown(10), [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
```

`countdown(5)` має повернути `[5, 4, 3, 2, 1]`

```js
assert.deepStrictEqual(countdown(5), [5, 4, 3, 2, 1]);
```

Ваш код не має опиратися на жодні цикли (`for`, `while` або функції більш високого порядку, такі як `forEach`, `map`, `filter`, and `reduce`).

```js
assert(
  !code.match(/for|while|forEach|map|filter|reduce/g)
);
```

Вам слід використати рекурсію, щоб вирішити цю проблему.

```js
assert(
  countdown.toString().match(/countdown\s*\(.+\)/)
);
```

Global variables should not be used to cache the array.

```js
countdown(1)
assert.deepStrictEqual(countdown(5), [5, 4, 3, 2, 1]);
```

# --seed--

## --seed-contents--

```js
// Only change code below this line
function countdown(n){
  return;
}
// Only change code above this line
```

# --solutions--

```js
function countdown(n){
   return n < 1 ? [] : [n].concat(countdown(n - 1));
}
```
