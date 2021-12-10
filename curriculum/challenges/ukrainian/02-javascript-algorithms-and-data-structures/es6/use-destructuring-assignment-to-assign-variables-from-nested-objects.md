---
id: 587d7b89367417b2b2512b4a
title: Використовуйте деструктивне привласнення для визначення змінних із масивів
challengeType: 1
forumTopicId: 301214
dashedName: use-destructuring-assignment-to-assign-variables-from-nested-objects
---

# --description--

Слідуйте тим самим принципам, що і у попередніх 2 уроках, які були присвячені визначенню змінних із масивів.

Використовуйте змінну схожу до попередніх масивів:

```js
const user = {
  johnDoe: { 
    age: 34,
    email: 'johnDoe@freeCodeCamp.com'
  }
};
```

Розглянемо приклад, як отримати значення властивостей об'єкта та призначити їх змінним із таким самим ім'ям:

```js
const { johnDoe: { age, email }} = user;
```

Приклад того, як ви можете призначити значення з різними іменами:

```js
const { johnDoe: { age: userAge, email: userEmail }} = user;
```

# --instructions--

Замініть два визначення еквівалентами з деструктивного привласнення. Ви все ще призначаєте змінним `lowToday` та `highToday` значення `today.low` та `today.high` з об'єкту `LOCAL_FORECAST`.

# --hints--

Видаліть призначення синтаксису ES5.

```js
assert(
  !code.match(/lowToday = LOCAL_FORECAST\.today\.low/g) &&
    !code.match(/highToday = LOCAL_FORECAST\.today.high/g)
);
```

Використовуйте деструкцію, щоб створити змінну `lowToday`.

```js
assert(
  code.match(
    /(var|const|let)\s*{\s*today\s*:\s*{\s*(low\s*:\s*lowToday[^}]*|[^,]*,\s*low\s*:\s*lowToday\s*)}\s*}\s*=\s*LOCAL_FORECAST(;|\s+|\/\/)/g
  )
);
```

Використовуйте деструкцію, щоб створити змінну `highToday`.

```js
assert(
  code.match(
    /(var|const|let)\s*{\s*today\s*:\s*{\s*(high\s*:\s*highToday[^}]*|[^,]*,\s*high\s*:\s*highToday\s*)}\s*}\s*=\s*LOCAL_FORECAST(;|\s+|\/\/)/g
  )
);
```

`lowToday` повинна дорівнювати `64` та `highToday</code має бути рівний <code>77`.

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
