---
id: 587d7b7d367417b2b2512b1f
title: تعديل القائمة مخزنة في كائن
challengeType: 1
forumTopicId: 301163
dashedName: modify-an-array-stored-in-an-object
---

# --description--

الآن لقد رأيتم جميع العمليات الأساسية لكائنات JavaScript. يمكنك إضافة وتعديل وإزالة أزواج key-value، والتحقق مما إذا كانت الهُوِيَّات موجودة، والمرور فوق جميع الهُوِيَّات في الكائن. بينما تستمر في تعلم JavaScript سترى تطبيقات أكثر تنوعاً للكائنات. وبالإضافة إلى ذلك، دروس هياكل البيانات الموجودة في قسم تمهيد مقابلة العمل من المنهج الدراسي تغطي أيضًا الكائنات <dfn>Map ES6</dfn> و <dfn>Set</dfn>, وكلاهما يشبه الكائنات العادية ولكنهما يوفران بعض السمات الإضافية. الآن بعد أن تعلمت أساسيات القوائم والكائنات، أنت مستعد تماما للبدء في معالجة مشكلات أكثر تعقيدا باستخدام JavaScript!

# --instructions--

ألقي النِّظْرة على الكائن الذي قدمناه في محرر التعليمات البرمجية. يحتوي كائن `user` على ثلاث هُوِيَّات. يحتوي هُوِيَّة `data` على خمس هُوِيَّات، يحتوي أحدها على القائمة من `friends`. من هذا، يمكنك أن ترى مدى مرونة الكائنات مثل هياكل البيانات. لقد بدأنا كتابة وظيفة `addFriend`. إنهاء الكتابة بحيث يأخذ كائن `user` ويضيف اسم المعطى `friend` للقائمة المخزنة في `user.data.friends` وأنشئ تلك القائمة.

# --hints--

يجب أن يكون الكائن `user` لديه هُوِيَّات `name`, و `age`, و `data`.

```js
assert('name' in user && 'age' in user && 'data' in user);
```

يجب أن تقبل وظيفة (function) مسمى `addFriend` كائن `user` ومقطع نصي `friend` كمعطيات وأضف friend إلى قائمة `friends` في كائن `user`.

```js
assert(
  (function () {
    let L1 = user.data.friends.length;
    addFriend(user, 'Sean');
    let L2 = user.data.friends.length;
    return L2 === L1 + 1;
  })()
);
```

`addFriend(user, "Pete")` يجب أن ينشئ `["Sam", "Kira", "Tomo", "Pete"]`.

```js
assert.deepEqual(
  (function () {
    delete user.data.friends;
    user.data.friends = ['Sam', 'Kira', 'Tomo'];
    return addFriend(user, 'Pete');
  })(),
  ['Sam', 'Kira', 'Tomo', 'Pete']
);
```

# --seed--

## --seed-contents--

```js
let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};

function addFriend(userObj, friend) {
  // Only change code below this line

  // Only change code above this line
}

console.log(addFriend(user, 'Pete'));
```

# --solutions--

```js
let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};

function addFriend(userObj, friend) {
  userObj.data.friends.push(friend);
  return userObj.data.friends;
}
```
