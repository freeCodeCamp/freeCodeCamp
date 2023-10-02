---
id: 5cc0bd7a49b71cb96132e54c
title: Використання рекурсії для створення діапазону чисел
challengeType: 1
forumTopicId: 301180
dashedName: use-recursion-to-create-a-range-of-numbers
---

# --description--

Продовжуючи попереднє завдання, ми пропонуємо створити рекурсивну функцію ще раз, щоб розв’язати завдання.

# --instructions--

Ми визначили функцію під назвою `rangeOfNumbers` з двома параметрами. Функція повинна повернути масив цілих чисел, що починається з числа, представленого параметром `startNum` і закінчується числом, представленим параметром `endNum`. Початкове число завжди буде меншим або дорівнюватиме кінцевому числу. Ваша функція повинна використовувати рекурсію, викликаючи саму себе, та не повинна використовувати цикли. Вона також повинна працювати, якщо `startNum` та `endNum` однакові.

# --hints--

Ваша функція повинна повертати масив.

```js
assert(Array.isArray(rangeOfNumbers(5, 10)));
```

Ваш код не повинен використовувати синтаксиси циклу (`for`, `while` або функції вищого порядку, як-от `forEach`, `map`, `filter` або `reduce`).

```js
assert(
  !code.match(/for|while|forEach|map|filter|reduce/g)
);
```

`rangeOfNumbers` має використовувати рекурсію (викликати саму себе), щоб розв’язати це завдання.

```js
assert(
  rangeOfNumbers.toString().match(/rangeOfNumbers\s*\(.+\)/)
);
```

`rangeOfNumbers(1, 5)` має повертати `[1, 2, 3, 4, 5]`.

```js
assert.deepStrictEqual(rangeOfNumbers(1, 5), [1, 2, 3, 4, 5]);
```

`rangeOfNumbers(6, 9)` має повертати `[6, 7, 8, 9]`.

```js
assert.deepStrictEqual(rangeOfNumbers(6, 9), [6, 7, 8, 9]);
```

`rangeOfNumbers(4, 4)` має повертати `[4]`.

```js
assert.deepStrictEqual(rangeOfNumbers(4, 4), [4]);
```

Не використовуйте глобальні змінні для кешування масиву.

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
