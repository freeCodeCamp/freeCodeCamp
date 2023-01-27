---
id: 587d7db1367417b2b2512b87
title: إضافة الطرق (Methods) بعد الميراث (Inheritance)
challengeType: 1
forumTopicId: 301315
dashedName: add-methods-after-inheritance
---

# --description--

الوظيفة المنشئة (constructor function) التي ترث كائنها (object) تسمى `prototype` من وظيفة منشئة كبرى (supertype), يمكن أن تحتوي على طرقها (methods) بالإضافة إلى الطرق الموروثة.

على سبيل المثال، يكون `Bird` منشئ (constructor) الذي يرث `prototype` من `Animal`:

```js
function Animal() { }
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};
function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;
```

بالإضافة إلى ما موروث من `Animal`، تريد إضافة سلوك فريد إلى كائنات (objects) المسمى `Bird`. هنا، سيحصل `Bird` على وظيفة (function) مسمى `fly()`. تضاف الوظائف إلى `prototype` في `Bird's` بنفس الطريقة مثل أي وظيفة منشئا (constructor function):

```js
Bird.prototype.fly = function() {
  console.log("I'm flying!");
};
```

الآن سيكون لمثيلات `Bird` الطرق الآتية `eat()` و `fly()`:

```js
let duck = new Bird();
duck.eat();
duck.fly();
```

يعرض `duck.eat()` مقطع نصي (string) بقيمة `nom nom nom` في وحدة التحكم ويعرض `duck.fly()` مقطع نصي `I'm flying!`.

# --instructions--

أضف كل الكود الضروري حتى يرث كائن `Dog` من `Animal` و عيّن المنشئ الخاص بـ `prototype` من `Dog` بقيمة `Dog`. ثم أضف طريقة `bark()` إلى الكائن `Dog` بحيث أن `beagle` يمكن أن ينفذ `eat()` و `bark()`. يجب أن تطبع طريقة `bark()` كلمة `Woof!` إلى وحدة التحكم (console).

# --hints--

يجب ألا `Animal` يستجيب إلى طريقة `bark()`.

```js
assert(typeof Animal.prototype.bark == 'undefined');
```

يجب أن يرث `Dog` طريقة `eat()` من `Animal`.

```js
assert(typeof Dog.prototype.eat == 'function');
```

يجب أن يحتوي prototype داخل `Dog` على `bark()`.

```js
assert('bark' in Dog.prototype);
```

يجب أن يكون `beagle` جزء (`instanceof`) من `Animal`.

```js
assert(beagle instanceof Animal);
```

يجب أن يكون منشئ `beagle` بقيمة `Dog`.

```js
assert(beagle.constructor === Dog);
```

يجب أن يطبع `beagle.eat()` مقطع نصي `nom nom nom`

```js
capture();
beagle.eat();
uncapture();
assert(logOutput == 'nom nom nom');
```

يجب أن يطبع `beagle.bark()` مقطع نصي `Woof!`

```js
capture();
beagle.bark();
uncapture();
assert(logOutput == 'Woof!');
```

# --seed--

## --before-user-code--

```js
var logOutput = "";
var originalConsole = console
function capture() {
    var nativeLog = console.log;
    console.log = function (message) {
        logOutput = message;
        if(nativeLog.apply) {
          nativeLog.apply(originalConsole, arguments);
        } else {
          var nativeMsg = Array.prototype.slice.apply(arguments).join(' ');
          nativeLog(nativeMsg);
        }
    };
}

function uncapture() {
  console.log = originalConsole.log;
}

capture();
```

## --after-user-code--

```js
uncapture();
(function() { return logOutput || "console.log never called"; })();
```

## --seed-contents--

```js
function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }

// Only change code below this line




// Only change code above this line

let beagle = new Dog();
```

# --solutions--

```js
function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function () {
  console.log('Woof!');
};
let beagle = new Dog();

beagle.eat();
beagle.bark();
```
