---
id: 587d7b89367417b2b2512b4a
title: Деструктуроване присвоєння для присвоєння змінних з вкладених об’єктів
challengeType: 1
forumTopicId: 301214
dashedName: use-destructuring-assignment-to-assign-variables-from-nested-objects
---

# --description--

Ви можете використовувати принципи з попередніх завдань, щоб деструктурувати значення з вкладених об’єктів.

Використовуючи об’єкт, схожий до попередніх прикладів:

```js
const user = {
  johnDoe: { 
    age: 34,
    email: 'johnDoe@freeCodeCamp.com'
  }
};
```

Ось так ми отримуємо значення властивостей об’єкта та присвоюємо їх до змінних з однаковою назвою:

```js
const { johnDoe: { age, email }} = user;
```

А ось так ми можемо присвоїти значення властивостей об’єкта до змінних з іншою назвою:

```js
const { johnDoe: { age: userAge, email: userEmail }} = user;
```

# --instructions--

Замініть два присвоєння на еквівалентні деструктуровані присвоєння. Вони досі повинні присвоювати змінним `lowToday` та `highToday` значення `today.low` та `today.high` з об’єкта `LOCAL_FORECAST`.

# --hints--

Ви повинні видалити синтаксис присвоєння ES5.

```js
assert(
  !code.match(/lowToday = LOCAL_FORECAST\.today\.low/g) &&
    !code.match(/highToday = LOCAL_FORECAST\.today.high/g)
);
```

Ви повинні використати деструктуризацію, щоб створити змінну `lowToday`.

```js
assert(
  code.match(
    /(var|const|let)\s*{\s*today\s*:\s*{\s*(low\s*:\s*lowToday[^}]*|[^,]*,\s*low\s*:\s*lowToday\s*)},?\s*}\s*=\s*LOCAL_FORECAST(;|\s+|\/\/)/g
  )
);
```

Ви повинні використати деструктуризацію, щоб створити змінну `highToday`.

```js
assert(
  code.match(
    /(var|const|let)\s*{\s*today\s*:\s*{\s*(high\s*:\s*highToday[^}]*|[^,]*,\s*high\s*:\s*highToday,?\s*)},?\s*}\s*=\s*LOCAL_FORECAST(;|\s+|\/\/)/g
  )
);
```

`lowToday` повинна дорівнювати `64`, а `highToday` повинна дорівнювати `77`.

```js
assert(lowToday === 64 && highToday === 77);
```

# --seed--

## --seed-contents--

```js
const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

// Only change code below this line

const lowToday = LOCAL_FORECAST.today.low;
const highToday = LOCAL_FORECAST.today.high;

// Only change code above this line
```

# --solutions--

```js
const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

const { today: { low: lowToday, high: highToday }} = LOCAL_FORECAST;
```
