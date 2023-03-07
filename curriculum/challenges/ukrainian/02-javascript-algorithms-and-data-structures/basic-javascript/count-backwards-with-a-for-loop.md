---
id: 56105e7b514f539506016a5e
title: Зворотній рахунок за допомогою циклу for
challengeType: 1
videoUrl: 'https://scrimba.com/c/c2R6BHa'
forumTopicId: 16808
dashedName: count-backwards-with-a-for-loop
---

# --description--

Цикл for може здійснювати зворотній рахунок, якщо ми визначимо правильні умови.

Для того, щоб значення зменшувалось на два при кожній ітерації, потрібно змінити ініціалізацію, умову та кінцевий вираз.

Розпочнемо з `i = 10` та будемо повторяти цикл, поки `i > 0`. Кожного циклу ми зменшуватимемо `i` на 2 за допомогою `i -= 2`.

```js
const ourArray = [];

for (let i = 10; i > 0; i -= 2) {
  ourArray.push(i);
}
```

Тепер `ourArray` міститиме `[10, 8, 6, 4, 2]`. Змінімо нашу ініціалізацію та кінцевий вираз, щоб ми могли рахувати у зворотньому напрямку по два та створити масив непарних чисел у порядку спадання.

# --instructions--

Додайте непарні числа від 9 до 1 до `myArray`, використовуючи цикл `for`.

# --hints--

Ви повинні використати цикл `for`.

```js
assert(/for\s*\([^)]+?\)/.test(code));
```

Ви повинні використати метод масиву `push`.

```js
assert(code.match(/myArray.push/));
```

`myArray` має дорівнювати `[9, 7, 5, 3, 1]`.

```js
assert.deepEqual(myArray, [9, 7, 5, 3, 1]);
```

# --seed--

## --after-user-code--

```js
if(typeof myArray !== "undefined"){(function(){return myArray;})();}
```

## --seed-contents--

```js
// Setup
const myArray = [];

// Only change code below this line

```

# --solutions--

```js
const myArray = [];
for (let i = 9; i > 0; i -= 2) {
  myArray.push(i);
}
```
