---
id: 56104e9e514f539506016a5c
title: Ітерація непарних чисел за допомогою циклу for
challengeType: 1
videoUrl: 'https://scrimba.com/c/cm8n7T9'
forumTopicId: 18212
dashedName: iterate-odd-numbers-with-a-for-loop
---

# --description--

Цикли for не обов’язково повинні додавати одиницю кожної ітерації. Змінюючи наш `final-expression`, ми можемо перерахувати лише парні числа.

Розпочнемо з `i = 0` та створимо цикл, коли `i < 10`. Кожного циклу ми збільшуватимемо `i` на 2 за допомогою `i += 2`.

```js
const ourArray = [];

for (let i = 0; i < 10; i += 2) {
  ourArray.push(i);
}
```

Тепер `ourArray` міститиме `[0, 2, 4, 6, 8]`. Змінимо нашу `initialization` так, щоб ми могли перерахувати непарні числа.

# --instructions--

Додайте непарні числа від 1 до 9 до `myArray`, використовуючи цикл `for`.

# --hints--

Ви повинні використати цикл `for`.

```js
assert(/for\s*\([^)]+?\)/.test(code));
```

`myArray` має дорівнювати `[1, 3, 5, 7, 9]`.

```js
assert.deepEqual(myArray, [1, 3, 5, 7, 9]);
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
for (let i = 1; i < 10; i += 2) {
  myArray.push(i);
}
```
