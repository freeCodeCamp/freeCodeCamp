---
id: 56533eb9ac21ba0edf2244c7
title: Доступ до властивостей об’єкту за допомогою точкової нотації
challengeType: 1
videoUrl: 'https://scrimba.com/c/cGryJs8'
forumTopicId: 16164
dashedName: accessing-object-properties-with-dot-notation
---

# --description--

Є два способи отримати доступ до властивостей об’єкту: точкова нотація (`.`) та дужкова нотація (`[]`), подібно до масиву.

Точкову нотацію використовують, якщо заздалегідь знають назву властивості, до якої намагаються отримати доступ.

Нижче наведено приклад точкової нотації (`.`) для прочитання властивостей об’єкта:

```js
const myObj = {
  prop1: "val1",
  prop2: "val2"
};

const prop1val = myObj.prop1;
const prop2val = myObj.prop2;
```

`prop1val` матиме значення рядка `val1`, а `prop2val` матиме значення рядка `val2`.

# --instructions--

Прочитайте значення властивостей `testObj`, використовуючи точкову нотацію. Встановіть змінну `hatValue` рівною властивостям об’єкта `hat` та встановіть змінну `shirtValue` рівною властивостям об’єкта `shirt`.

# --hints--

`hatValue` повинен бути рядком

```js
assert(typeof hatValue === 'string');
```

Значення `hatValue` повинне бути рядком `ballcap`

```js
assert(hatValue === 'ballcap');
```

`shirtValue` повинен бути рядком

```js
assert(typeof shirtValue === 'string');
```

Значення `shirtValue` повинне бути рядком `jersey`

```js
assert(shirtValue === 'jersey');
```

Ви повинні використати точкову нотацію двічі

```js
assert(code.match(/testObj\.\w+/g).length > 1);
```

# --seed--

## --after-user-code--

```js
(function(a,b) { return "hatValue = '" + a + "', shirtValue = '" + b + "'"; })(hatValue,shirtValue);
```

## --seed-contents--

```js
// Setup
const testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

// Only change code below this line
const hatValue = testObj;      // Change this line
const shirtValue = testObj;    // Change this line
```

# --solutions--

```js
const testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

const hatValue = testObj.hat;
const shirtValue = testObj.shirt;
```
