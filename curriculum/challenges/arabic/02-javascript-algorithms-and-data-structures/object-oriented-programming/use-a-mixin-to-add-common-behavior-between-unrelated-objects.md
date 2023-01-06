---
id: 587d7db2367417b2b2512b89
title: Use a Mixin to Add Common Behavior Between Unrelated Objects
challengeType: 1
forumTopicId: 301331
dashedName: use-a-mixin-to-add-common-behavior-between-unrelated-objects
---

# --description--

كما رأيتم، فإن السلوك يتم تشاركه من خلال الميراث. ومع ذلك ، هناك حالات لا يكون فيها الميراث هو الحل الأفضل. الميراث لا يعمل بشكل جيد لـ objects غير ذات صلة مثل `Bird` و `Airplane`. يمكن لكل منهما الطيران ، ولكن `Bird` ليس نوعا من `Airplane` والعكس صحيح.

بالنسبة للـ objects غير ذات صلة، من الأفضل استخدام <dfn>mixins</dfn>. يسمح ال mixin للـ objects الأخرى باستخدام مجموعة من الـ functions.

```js
let flyMixin = function(obj) {
  obj.fly = function() {
    console.log("Flying, wooosh!");
  }
};
```

`flyMixin` يأخذ أي object ويعطيه method الـ `fly`.

```js
let bird = {
  name: "Donald",
  numLegs: 2
};

let plane = {
  model: "777",
  numPassengers: 524
};

flyMixin(bird);
flyMixin(plane);
```

هنا `bird` و `plane` يتم تمريرها إلى `flyMixin`، الذي يقوم بعد ذلك بتعيين دالة `fly` لكل object. الآن يمكن لكل من `bird` و `plane` الطيران:

```js
bird.fly();
plane.fly();
```

ستعرض وحدة التحكم السلسلة `Flying, wooosh!` مرتين، مرة واحدة لكل استدعاء لـ `.fly()`.

لاحظ كيف أن الـ mixin يسمح بإعادة استخدام نفس method الـ `fly` من قبل objects غير ذات صلة كـ `bird` و `plane`.

# --instructions--

قم بإنشاء mixin يسمى `glideMixin` الذي يعرف method تسمى `glide`. ثم استخدم `glideMixin` لإعطاء `bird` و `boat` القدرة على الانزلاق.

# --hints--

يجب أن يعلن كودك إن متغير `glideMixin` وظيفة (function).

```js
assert(typeof glideMixin === 'function');
```

يجب أن يستخدم الكود الخاص بك `glideMixin` على كائن `bird` لإعطائه method الـ `glide`.

```js
assert(typeof bird.glide === 'function');
```

يجب أن يستخدم الكود الخاص بك `glideMixin` على كائن `boat` لإعطائه method الـ `glide`.

```js
assert(typeof boat.glide === 'function');
```

# --seed--

## --seed-contents--

```js
let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};

// Only change code below this line
```

# --solutions--

```js
let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};
function glideMixin (obj) {
  obj.glide = () => 'Gliding!';
}

glideMixin(bird);
glideMixin(boat);
```
