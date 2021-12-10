---
id: 56533eb9ac21ba0edf2244c7
title: Доступ до властивостей об'єкту за допомогою крапкових знаків
challengeType: 1
videoUrl: 'https://scrimba.com/c/cGryJs8'
forumTopicId: 16164
dashedName: accessing-object-properties-with-dot-notation
---

# --description--

Є два способи доступу до властивостей об'єкту: крапковий запис (`.`) та запис за допомогою квадратних дужок (`[]`), подібні до масиву.

Крапковий запис, це те, що ви використовуєте, коли ви знаєте назву властивості, до якої намагаєтеся отримати доступ.

Нижче наведено приклад крапкового запису (`.`) для прочитання властивостей об'єкта:

```js
const myObj = {
  prop1: "val1",
  prop2: "val2"
};

const prop1val = myObj.prop1;
const prop2val = myObj.prop2;
```

`prop1val` матиме значення рядка `val1`, і `prop2val` матиме значення рядка `val2`.

# --instructions--

Прочитайте значення властивостей `testObj`, використовуючи крапковий запис. Встановіть змінну `hatValue` рівну властивостям об'єкта `hat` і встановіть змінну `shirtValue` рівну властивостям об'єкта `shirt`.

# --hints--

`hatValue` має бути рядком

```js
assert(typeof hatValue === 'string');
```

Значення `hatValue` має бути рядком `ballcap`

```js
assert(hatValue === 'ballcap');
```

`shirtValue` має бути рядком

```js
assert(typeof shirtValue === 'string');
```

Значення `shirtValue` має бути рядком `jersey`

```js
assert(shirtValue === 'jersey');
```

Використовувати крапковий запис потрібно двічі

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
