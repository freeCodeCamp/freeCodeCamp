---
id: 587d7b7d367417b2b2512b1c
title: تحقق مما إذا كان الكائن (Object) يحتوي على خاصية (Property)
challengeType: 1
forumTopicId: 301155
dashedName: check-if-an-object-has-a-property
---

# --description--

الآن يمكننا إضافة وتعديل وإزالة الهُوِيَّات (keys) من الكائنات (objects). ولكن ماذا لو أردنا فقط معرفة إذا كان object يملك خاصية معينة؟ يوفر لنا JavaScript طريقتين مختلفتين لفعل ذلك. تستخدم أحدهما طريقة `hasOwnProperty()` وتستخدم الأخرى كلمة `in`. إذا كان لدينا كائن `users` مع خاصية `Alan`، يمكننا التحقق من وجودها بأي من الطريقتين التاليتين:

```js
users.hasOwnProperty('Alan');
'Alan' in users;
```

وسترجع كليتهما `true`.

# --instructions--

أنهي كتابة الوظيفة بحيث ترجع `true` إذا كان object الذي مرر إليه يحتوي على جميع الأسماء الأربعة، `Alan`, و `Jeff`, و `Sarah`, و `Ryan`, وإنتاج `false` خلاف ذلك.

# --hints--

يجب عدم أستخدام إلى object باسم `users` قاصدًا

```js 

assert(code.match(/users/gm).length <= 2)

```

يجب أن يحتوي object باسم `users` فقط على الهُوِيَّات `Alan`, و`Jeff`, و`Sarah`, و `Ryan`

```js
assert(
  'Alan' in users &&
    'Jeff' in users &&
    'Sarah' in users &&
    'Ryan' in users &&
    Object.keys(users).length === 4
);
```

الوظيفة `isEveryoneHere` يجب أن تنتج `true` إذا `Alan`، و`Jeff`، و`Sarah`، و `Ryan` هي خصائص في object الذي تم تمريرها إلى الوظيفة.

```js
assert(isEveryoneHere(users) === true);
```

الوظيفة `isEveryoneHere` يجب أن تنتج `false` إذا `Alan` ليست خاصية في object الذي تم تمريره.

```js
assert(
  (function () {
    delete users.Alan;
    return isEveryoneHere(users);
  })() === false
);
```

الوظيفة `isEveryoneHere` يجب أن ترجع `false` إذا `Jeff` ليست خاصية في object الذي تم تمريره.

```js
assert(
  (function () {
    delete users.Jeff;
    return isEveryoneHere(users);
  })() === false
);
```

الوظيفة `isEveryoneHere` يجب أن ترجع `false` إذا `Sarah` ليست خاصية في object الذي تم تمريره.

```js
assert(
  (function () {
    delete users.Sarah;
    return isEveryoneHere(users);
  })() === false
);
```

الوظيفة `isEveryoneHere` يجب أن ترجع `false` إذا `Ryan` ليست خاصية في object الذي تم تمريره.

```js
assert(
  (function () {
    delete users.Ryan;
    return isEveryoneHere(users);
  })() === false
);
```

# --seed--

## --seed-contents--

```js
let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(userObj) {
  // Only change code below this line

  // Only change code above this line
}

console.log(isEveryoneHere(users));
```

# --solutions--

```js
let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(userObj) {
  return [
    'Alan',
    'Jeff',
    'Sarah',
    'Ryan'
  ].every(user => userObj.hasOwnProperty(user));
}

console.log(isEveryoneHere(users));
```
