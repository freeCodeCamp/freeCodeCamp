---
id: 661e275a8602567c118451d7
title: Вивчіть масиви та цикли. Запитання G
challengeType: 15
dashedName: learn-arrays-and-loops-question-g
---

# --description--

Ви вже знаєте про найпоширеніші способи ітерувати над значеннями та масивами, тому розглянемо й інші способи ітерації над масивами. Масиви мають вбудований метод під назвою `map()`, який використовують для створення нового масиву, застосовуючи функцію до кожного елемента вхідного масиву. Метод `map()` не змінює вхідний масив. Синтаксис методу `map()` такий:

```javascript
const array = [1, 2, 3, 4, 5];

const newArray = array.map((arrayValue) => {
  return arrayValue * 2;
});

console.log(newArray); // Output: [2, 4, 6, 8, 10]
```

Метод `map()` створює новий масив, застосовуючи функцію `(arrayValue) => { return arrayValue * 2;` до кожного елемента вхідного масиву. Це особливо корисно, якщо потрібно змінити елементи масиву, не змінюючи вхідний масив.

# --question--

## --text--

Яким буде вивід даного фрагменту коду JavaScript?

```javascript
const numbers = [1, 2, 3, 4, 5];
const newNumbers = numbers.map((number) => {
  return number * 3;
});

console.log(newNumbers);
```

## --answers--

`[1, 2, 3, 4, 5]`

---

`[3, 6, 9, 12, 15]`

---

`[1, 3, 5, 7, 9]`

---

`[3, 6, 9, 12, 15, 18]`

## --video-solution--

2
