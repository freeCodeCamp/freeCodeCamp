---
id: 56bbb991ad1ed5201cd392d3
title: حذف الخصائص من كائن JavaScript
challengeType: 1
videoUrl: 'https://scrimba.com/c/cDqKdTv'
forumTopicId: 17560
dashedName: delete-properties-from-a-javascript-object
---

# --description--

يمكننا أيضا حذف الخصائص من كائنات (objects) كالآتي:

```js
delete ourDog.bark;
```

مثال:

```js
const ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"],
  "bark": "bow-wow"
};

delete ourDog.bark;
```

بعد السطر الأخير المبين أعلاه، يبدو `ourDog` كذلك:

```js
{
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
}
```

# --instructions--

احذف خاصية `tails` من `myDog`. يمكنك استخدام النقطة (dot) أو علامات الأقواس (bracket notation).

# --hints--

يجب عليك حذف الخاصية `tails` من `myDog`.

```js
assert(typeof myDog === 'object' && myDog.tails === undefined);
```

لا يجب عليك تعديل أسس `myDog`.

```js
assert(code.match(/"tails": 1/g).length > 0);
```

# --seed--

## --after-user-code--

```js
(function(z){return z;})(myDog);
```

## --seed-contents--

```js
// Setup
const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};

// Only change code below this line

```

# --solutions--

```js
const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};
delete myDog.tails;
```
