---
id: 587d7db1367417b2b2512b88
title: تجاوز الـ methods الموروثة (Override Inherited Methods)
challengeType: 1
forumTopicId: 301322
dashedName: override-inherited-methods
---

# --description--

في الدروس السابقة، تعلمت أن الـ object يمكن أن يرث سلوكه (methods) من object آخر عن طريق الإشارة إلى الـ `prototype` الخاص بهذا الـ object:

```js
ChildObject.prototype = Object.create(ParentObject.prototype);
```

ثم تلقّى الـ `ChildObject` الـ methods الخاصة به من خلال تبيانها في الـ `prototype` الخاص به:

```js
ChildObject.prototype.methodName = function() {...};
```

من الممكن تجاوز inherited method. يتم ذلك بنفس الطريقة - عن طريق إضافة method إلى `ChildObject.prototype` باستخدام نفس اسم الـ method الذي يتم تجاوزه. إليك مثال على `Bird` تتجاوز method الـ `eat()` الموروثة من `Animal`:

```js
function Animal() { }
Animal.prototype.eat = function() {
  return "nom nom nom";
};
function Bird() { }

Bird.prototype = Object.create(Animal.prototype);

Bird.prototype.eat = function() {
  return "peck peck peck";
};
```

إذا كان لديك instance مثل `let duck = new Bird();` واستدعيت `duck.eat()`، هذه هي الطريقة التي يبحث بها جافا سكريبت عن method على سلسلة الـ `prototype` الخاص بـ `duck`:

1.  `duck` => Is `eat()` معرف هنا؟ لا.
2.  `Bird` => Is `eat()` معرف هنا؟ => نعم. قم بتنفيذه و إيقاف البحث.
3.  `Animal` => `eat()` تم تعريفه أيضًا ، ولكن جافا سكريبت توقف عن البحث قبل الوصول إلى هذا المستوى.
4.  Object => جافا سكريبت توقف عن البحث قبل الوصول إلى هذا المستوى.

# --instructions--

تجاوز method الـ `fly()` لـ `Penguin` بحيث تعيد الـ string الآتي `Alas, this is a flightless bird.`

# --hints--

`penguin.fly()` يجب أن يعيد `Alas, this is a flightless bird.`

```js
assert(penguin.fly() === 'Alas, this is a flightless bird.');
```

The `bird.fly()` يجب أن يعيد `I am flying!`

```js
assert(new Bird().fly() === 'I am flying!');
```

# --seed--

## --seed-contents--

```js
function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

// Only change code below this line



// Only change code above this line

let penguin = new Penguin();
console.log(penguin.fly());
```

# --solutions--

```js
function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;
Penguin.prototype.fly = () => 'Alas, this is a flightless bird.';
let penguin = new Penguin();
console.log(penguin.fly());
```
