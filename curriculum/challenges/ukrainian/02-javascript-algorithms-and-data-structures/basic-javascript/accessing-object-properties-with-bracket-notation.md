---
id: 56533eb9ac21ba0edf2244c8
title: Доступ до властивостей об’єкту за допомогою дужкової нотації
challengeType: 1
videoUrl: 'https://scrimba.com/c/cBvmEHP'
forumTopicId: 16163
dashedName: accessing-object-properties-with-bracket-notation
---

# --description--

Другим способом отримати доступ до властивостей об’єкта є дужкова нотація (`[]`). Якщо властивість об’єкта, до якої ви намагаєтеся отримати доступ, має пропуск у назві, потрібно використати дужкову нотацію.

Однак дужкову нотацію можна використовувати і для властивостей об’єкта без пропусків.

Нижче наведено приклад дужкової нотації для прочитання властивостей об’єкта:

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

`myObj["Space Name"]` буде рядком `Kirk`, `myObj['More Space']` буде рядком `Spock`, а `myObj["NoSpace"]` буде рядком `USS Enterprise`.

Зауважте, що назви властивостей з пробілами повинні бути в лапках (одинарних або подвійних).

# --instructions--

Прочитайте значення властивостей `an entree` та `the drink` в `testObj`, використовуючи дужкову нотацію, та призначте їх до `entreeValue` та `drinkValue` відповідно.

# --hints--

`entreeValue` повинен бути рядком

```js
assert(typeof entreeValue === 'string');
```

Значення `entreeValue` повинне бути рядком `hamburger`

```js
assert(entreeValue === 'hamburger');
```

`drinkValue` повинне бути рядком

```js
assert(typeof drinkValue === 'string');
```

Значення `drinkValue` повинне бути рядком `water`

```js
assert(drinkValue === 'water');
```

Ви повинні використати дужкову нотацію двічі

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
