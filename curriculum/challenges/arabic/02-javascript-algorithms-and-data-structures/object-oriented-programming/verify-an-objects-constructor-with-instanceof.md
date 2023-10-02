---
id: 587d7dae367417b2b2512b7a
title: Verify an Object's Constructor with instanceof
challengeType: 1
forumTopicId: 301337
dashedName: verify-an-objects-constructor-with-instanceof
---

# --description--

في أي وقت تقوم الـ constructor function بإنشاء object جديد، يقال إن هذا ال object هو <dfn>instance</dfn> من الـ constructor الخاص به. يعطي جافا سكريبت طريقة مناسبة للتحقق من هذا مع مشغل `instanceof`. `instanceof` يسمح لك بمقارنة object مع constructor، و إرجاع `true` أو `false` استناداً إلى ما إذا كان هذا ال object قد تم إنشاؤه باستخدام الـ constructor أم لا. إليك مثال:

```js
let Bird = function(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}

let crow = new Bird("Alexis", "black");

crow instanceof Bird;
```

دالة `instanceof` هنا، ستعيد `true`.

إذا تم إنشاء object دون استخدام constructor، فـ `instanceof` سيتحقق من أنه ليس instance لذلك الـ constructor:

```js
let canary = {
  name: "Mildred",
  color: "Yellow",
  numLegs: 2
};

canary instanceof Bird;
```

دالة `instanceof` هنا، ستعيد `false`.

# --instructions--

قم بإنشاء instance جديد لـ `House` ، واسمه `myHouse` و مرر اليه عدد من غرف النوم. ثم استخدم `instanceof` للتحقق من أنه instance لـ `House`.

# --hints--

يجب أن يحتوي `myHouse` على سمة `numBedrooms` معينة إلى رقم.

```js
assert(typeof myHouse.numBedrooms === 'number');
```

يجب عليك التحقق من أن `myHouse` هو instance لـ `House` باستخدام مشغل `instanceof`.

```js
assert(/myHouse\s*instanceof\s*House/.test(code));
```

# --seed--

## --seed-contents--

```js
function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

// Only change code below this line
```

# --solutions--

```js
function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}
const myHouse = new House(4);
console.log(myHouse instanceof House);
```
