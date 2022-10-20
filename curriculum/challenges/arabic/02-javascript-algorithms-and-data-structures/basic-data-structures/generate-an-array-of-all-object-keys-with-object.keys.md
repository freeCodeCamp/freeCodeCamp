---
id: 587d7b7d367417b2b2512b1e
title: إنشاء قائمة (Array) من جميع هُوِيَّات الكائن (Object Keys) باستخدام Object.keys()
challengeType: 1
forumTopicId: 301160
dashedName: generate-an-array-of-all-object-keys-with-object-keys
---

# --description--

يمكننا أيضا إنشاء array تحتوي على جميع الهُوِيَّات المخزنة في object باستخدام method تدعي `Object.keys()`. تأخذ هذه الطريقة (method) كائن (object) كحجة (argument) وتنتج قائمة من المقاطع (array of strings) تمثل كل خاصية (property) في الكائن (object). مرة أخرى، لن يكون هناك ترتيب محدد للمدخلات في القائمة.

# --instructions--

انهي كتابة وظيفة `getArrayOfUsers` بحيث تنتج قائمة تحتوي على جميع الخصائص في الكائن الذي تتلقاه كحجة (argument).

# --hints--

يجب أن يحتوي كائن `users` فقط على الهُوِيَّات `Alan`, و `Jeff`, و `Sarah`, و `Ryan`

```js
assert(
  'Alan' in users &&
    'Jeff' in users &&
    'Sarah' in users &&
    'Ryan' in users &&
    Object.keys(users).length === 4
);
```

يجب أن تقوم وظيفة `getArrayOfUsers` بإنتاج قائمة تحتوي على جميع الهُوِيَّات في كائن `users`

```js
assert(
  (function () {
    users.Sam = {};
    users.Lewis = {};
    let R = getArrayOfUsers(users);
    return (
      R.indexOf('Alan') !== -1 &&
      R.indexOf('Jeff') !== -1 &&
      R.indexOf('Sarah') !== -1 &&
      R.indexOf('Ryan') !== -1 &&
      R.indexOf('Sam') !== -1 &&
      R.indexOf('Lewis') !== -1
    );
  })() === true
);
```

# --seed--

## --seed-contents--

```js
let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function getArrayOfUsers(obj) {
  // Only change code below this line

  // Only change code above this line
}

console.log(getArrayOfUsers(users));
```

# --solutions--

```js
let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function getArrayOfUsers(obj) {
  return Object.keys(obj);
}

console.log(getArrayOfUsers(users));
```
