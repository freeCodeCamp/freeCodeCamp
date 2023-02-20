---
id: cf1111c1c12feddfaeb3bdef
title: Використання умовної логіки з інструкцією if
challengeType: 1
videoUrl: 'https://scrimba.com/c/cy87mf3'
forumTopicId: 18348
dashedName: use-conditional-logic-with-if-statements
---

# --description--

Інструкції `if` використовують для прийняття рішень у коді. Ключове слово `if` вказує JavaScript виконати код у фігурних дужках за певних умов, вказаних у круглих дужках. Ці умови ще називаються булевими умовами (`Boolean`), і вони можуть бути лише `true` або `false`.

Якщо умова оцінена як `true`, програма виконує інструкцію у фігурних дужках. Якщо булева умова оцінена як `false`, команда у фігурних дужках не виконується.

**Псевдокод**

<blockquote>if (<i>умова оцінена як true</i>) {<br>  <i>інструкція виконується</i><br>}</blockquote>

**Приклад**

```js
function test (myCondition) {
  if (myCondition) {
    return "It was true";
  }
  return "It was false";
}

test(true);
test(false);
```

`test(true)` повертає рядок `It was true`, а `test(false)` повертає рядок `It was false`.

Коли `test` викликається зі значенням `true`, інструкція `if` оцінює `myCondition`, щоб побачити чи умова `true`. Оскільки вона `true`, функція повертає `It was true`. Коли ми викликаємо `test` зі значенням `false`, то `myCondition` *не* оцінюється як `true`, інструкція у круглих дужках не виконується та функція повертає `It was false`.

# --instructions--

Створіть інструкцію `if` всередині функції, щоб повернути `Yes, that was true`, якщо параметр `wasThatTrue` є `true` та повернути `No, that was false` у протилежному випадку.

# --hints--

`trueOrFalse` має бути функцією

```js
assert(typeof trueOrFalse === 'function');
```

`trueOrFalse(true)` має повертати рядок

```js
assert(typeof trueOrFalse(true) === 'string');
```

`trueOrFalse(false)` має повертати рядок

```js
assert(typeof trueOrFalse(false) === 'string');
```

`trueOrFalse(true)` має повертати рядок `Yes, that was true`

```js
assert(trueOrFalse(true) === 'Yes, that was true');
```

`trueOrFalse(false)` має повертати рядок `No, that was false`

```js
assert(trueOrFalse(false) === 'No, that was false');
```

# --seed--

## --seed-contents--

```js
function trueOrFalse(wasThatTrue) {
  // Only change code below this line



  // Only change code above this line

}
```

# --solutions--

```js
function trueOrFalse(wasThatTrue) {
  if (wasThatTrue) {
    return "Yes, that was true";
  }
  return "No, that was false";
}
```
