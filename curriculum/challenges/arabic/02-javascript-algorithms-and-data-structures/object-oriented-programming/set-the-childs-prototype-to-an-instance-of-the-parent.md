---
id: 587d7db1367417b2b2512b85
title: Set the Child's Prototype to an Instance of the Parent
challengeType: 1
forumTopicId: 301325
dashedName: set-the-childs-prototype-to-an-instance-of-the-parent
---

# --description--

في التحدي السابق رأيت الخطوة الأولى لوراثة السلوك من الـ supertype (أو الاب) `Animal`: إنشاء مثيل جديد لـ `Animal`.

هذا التحدي يغطي الخطوة التالية: تعيين `prototype` للنوع الفرعي (subtype) (أو الابن)- في هذه الحالة، `Bird`-تكون مثيلًا لـ `Animal`.

```js
Bird.prototype = Object.create(Animal.prototype);
```

تذكر أن `prototype` هو مثل "الوصفة" لإنشاء object. بطريقة ما، تتضمن وصفة `Bird` الآن كل "المكونات" الاساسية من `Animal`.

```js
let duck = new Bird("Donald");
duck.eat();
```

`duck` ترث كل خصائص `Animal` بما في ذلك method الـ `eat`.

# --instructions--

قم بتعديل الكود بحيث ترث مثيلات `Dog` من `Animal`.

# --hints--

`Dog.prototype` يجب أن يكون مثيل (instance) لـ `Animal`.

```js
assert(Animal.prototype.isPrototypeOf(Dog.prototype));
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

function Dog() { }

// Only change code below this line


let beagle = new Dog();
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

function Dog() { }
Dog.prototype = Object.create(Animal.prototype);

let beagle = new Dog();
beagle.eat();
```
