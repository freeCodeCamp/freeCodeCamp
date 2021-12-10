---
id: 56533eb9ac21ba0edf2244c8
title: Доступ до властивостей об'єкту за допомогою дужкової нотації
challengeType: 1
videoUrl: 'https://scrimba.com/c/cBvmEHP'
forumTopicId: 16163
dashedName: accessing-object-properties-with-bracket-notation
---

# --description--

Наступний спосіб отримати доступ до властивостей об'єкта - це використати дужкову нотацію (`[]`). Якщо характеристика об'єкта, до якого ви намагаєтеся отримати доступ, має пропуск у назві, потрібно використовувати квадратні дужки.

Однак, ви також можете використовувати дужкову нотацію для характеристик об'єкта без пропусків.

Нижче наведено приклад використання дужкової нотації для прочитання характеристик об'єкта:

```js
const myObj = {
  "Space Name": "Kirk",
  "More Space": "Spock",
  "NoSpace": "USS Enterprise"
};

myObj["Space Name"];
myObj['More Space'];
myObj["NoSpace"];
```

`myObj["Space Name"]` зміниться на `Kirk`, `myObj['More Space']` зміниться на`Spock`, і `myObj["NoSpace"]` зміниться на `USS Enterprise`.

Зауважте, що значення імен з пробілами, повинні бути в лапках (одинарних або подвійних).

# --instructions--

Прочитайте значення властивостей `an entree` і `the drink` в `testObj` використовуючи запис у квадратних дужках, та зазначте їх як `entreeValue` і `drinkValue` відповідно.

# --hints--

`entreeValue` має бути рядком

```js
assert(typeof entreeValue === 'string');
```

Значення `entreeValue` має бути рядком `hamburger`

```js
assert(entreeValue === 'hamburger');
```

`drinkValue` має бути рядком

```js
assert(typeof drinkValue === 'string');
```

Значення `drinkValue` має бути рядком `water`

```js
assert(drinkValue === 'water');
```

Потрібно використовувати квадратні дужки двічі

```js
assert(code.match(/testObj\s*?\[('|")[^'"]+\1\]/g).length > 1);
```

# --seed--

## --after-user-code--

```js
(function(a,b) { return "entreeValue = '" + a + "', drinkValue = '" + b + "'"; })(entreeValue,drinkValue);
```

## --seed-contents--

```js
// Setup
const testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

// Only change code below this line
const entreeValue = testObj;   // Change this line
const drinkValue = testObj;    // Change this line
```

# --solutions--

```js
const testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};
const entreeValue = testObj["an entree"];
const drinkValue = testObj['the drink'];
```
