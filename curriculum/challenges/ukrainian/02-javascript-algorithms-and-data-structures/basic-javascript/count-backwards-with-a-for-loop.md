---
id: 56105e7b514f539506016a5e
title: Зворотній рахунок за допомогою циклу For Loop
challengeType: 1
videoUrl: 'https://scrimba.com/c/c2R6BHa'
forumTopicId: 16808
dashedName: count-backwards-with-a-for-loop
---

# --description--

Цикл For Loop може здійснювати зворотній відлік, якщо виставлені правильні умови.

Для того, щоб зменшити значення на два кроки, потрібно змінити нашу ініціалізацію, умову та кінцевий вираз.

Розпочнемо з `i = 10` та створимо цикл, коли `i > 0`. Зменшуватимемо значення `i` на 2 в кожному циклі при тому, що`i -= 2`.

```js
const ourArray = [];

for (let i = 10; i > 0; i -= 2) {
  ourArray.push(i);
}
```

`ourArray` тепер міститиме `[10, 8, 6, 4, 2]`. Змінімо нашу ініціалізацію та кінцевий вираз і тоді ми зможемо відраховувати назад на два, щоб створити масив непарних чисел у порядку спадання.

# --instructions--

Додайте непарні числа від 9 до 1 до `myArray`, використовуючи цикл `for`.

# --hints--

Для цього потрібно використовувати цикл `for`.

```js
assert(/for\s*\([^)]+?\)/.test(code));
```

Потрібно використовувати метод масиву `push`.

```js
assert(code.match(/myArray.push/));
```

`myArray` повинне дорівнювати `[9, 7, 5, 3, 1]`.

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
