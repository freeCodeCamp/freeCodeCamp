---
id: 587d7db0367417b2b2512b82
title: Understand the Prototype Chain
challengeType: 1
forumTopicId: 301329
dashedName: understand-the-prototype-chain
---

# --description--

جميع ال objects في جافا سكريبت (مع بعض الاستثناءات) لديها `prototype`. أيضًا ، يعتبر الـ `prototype` لل object هو نفسه object.

```js
function Bird(name) {
  this.name = name;
}

typeof Bird.prototype;
```

لأن `prototype` هو object، فـ `prototype` يمكن أن يكون له الـ `prototype` الخاص به! في هذه الحالة، الـ `prototype` لـ `Bird.prototype` هو `Object.prototype`:

```js
Object.prototype.isPrototypeOf(Bird.prototype);
```

كيف يكون ذلك مفيداً؟ قد تتذكر `hasOwnProperty` من تحدي سابق:

```js
let duck = new Bird("Donald");
duck.hasOwnProperty("name");
```

تم تعريف `hasOwnProperty` في `Object.prototype`، والتي يمكن الوصول إليها بواسطة `Bird.prototype` والذي يمكن الوصول إليه من قبل `duck`. هذا مثال على سلسلة الـ `prototype`. في سلسلة `prototype` هذه، `Bird` هو `supertype` لـ `duck`، بينما `duck` هو الـ `subtype`. `Object` هو `supertype` لكلا من `Bird` و `duck`. `Object` هو `supertype` لجميع ال objects في جافا سكريبت. لذلك، يمكن لأي object أن يستخدم `hasOwnProperty`.

# --instructions--

قم بتعديل الكود لإظهار سلسلة ال prototype الصحيحة.

# --hints--

يجب أن يظهر الكود الخاص بك أن `Object.prototype` هو ال prototype لـ `Dog.prototype`

```js
assert(/Object\.prototype\.isPrototypeOf/.test(code));
```

# --seed--

## --seed-contents--

```js
function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle);  // yields true

// Fix the code below so that it evaluates to true
???.isPrototypeOf(Dog.prototype);
```

# --solutions--

```js
function Dog(name) {
  this.name = name;
}
let beagle = new Dog("Snoopy");
Dog.prototype.isPrototypeOf(beagle);
Object.prototype.isPrototypeOf(Dog.prototype);
```
