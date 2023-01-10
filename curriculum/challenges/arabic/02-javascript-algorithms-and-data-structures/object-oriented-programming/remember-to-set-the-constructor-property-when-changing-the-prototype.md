---
id: 587d7daf367417b2b2512b80
title: تذكر أن تعين خاصية Constructor عند تغيير Prototype
challengeType: 1
forumTopicId: 301323
dashedName: remember-to-set-the-constructor-property-when-changing-the-prototype
---

# --description--

هناك تأثير جانبي مهم لضبط prototype يدويًا إلى كائن (object) جديد. إنه يمحو خاصية `constructor`! يمكن استخدام هذه الخاصية لمعرفة إي وظيفة منشئ (constructor function) هي التي أنشأت نموذج (instance)، ولكن بما انه تم التعديل علي الخاصية (property)، فإنها تعطي الآن نتائج خاطئة:

```js
duck.constructor === Bird;
duck.constructor === Object;
duck instanceof Bird;
```

بالترتيب، سيتم تقييم هذه العبارات إلى `false`، و `true`، و `true`.

لإصلاح هذا، عندما يتم تعيين prototype يدوياً إلى كائن جديد، تذكر أن تحدد خاصية `constructor`:

```js
Bird.prototype = {
  constructor: Bird,
  numLegs: 2,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name); 
  }
};
```

# --instructions--

حدد خاصية `constructor` على `Dog` يكون `prototype`.

# --hints--

`Dog.prototype` يجب أن يعيّن خاصية `constructor`.

```js
assert(Dog.prototype.constructor === Dog);
```

# --seed--

## --seed-contents--

```js
function Dog(name) {
  this.name = name;
}

// Only change code below this line
Dog.prototype = {

  numLegs: 4,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};
```

# --solutions--

```js
function Dog(name) {
  this.name = name;
}
Dog.prototype = {
  constructor: Dog,
  numLegs: 4,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};
```
