---
id: 587d7daf367417b2b2512b7e
title: Understand the Constructor Property
challengeType: 1
forumTopicId: 301327
dashedName: understand-the-constructor-property
---

# --description--

هناك خاصية خاصة للـ `constructor` موجودة على كائنات `duck` و `beagle` تم إنشاؤها في التحديات السابقة:

```js
let duck = new Bird();
let beagle = new Dog();

console.log(duck.constructor === Bird); 
console.log(beagle.constructor === Dog);
```

كل من هذه الاستدعائات لـ `console.log` سوف تعرض `true` في وحدة التحكم.

لاحظ أن خاصية الـ `constructor` هي مرجع للـ constructor function التي أنشأت الـ instance. ميزة خاصية للـ `constructor` هي أنه من الممكن التحقق من هذه الخاصية لمعرفة نوع الـ object. اليك مثال على كيفية استخدام هذا:

```js
function joinBirdFraternity(candidate) {
  if (candidate.constructor === Bird) {
    return true;
  } else {
    return false;
  }
}
```

**ملاحظة:** بما أن خاصية الـ `constructor` يمكن الكتابة عليها (والتي سيتم تغطيتها في التحديين التاليين) من الأفضل عموماً استخدام `instanceof` للتحقق من نوع الـ object.

# --instructions--

اكتب وظيفة `joinDogFraternity` التي تأخذ وسيط `candidate`, وتستخدم خاصية `constructor`, لتنتج `true` عندما يكون قيمة candidate تساوي `Dog`، وتنتح `false` عندما لا يكون كذلك.

# --hints--

`joinDogFraternity` يجب تعريفه كـ function.

```js
assert(typeof joinDogFraternity === 'function');
```

`joinDogFraternity` يجب أن يرجع `true` إذا كان `candidate` هو instance لـ `Dog`.

```js
assert(joinDogFraternity(new Dog('')) === true);
```

`joinDogFraternity` يجب أن تستخدم خاصية الـ `constructor`.

```js
assert(/\.constructor/.test(code) && !/instanceof/.test(code));
```

# --seed--

## --seed-contents--

```js
function Dog(name) {
  this.name = name;
}

// Only change code below this line
function joinDogFraternity(candidate) {

}
```

# --solutions--

```js
function Dog(name) {
  this.name = name;
}
function joinDogFraternity(candidate) {
  return candidate.constructor === Dog;
}
```
