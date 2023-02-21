---
id: 599a789b454f2bbd91a3ff4d
title: Порівняння різних значень на практиці
challengeType: 1
videoUrl: 'https://scrimba.com/c/cm8PqCa'
forumTopicId: 301174
dashedName: practice-comparing-different-values
---

# --description--

В останніх двох завданнях ми вивчили оператор рівності (`==`) та оператор строгої рівності (`===`). Пригадаємо пройдену інформацію та попрактикуємо ці оператори знову.

Якщо ми порівнюємо значення різних типів, то оператор рівності спочатку конвертує їх, а потім вирахує значення. А ось оператор строгої рівності порівнюватиме тип даних та значення у вихідному вигляді, не конвертуючи їх.

**Приклади**

`3 == '3'` повертає `true`, оскільки JavaScript конвертує рядок у число. `3 === '3'` повертає `false`, оскільки це різні типи і конвертація не виконується.

**Примітка:** у JavaScript можна визначити тип змінної або значення за допомогою оператора `typeof`, ось так:

```js
typeof 3
typeof '3'
```

`typeof 3` повертає рядок `number`, а `typeof '3'` повертає рядок `string`.

# --instructions--

Функція `compareEquality` в редакторі порівнює два значення за допомогою оператора рівності. Змініть функцію так, щоб вона повернула рядок `Equal` лише тоді, коли значення строго рівні.

# --hints--

`compareEquality(10, "10")` має повертати рядок `Not Equal`

```js
assert(compareEquality(10, '10') === 'Not Equal');
```

`compareEquality("20", 20)` має повертати рядок `Not Equal`

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
