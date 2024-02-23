---
id: 587d7b8b367417b2b2512b53
title: Use class Syntax to Define a Constructor Function
challengeType: 1
forumTopicId: 301212
dashedName: use-class-syntax-to-define-a-constructor-function
---

# --description--

يوفر ES6 طريقة syntax جديدة لإنشاء objects، باستخدام كلمة <dfn>class</dfn>.

في ES5، ينشئ كائن (object) عند تحدد وظيفة (function) يسمى `constructor` واستخدام مصطلح `new` لتمثيل كائن.

في ES6، يحتوي إعلان `class` على طريقة `constructor` التي تنفذ مع مصطلح `new` جديدة. إذا لم يتم تعريف طريقة `constructor` بوضوح، فعندها تعرّف ضمنيا دون أي معطيات (arguments).

```js
// Explicit constructor
class SpaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
  takeOff() {
    console.log("To " + this.targetPlanet + "!");
  }
}

// Implicit constructor 
class Rocket {
  launch() {
    console.log("To the moon!");
  }
}

const zeus = new SpaceShuttle('Jupiter');
// prints To Jupiter! in console
zeus.takeOff();

const atlas = new Rocket();
// prints To the moon! in console
atlas.launch();
```

وتجدر الإشارة إلى أن كلمة `class` تعرف وظيفة جديد، تضاف المنشئ إليها. يستدعى هذا المنشئ عندما تنفيذ `new` لإنشاء كائن جديد.

**ملاحظة:** يجب أن تستخدم UpperCamelCase لاسماء الفئات في ES6، كما في `SpaceShuttle` المستخدمة أعلاه.

إن طريقة `constructor` خاصة لإنشاء وتهيئة كائن منشئ بواسطة فئة. سوف تتعلم المزيد عنها في قسم البرمجة الكائنية في شهادة خوارزميات JavaScript وهياكل البيانات.

# --instructions--

استخدم مصطلح `class` واكتب `constructor` لإنشاء فئة `Vegetable`.

تتيح فئة `Vegetable` لك إنشاء كائن vegetable مع خاصية `name` التي تمرر إلى الـ `constructor`.

# --hints--

يجب أن تكون`Vegetable` بنوع `class` مع وظيفة `constructor` محددة.

```js
assert(
  typeof Vegetable === 'function' && typeof Vegetable.constructor === 'function'
);
```

يجب استخدام مصطلح `class`.

```js
assert(code.match(/class/g));
```

يجب أن يمثل `Vegetable`.

```js
assert(() => {
  const a = new Vegetable('apple');
  return typeof a === 'object';
});
```

يجب أن ينتج `carrot.name` قيمة `carrot`.

```js
assert(carrot.name == 'carrot');
```

# --seed--

## --seed-contents--

```js
// Only change code below this line

// Only change code above this line

const carrot = new Vegetable('carrot');
console.log(carrot.name); // Should display 'carrot'
```

# --solutions--

```js
class Vegetable {
  constructor(name) {
    this.name = name;
  }
}
const carrot = new Vegetable('carrot');
```
