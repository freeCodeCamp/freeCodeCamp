---
id: 56104e9e514f539506016a5c
title: Ітерація непарних чисел у циклі for
challengeType: 1
videoUrl: 'https://scrimba.com/c/cm8n7T9'
forumTopicId: 18212
dashedName: iterate-odd-numbers-with-a-for-loop
---

# --description--

Цикли for не повинні повторювати один одного по черзі. При зміні `final-expression`ми можемо порахувати парними числами.

Розпочнемо з `i = 0` та створимо цикл, коли `i < 10`. Збільшуватимемо значення `i` на 2 в кожному циклі при тому, що `i += 2`.

```js
const ourArray = [];

for (let i = 0; i < 10; i += 2) {
  ourArray.push(i);
}
```

`ourArray` тепер міститиме `[0, 2, 4, 6, 8]`. Тепер змінимо нашу `initialization` так, щоб ми могли рахувати за непарними числами.

# --instructions--

Додайте непарні числа від 1 до 9 до `myArray`, використовуючи цикл `for`.

# --hints--

Для цього потрібно використовувати цикл `for`.

```js
assert(/for\s*\([^)]+?\)/.test(code));
```

`myArray` повинне дорівнювати `[1, 3, 5, 7, 9]`.

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
