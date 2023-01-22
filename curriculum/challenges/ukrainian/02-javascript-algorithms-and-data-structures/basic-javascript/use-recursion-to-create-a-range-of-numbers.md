---
id: 5cc0bd7a49b71cb96132e54c
title: Використання рекурсії для створення діапазону чисел
challengeType: 1
forumTopicId: 301180
dashedName: use-recursion-to-create-a-range-of-numbers
---

# --description--

Продовжуючи попереднє завдання, ми пропонуємо вам ще одну можливість створити рекурсивну функцію для вирішення проблеми.

# --instructions--

Ми визначили функцію під назвою `rangeOfNumbers` з двома параметрами. Функція повинна повернути масив цілих чисел, що починаються з числа, представленого параметром `startNum` і закінчується числом, яке представлене параметром `endNum`. Початкове число завжди буде меншим або рівним кінцевому номеру. Ваша функція має використовувати рекурсію, викликаючи сама себе, але не повинна використовувати якісь цикли. Вона також повинна працювати у випадках, коли`startNum` і `endNum` однакові.

# --hints--

Ваша функція повинна повертати масив.

```js
assert(Array.isArray(rangeOfNumbers(5, 10)));
```

У вашому коді не повинні використовуватися ніякі циклічні синтаксичні структури (`for` або `while` або функції вищого порядку, такі як `forEach`, `map`, `filter`, або `reduce`).

```js
assert(
  !code.match(/for|while|forEach|map|filter|reduce/g)
);
```

`rangeOfNumbers` повинен використовувати рекурсію (викликати самого себе) для вирішення цьгого завдання.

```js
assert(
  rangeOfNumbers.toString().match(/rangeOfNumbers\s*\(.+\)/)
);
```

`rangeOfNumbers(1, 5)` повинен повертати `[1, 2, 3, 4, 5]`.

```js
assert.deepStrictEqual(rangeOfNumbers(1, 5), [1, 2, 3, 4, 5]);
```

`rangeOfNumbers(6, 9)` повинен повертати `[6, 7, 8, 9]`.

```js
assert.deepStrictEqual(rangeOfNumbers(6, 9), [6, 7, 8, 9]);
```

`rangeOfNumbers(4, 4)` повинен повертати `[4]`.

```js
assert.deepStrictEqual(rangeOfNumbers(4, 4), [4]);
```

Global variables should not be used to cache the array.

```js
rangeOfNumbers(1, 3)
assert.deepStrictEqual(rangeOfNumbers(6, 9), [6, 7, 8, 9]);
```

# --seed--

## --seed-contents--

```js
function rangeOfNumbers(startNum, endNum) {
  return [];
};
```

# --solutions--

```js
function rangeOfNumbers(startNum, endNum) {
  if (endNum - startNum === 0) {
    return [startNum];
  } else {
    const numbers = rangeOfNumbers(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  }
}
```
