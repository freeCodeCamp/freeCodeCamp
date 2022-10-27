---
id: 587d7dac367417b2b2512b74
title: Use Dot Notation to Access the Properties of an Object
challengeType: 1
forumTopicId: 301333
dashedName: use-dot-notation-to-access-the-properties-of-an-object
---

# --description--

أحدث التحدي الأخير object ذو خصائص مختلفة. الآن سترى كيفية الوصول إلى قيم هذه الخواص. إليك مثال:

```js
let duck = {
  name: "Aflac",
  numLegs: 2
};
console.log(duck.name);
```

يتم استخدام تدوين Dot على اسم الكائن، `duck`، يليها اسم الخاصية، `name`، للوصول إلى قيمة `Aflac`.

# --instructions--

قم بطباعة خواص كائن `dog` إلى وحدة التحكم الخاصة بك.

# --hints--

يجب أن يستخدم الكود الخاص بك `console.log` لطباعة قيمة خاصية `name` لكائن `dog`.

```js
assert(/console.log\(.*dog\.name.*\)/g.test(code));
```

يجب أن يستخدم الكود الخاص بك `console.log` لطباعة قيمة خاصية `numLegs` لكائن `dog`.

```js
assert(/console.log\(.*dog\.numLegs.*\)/g.test(code));
```

# --seed--

## --seed-contents--

```js
let dog = {
  name: "Spot",
  numLegs: 4
};
// Only change code below this line
```

# --solutions--

```js
let dog = {
  name: "Spot",
  numLegs: 4
};
console.log(dog.name);
console.log(dog.numLegs);
```
