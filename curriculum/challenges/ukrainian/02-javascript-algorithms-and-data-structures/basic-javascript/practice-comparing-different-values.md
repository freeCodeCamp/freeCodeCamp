---
id: 599a789b454f2bbd91a3ff4d
title: Вчіться порівнювати різні значення
challengeType: 1
videoUrl: 'https://scrimba.com/c/cm8PqCa'
forumTopicId: 301174
dashedName: practice-comparing-different-values
---

# --description--

В останніх двох задачах, ми вивчили оператор рівності (`==`) та оператор абсолютної рівності (`===`). Пригадаймо пройдену інформацію та спробуймо використати ці оператори знову.

Якщо ми порівнюємо значення різних типів, то оператор рівності спершу конвертує типи, а потім обраховує значення. Однак, оператор абсолютної рівності порівнюватиме, як тип даних, так і значення у вихідному вигляді, не конвертуючи типи.

**Наприклад:**

`3 == '3'` повертає результат `true` тому, що JavaScript конвертує рядок у число. `3 === '3'` returns `false` because the types are different and type conversion is not performed.

**Примітка:** В JavaScript, ви можете визначити тип змінної або значення за допомогою оператора `typeof`, наступним чином:

```js
typeof 3
typeof '3'
```

`typeof 3` повертає рядок `number`, а `typeof '3'` повертає рядок `string`.

# --instructions--

Функція `compareEquality` в редакторі порівнює два значення за допомогою оператора рівності. Змініть функцію так, щоб вона повернула рядок `Equal` лише тоді, коли значення абсолютно рівні.

# --hints--

`compareEquality(10, "10")` повинен повертати рядок `Not Equal`

```js
assert(compareEquality(10, '10') === 'Not Equal');
```

`compareEquality("20", 20)` повинен повертати рядок `Not Equal`

```js
assert(compareEquality('20', 20) === 'Not Equal');
```

Ви повинні використати оператор `===`

```js
assert(code.match(/===/g));
```

# --seed--

## --seed-contents--

```js
// Setup
function compareEquality(a, b) {
  if (a == b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

compareEquality(10, "10");
```

# --solutions--

```js
function compareEquality(a,b) {
  if (a === b) {
    return "Equal";
  }
  return "Not Equal";
}
```
