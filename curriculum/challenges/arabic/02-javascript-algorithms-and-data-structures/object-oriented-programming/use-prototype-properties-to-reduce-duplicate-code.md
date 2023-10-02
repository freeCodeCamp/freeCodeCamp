---
id: 587d7dae367417b2b2512b7c
title: Use Prototype Properties to Reduce Duplicate Code
challengeType: 1
forumTopicId: 301336
dashedName: use-prototype-properties-to-reduce-duplicate-code
---

# --description--

نظرًا لأن `numLegs` سيكون لها نفس القيمة لجميع مثيلات `Bird`، لديك أساسا متغير مكرر `numLegs` داخل كل مثيل `Bird`.

وقد لا تكون هذه مشكلة عندما لا تكون هناك سوى حالتين، ولكن تخيل، إذا كانت هناك ملايين الحالات. سيكون ذلك الكثير من المتغيرات المتكررة.

طريقة أفضل هي استخدام `prototype` الـ `Bird`. تتم مشاركة الخصائص في الـ `prototype` بين جميع مثيلات `Bird`. إليك كيفية إضافة `numLegs` إلى `Bird prototype`:

```js
Bird.prototype.numLegs = 2;
```

الآن جميع مثيلات `Bird` لديها خاصية `numLegs`.

```js
console.log(duck.numLegs);
console.log(canary.numLegs);
```

بما أن جميع ال instances تحتوي تلقائياً على الخصائص في الـ `prototype`، فكر في `prototype` كـ "وصفة" لإنشاء الـ objects. لاحظ أن الـ `prototype` لـ `duck` و `canary` هو جزء من constructor الـ`Bird` كـ `Bird.prototype`.

# --instructions--

قم بإضافة خاصية `numLegs` إلى `prototype` الـ `Dog`

# --hints--

`beagle` يجب أن يكون لديه خاصية `numLegs`.

```js
assert(beagle.numLegs !== undefined);
```

`beagle.numLegs` يجب أن يكون رقما.

```js
assert(typeof beagle.numLegs === 'number');
```

`numLegs` يجب أن تكون خاصية `prototype` ليست خاصية خاصة (own property).

```js
assert(beagle.hasOwnProperty('numLegs') === false);
```

# --seed--

## --seed-contents--

```js
function Dog(name) {
  this.name = name;
}



// Only change code above this line
let beagle = new Dog("Snoopy");
```

# --solutions--

```js
function Dog (name) {
  this.name = name;
}
Dog.prototype.numLegs = 4;
let beagle = new Dog("Snoopy");
```
