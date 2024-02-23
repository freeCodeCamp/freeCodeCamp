---
id: 587d7db0367417b2b2512b83
title: استخدام التوريث (Inheritance) حتى لا تعيد تكرار نفسك (DRY)
challengeType: 1
forumTopicId: 301334
dashedName: use-inheritance-so-you-dont-repeat-yourself
---

# --description--

هناك مبدأ في البرمجة يسمى <dfn>لا تكرر نقسك (Don't Repeat Yourself (DRY))</dfn>. إن السبب وراء ضرر تكرار الكود هو أحتياج تعديل الكود في أماكن متعددة تغيير عند الرغبة بذلك. وعادة يضع هذا المزيد من العمل للمبرمجين ويزيد من احتمال وجود أخطاء.

لاحظ في المثال أدناه إن `describe` مشتركة من قبل `Bird` و `Dog`:

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

يتم تكرار طريقة (method) المسمى `describe` في مكانين. يمكن تعديل الكود لاتباع مبدأ DRY عن طريق إنشاء `supertype` (أو حاوي (parent)) يسمى `Animal`:

```js
function Animal() { };

Animal.prototype = {
  constructor: Animal, 
  describe: function() {
    console.log("My name is " + this.name);
  }
};
```

عند أحتواء `Animal` على طريقة `describe`، يمكنك إزالتها من `Bird` و `Dog`:

```js
Bird.prototype = {
  constructor: Bird
};

Dog.prototype = {
  constructor: Dog
};
```

# --instructions--

يتم تكرار طريقة `eat` في كل من `Cat` و `Bear`. عدل كود بهدف عدم تكرار نفسك (DRY) عن طريق نقل طريقة `eat` داخل `Animal` الذي يكون `supertype`.

# --hints--

يجب أن تحتوي `Animal.prototype` على خاصية `eat`.

```js
assert(Animal.prototype.hasOwnProperty('eat'));
```

يجب ألا يحتوي `Bear.prototype` على خاصية `eat`.

```js
assert(!Bear.prototype.hasOwnProperty('eat'));
```

يجب ألا تحتوي `Cat.prototype` على خاصية `eat`.

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
