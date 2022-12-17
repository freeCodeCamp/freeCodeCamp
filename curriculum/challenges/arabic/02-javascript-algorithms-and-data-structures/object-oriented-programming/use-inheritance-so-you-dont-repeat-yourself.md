---
id: 587d7db0367417b2b2512b83
title: Use Inheritance So You Don't Repeat Yourself
challengeType: 1
forumTopicId: 301334
dashedName: use-inheritance-so-you-dont-repeat-yourself
---

# --description--

هناك مبدأ في البرمجة يسمى <dfn>Don't Repeat Yourself (DRY)</dfn>. السبب في أن الكود المتكرر مشكلة هو أن أي تغيير يتطلب إصلاح الكود في أماكن متعددة. وهذا يعني عادة المزيد من العمل للمبرمجين والمزيد من الحيز للأخطاء.

لاحظ في المثال أدناه أن `describe` مشتركة من قبل `Bird` و `Dog`:

```js
Bird.prototype = {
  constructor: Bird,
  describe: function() {
    console.log("My name is " + this.name);
  }
};

Dog.prototype = {
  constructor: Dog,
  describe: function() {
    console.log("My name is " + this.name);
  }
};
```

يتم تكرار `describe` في مكانين. يمكن تعديل الكود لاتباع مبدأ DRY عن طريق إنشاء `supertype` (أو الاب) يسمى `Animal`:

```js
function Animal() { };

Animal.prototype = {
  constructor: Animal, 
  describe: function() {
    console.log("My name is " + this.name);
  }
};
```

بما أن `Animal` يتضمن method الـ `describe` ، يمكنك إزالته من `Bird` و `Dog`:

```js
Bird.prototype = {
  constructor: Bird
};

Dog.prototype = {
  constructor: Dog
};
```

# --instructions--

يتم تكرار method الـ `eat` في كل من `Cat` و `Bear`. قم بتعديل الكود بروح DRY عن طريق نقل method الـ `eat` إلى `supertype` الـ `Animal`.

# --hints--

`Animal.prototype` يجب أن تحتوي على خاصية `eat`.

```js
assert(Animal.prototype.hasOwnProperty('eat'));
```

`Bear.prototype` يجب ألا يحتوي على خاصية `eat`.

```js
assert(!Bear.prototype.hasOwnProperty('eat'));
```

`Cat.prototype` يجب ألا تحتوي على خاصية `eat`.

```js
assert(!Cat.prototype.hasOwnProperty('eat'));
```

# --seed--

## --seed-contents--

```js
function Cat(name) {
  this.name = name;
}

Cat.prototype = {
  constructor: Cat,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Bear(name) {
  this.name = name;
}

Bear.prototype = {
  constructor: Bear,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Animal() { }

Animal.prototype = {
  constructor: Animal,

};
```

# --solutions--

```js
function Cat(name) {
  this.name = name;
}

Cat.prototype = {
  constructor: Cat
};

function Bear(name) {
  this.name = name;
}

Bear.prototype = {
  constructor: Bear
};

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};
```
