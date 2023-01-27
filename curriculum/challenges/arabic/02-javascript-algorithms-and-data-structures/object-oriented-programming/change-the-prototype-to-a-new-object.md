---
id: 587d7daf367417b2b2512b7f
title: تغيير النموذج الأولي إلى كائن جديد
challengeType: 1
forumTopicId: 301316
dashedName: change-the-prototype-to-a-new-object
---

# --description--

حتى الآن كنت تقوم بإضافة خصائص إلى الـ `prototype` بشكل فردي:

```js
Bird.prototype.numLegs = 2;
```

يصبح هذا مملاً مع ازدياد عدد الخصائص.

```js
Bird.prototype.eat = function() {
  console.log("nom nom nom");
}

Bird.prototype.describe = function() {
  console.log("My name is " + this.name);
}
```

الطريقة الأكثر فعالية هي تعيين `prototype` إلى object جديد يحتوي بالفعل على الخواص. بهذه الطريقة، يتم إضافة جميع الخصائص في وقت واحد:

```js
Bird.prototype = {
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

أضف الخاصية `numLegs` و `eat()` و `describe()` إلى `prototype` الـ `Dog` عن طريق تعيين `prototype` إلى object جديد.

# --hints--

`Dog.prototype` يجب أن يتم تعيينه إلى object جديد.

```js
assert(/Dog\.prototype\s*?=\s*?{/.test(code));
```

`Dog.prototype` يجب أن تحتوي على الخاصية `numLegs`.

```js
assert(Dog.prototype.numLegs !== undefined);
```

`Dog.prototype` يجب أن تحتوي على `eat()`.

```js
assert(typeof Dog.prototype.eat === 'function');
```

`Dog.prototype` يجب أن تحتوي على `describe()`.

```js
assert(typeof Dog.prototype.describe === 'function');
```

# --seed--

## --seed-contents--

```js
function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  // Only change code below this line

};
```

# --solutions--

```js
function Dog(name) {
  this.name = name;
}
Dog.prototype = {
numLegs: 4,
  eat () {
    console.log('nom nom nom');
  },
  describe () {
    console.log('My name is ' + this.name);
  }
};
```
