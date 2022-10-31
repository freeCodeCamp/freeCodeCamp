---
id: 587d7dad367417b2b2512b75
title: إنشاء method في الكائن
challengeType: 1
forumTopicId: 301318
dashedName: create-a-method-on-an-object
---

# --description--

يمكن أن يكون لل objects نوع خاص من الخواص، يسمى <dfn>method</dfn>.

الـ methods نوع من الخصائص عبارة عن functions. هذا يضيف سلوكا مختلفا إلى الـ object. فيما يلي مثال `duck` مع method:

```js
let duck = {
  name: "Aflac",
  numLegs: 2,
  sayName: function() {return "The name of this duck is " + duck.name + ".";}
};
duck.sayName();
```

المثال يضيف `sayName` ، التي هي function ترجع جملة تعطي اسم الـ `duck`. لاحظ أن الـ method وصلت إلى خاصية `name` في الـ return statement باستخدام `duck.name`. والتحدي التالي سيغطي طريقة أخرى للقيام بذلك.

# --instructions--

باستخدام كائن `dog` ، أعطه method تسمى `sayLegs`. الـ method يجب ان تعيد الجملة `This dog has 4 legs.`

# --hints--

`dog.sayLegs()` يجب أن تكون function.

```js
assert(typeof dog.sayLegs === 'function');
```

يجب أن تعيد `dog.sayLegs()` السلسلة المحددة - لاحظ أن علامات الترقيم والتباعد مهمان.

```js
assert(dog.sayLegs() === 'This dog has 4 legs.');
```

# --seed--

## --seed-contents--

```js
let dog = {
  name: "Spot",
  numLegs: 4,

};

dog.sayLegs();
```

# --solutions--

```js
let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs () {
    return 'This dog has ' + this.numLegs + ' legs.';
  }
};

dog.sayLegs();
```
