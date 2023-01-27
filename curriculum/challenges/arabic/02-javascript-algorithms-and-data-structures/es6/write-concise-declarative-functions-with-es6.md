---
id: 587d7b8b367417b2b2512b50
title: أكتب وظائف تعلين (Declarative Functions) واضحة في ES6
challengeType: 1
forumTopicId: 301224
dashedName: write-concise-declarative-functions-with-es6
---

# --description--

عند تعريف الـ functions داخل الـ objects في ES5، علينا استخدام الكلمة `function` كما يلي:

```js
const person = {
  name: "Taylor",
  sayHello: function() {
    return `Hello! My name is ${this.name}.`;
  }
};
```

مع ES6، يمكنك إزالة كلمة `function` والـ colon كلياً عند تعريف الـ functions في الـ objects. إليك مثال على هذا الـ syntax:

```js
const person = {
  name: "Taylor",
  sayHello() {
    return `Hello! My name is ${this.name}.`;
  }
};
```

# --instructions--

قم بإعادة تشكيل الدالة `setGear` داخل الكائن `bicycle` لاستخدام الـ syntax القصير الموصوف أعلاه.

# --hints--

وينبغي عدم استخدام الـ function expression التقليدي.

```js
(getUserInput) => assert(!code.match(/function/));
```

يجب أن تكون `setGear` وظيفة معلنا (declarative function).

```js
assert(
  typeof bicycle.setGear === 'function' && code.match(/setGear\s*\(.+\)\s*\{/)
);
```

`bicycle.setGear(48)` يجب أن تغير قيمة `gear` إلى 48.

```js
bicycle.setGear(48);
assert(bicycle.gear === 48);
```

# --seed--

## --seed-contents--

```js
// Only change code below this line
const bicycle = {
  gear: 2,
  setGear: function(newGear) {
    this.gear = newGear;
  }
};
// Only change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);
```

# --solutions--

```js
const bicycle = {
  gear: 2,
  setGear(newGear) {
    this.gear = newGear;
  }
};
bicycle.setGear(3);
```
