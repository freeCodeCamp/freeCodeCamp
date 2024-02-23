---
id: 587d7db0367417b2b2512b81
title: Understand Where an Object’s Prototype Comes From
challengeType: 1
forumTopicId: 301330
dashedName: understand-where-an-objects-prototype-comes-from
---

# --description--

تمامًا مثل الأشخاص الذين يرثون الجينات من آبائهم، يرث الكائن `prototype` من المنشئ (constructor function) التي أنشئه مباشرةً. على سبيل المثال ، هنا constructor الـ `Bird` يقوم بإنشاء كائن `duck`:

```js
function Bird(name) {
  this.name = name;
}

let duck = new Bird("Donald");
```

يرث `duck` كائنه `prototype` من المنشئ (constructor function) مسمى `Bird`. يمكنك إظهار هذه العلاقة باستخدام `isPrototypeOf`:

```js
Bird.prototype.isPrototypeOf(duck);
```

سيؤدي هذا إلى إعادة `true`.

# --instructions--

استخدم `isPrototypeOf` للتحقق من `prototype` الـ `beagle`.

# --hints--

يجب أن تظهر أن `Dog.prototype` هو `prototype` الـ `beagle`

```js
assert(/Dog\.prototype\.isPrototypeOf\(beagle\)/.test(code));
```

# --seed--

## --seed-contents--

```js
function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

// Only change code below this line
```

# --solutions--

```js
function Dog(name) {
  this.name = name;
}
let beagle = new Dog("Snoopy");
Dog.prototype.isPrototypeOf(beagle);
```
