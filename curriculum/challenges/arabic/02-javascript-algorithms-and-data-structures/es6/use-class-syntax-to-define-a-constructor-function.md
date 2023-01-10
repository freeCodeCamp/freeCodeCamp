---
id: 587d7b8b367417b2b2512b53
title: Use class Syntax to Define a Constructor Function
challengeType: 1
forumTopicId: 301212
dashedName: use-class-syntax-to-define-a-constructor-function
---

# --description--

يوفر ES6 طريقة syntax جديدة لإنشاء objects، باستخدام كلمة <dfn>class</dfn>.

وتجدر الإشارة إلى أن syntax الـ `class` هو مجرد syntax وليس تنفيذًا كاملًا للـ class لنموذج البرمجة الشيئية (object-oriented)، على عكس لغات مثل Java و Python و Ruby ، إلخ.

في ES5، ينشئ كائن (object) عند تحدد وظيفة (function) يسمى `constructor` واستخدام مصطلح `new` لتمثيل كائن (object).

في ES6، يحتوي إعلان `class` على طريقة `constructor` التي يتم استدعاؤها مع مصطلح `new` جديدة. إذا لم يتم تعريف طريقة `constructor` بوضوح، فعندها يتم تعريفها ضمنيا دون أي حجج (arguments).

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

وتجدر الإشارة إلى أن كلمة `class` تعرف function جديد، تمت إضافة الـ constructor إليه. يتم استدعاء هذا الـ constructor عندما يتم استدعاء `new` لإنشاء object جديد.

**ملاحظة:** يجب أن تستخدم UpperCamelCase لاسماء الـ class في ES6، كما في `SpaceShuttle` المستخدمة أعلاه.

Method الـ `constructor` هي method خاصة لإنشاء وتهيئة object تم إنشاؤه عن طريق class. سوف تتعلم المزيد عنها في قسم البرمجة الشيئية في شهادة خوارزميات جافا سكريبت وهياكل البيانات.

# --instructions--

استخدم كلمة `class` واكتب `constructor` لإنشاء class الـ `Vegetable`.

Class الـ `Vegetable` يتيح لك إنشاء vegetable object مع خاصية `name` والتي يتم تمريرها إلى الـ `constructor`.

# --hints--

`Vegetable` يجب أن تكون `class` مع method معرفة للـ `constructor`.

```js
assert(
  typeof Vegetable === 'function' && typeof Vegetable.constructor === 'function'
);
```

يجب استخدام كلمة `class`.

```js
assert(code.match(/class/g));
```

`Vegetable` يجب أن يتم انشاء مثيل له.

```js
assert(() => {
  const a = new Vegetable('apple');
  return typeof a === 'object';
});
```

`carrot.name` يجب أن يرجع `carrot`.

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
