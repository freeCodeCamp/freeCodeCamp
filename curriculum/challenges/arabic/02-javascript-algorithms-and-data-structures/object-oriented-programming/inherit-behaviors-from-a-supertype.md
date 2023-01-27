---
id: 587d7db0367417b2b2512b84
title: وراثة السلوكيات من type خارق (Inherit Behaviors from a Supertype)
challengeType: 1
forumTopicId: 301319
dashedName: inherit-behaviors-from-a-supertype
---

# --description--

في التحدي السابق، قمت بإنشاء `supertype` يسمى `Animal` و الذي يحدد السلوكيات المشتركة بين جميع الحيوانات:

```js
function Animal() { }
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};
```

هذا والتحدي التالي سيغطيان كيفية إعادة استخدام دوال `Animal` داخل `Bird` و `Dog` دون تعريفها مرة أخرى. وهو يستخدم تقنية تسمى inheritance. هذا التحدي يغطي الخطوة الأولى: اصنع instance من `supertype` (أو parent). أنت تعرف بالفعل طريقة واحدة لإنشاء instance من `Animal` باستخدام المشغل `new`:

```js
let animal = new Animal();
```

هناك بعض العيوب عند استخدام هذا الـ syntax للـ inheritance، وهي معقدة للغاية بالنسبة لنطاق هذا التحدي. وبدلا من ذلك، هناك نهج بديل يخلو من هذه المساوئ:

```js
let animal = Object.create(Animal.prototype);
```

`Object.create(obj)` ينشئ object جديد، ويضع `obj` كالـ `prototype` للـ object الجديد. تذكر أن `prototype` هو مثل "الوصفة" لإنشاء object. عن طريق إعداد الـ `prototype` لـ `animal` ليكون `prototype` لـ `Animal`، أنت تعطي instance الـ `animal` نفس "وصفة" أي instance آخر من `Animal`.

```js
animal.eat();
animal instanceof Animal;
```

ستعيد طريقة `instanceof` حالة `true` هنا.

# --instructions--

استخدم `Object.create` لعمل ٢ instances من `Animal` يدعوا `duck` و `beagle`.

# --hints--

يجب إعلان متغير `duck`.

```js
assert(typeof duck !== 'undefined');
```

يجب إعلان متغير `beagle`.

```js
assert(typeof beagle !== 'undefined');
```

يجب عمل initialise لـ متغير `duck` باستخدام `Object.create`.

```js
assert(
  /(let|const|var)\s{1,}duck\s*=\s*Object\.create\s*\(\s*Animal\.prototype\s*\)\s*/.test(
    code
  )
);
```

يجب عمل initialise لـ متغير `beagle` باستخدام `Object.create`.

```js
assert(
  /(let|const|var)\s{1,}beagle\s*=\s*Object\.create\s*\(\s*Animal\.prototype\s*\)\s*/.test(
    code
  )
);
```

`duck` يجب أن يحتوي على `prototype` من `Animal`.

```js
assert(duck instanceof Animal);
```

`beagle` يجب أن يحتوي على `prototype` من `Animal`.

```js
assert(beagle instanceof Animal);
```

# --seed--

## --seed-contents--

```js
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

// Only change code below this line

let duck; // Change this line
let beagle; // Change this line
```

# --solutions--

```js
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};
let duck = Object.create(Animal.prototype);
let beagle = Object.create(Animal.prototype);

duck.eat();
beagle.eat();
```
