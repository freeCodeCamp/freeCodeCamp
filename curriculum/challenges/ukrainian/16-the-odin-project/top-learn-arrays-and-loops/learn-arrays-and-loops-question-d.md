---
id: 661e27588602567c118451d4
title: Вивчіть масиви та цикли. Запитання D
challengeType: 15
dashedName: learn-arrays-and-loops-question-d
---

# --description--

Одними з найскладніших методів, які використовують з масивами, є `splice()` та `slice()`. Метод `splice()` змінює вміст масиву, видаляючи або замінюючи елемент в масиві. Метод `slice()` повертає поверхневу копію частини масиву від `begin` до `end` (не включаючи `end`) у вигляді нового об’єкту. Вхідний масив не змінюється.

Наприклад, щоб видалити другий елемент з масиву `characters`, можна використати такий код:

```javascript
const characters = ['Harry', 'Ron', 'Hermione'];
characters.splice(1, 1);
console.log(characters); // Output: ['Harry', 'Hermione']
```

У прикладі вище видалено другий елемент з масиву `characters`. Метод `splice()` приймає два аргументи: індекс елемента, який потрібно видалити, та кількість елементів, які потрібно видалити.


Щоб створити новий масив з другим елементом масиву `character`, можна використати такий код:

```javascript
const characters = ['Harry', 'Ron', 'Hermione'];
const newCharacters = characters.slice(1, 2);
console.log(newCharacters); // Output: ['Ron']
```

У прикладі вище створено новий масив `newCharacters`, який містить другий елемент з масиву `characters`. Метод `slice()` приймає два аргументи: індекс елемента, з якого починається розріз, та індекс елемента, де розріз закінчується (його не включено).

# --question--

## --text--

Яким буде вивід даного фрагменту коду JavaScript?


```javascript
const numbers = [10, 20, 30, 40, 50];
numbers.splice(3, 1);
const slicedNumbers = numbers.slice(2, 4);

console.log(numbers);
console.log(slicedNumbers);
```

## --answers--

Виводом `numbers` буде `[10, 20, 30, 50]`, а `slicedNumbers` — `[30, 50]`

---

Виводом `numbers` буде `[10, 20, 30, 40]`, а `slicedNumbers` — `[30, 40]`

---

Виводом `numbers` буде `[10, 20, 50, 40]`, а `slicedNumbers` — `[20, 50]`

---

Виводом `numbers` буде `[10, 20, 30, 50, 40]`, а `slicedNumbers` — `[30, 50]`

## --video-solution--

1
