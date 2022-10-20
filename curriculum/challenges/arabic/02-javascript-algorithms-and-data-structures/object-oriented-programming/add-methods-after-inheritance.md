---
id: 587d7db1367417b2b2512b87
title: إضافة الدوال بعد الميراث (Add Methods After Inheritance)
challengeType: 1
forumTopicId: 301315
dashedName: add-methods-after-inheritance
---

# --description--

الـ constructor function الذي يرث `prototype` الـ object الخاص به من الـ supertype constructor function يمكن أن يكون له الـ methods الخاصة به بالإضافة إلى الـ methods الموروثة.

على سبيل المثال، `Bird` هو constructor يرث `prototype` من `Animal`:

```js
function Animal() { }
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};
function Bird() { }
Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;
```

بالإضافة إلى ما هو موروث من `Animal`، تريد إضافة سلوك فريد إلى objects الـ `Bird`. هنا ، `Bird` سيحصل على دالة `fly()`. يتم إضافة الدوال إلى `prototype` ال `Bird's` بنفس الطريقة مثل أي constructor function:

```js
Bird.prototype.fly = function() {
  console.log("I'm flying!");
};
```

الآن سيكون لمثيلات `Bird` الـ methods الاتية `eat()` و `fly()`:

```js
let duck = new Bird();
duck.eat();
duck.fly();
```

`duck.eat()` يعرض السلسلة `nom nom nom` في وحدة التحكم و `duck.fly()` سيعرض السلسلة `I'm flying!`.

# --instructions--

أضف كل الكود الضروري حتى يرث كائن `Dog` من `Animal` و الـ constructor الخاص بـ `prototype` الـ `Dog` تم تعيينه إلى `Dog`. ثم أضف `bark()` إلى الكائن `Dog` بحيث أن `beagle` يمكن أن يفعل `eat()` و `bark()`. يجب أن تطبع method الـ `bark()` الكلمة `Woof!` إلى وحدة التحكم.

# --hints--

`Animal` لا يجب أن يستجيب لـ `bark()`.

```js
assert(typeof Animal.prototype.bark == 'undefined');
```

`Dog` يجب أن يرث `eat()` من `Animal`.

```js
assert(typeof Dog.prototype.eat == 'function');
```

يجب أن يحتوي prototype الـ `Dog` على `bark()`.

```js
assert('bark' in Dog.prototype);
```

`beagle` يجب أن يكون `instanceof` من `Animal`.

```js
assert(beagle instanceof Animal);
```

يجب تعيين constructor الـ `beagle` إلى `Dog`.

```js
assert(beagle.constructor === Dog);
```

`beagle.eat()` يجب أن يطبع السلسلة `nom nom nom`

```js
capture();
beagle.eat();
uncapture();
assert(logOutput == 'nom nom nom');
```

`beagle.bark()` يجب ان يطبع السلسلة `Woof!`

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
