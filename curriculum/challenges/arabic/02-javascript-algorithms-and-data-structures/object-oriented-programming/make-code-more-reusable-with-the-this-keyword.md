---
id: 587d7dad367417b2b2512b76
title: جعل الكود أكثر قابلية لإعادة الاستخدام (Make Code More Reusable with the this Keyword)
challengeType: 1
forumTopicId: 301321
dashedName: make-code-more-reusable-with-the-this-keyword
---

# --description--

قدمنا في التحدي الأخير method لـ object الـ `duck`. وقد استخدمنا `duck.name` للوصول إلى قيمة الخاصية `name` ضمن الـ return statement:

```js
sayName: function() {return "The name of this duck is " + duck.name + ".";}
```

في حين أن هذه طريقة صالحة للوصول إلى خصائص الـ object، هناك مشكلة هنا. إذا تغير اسم المتغير، فسيلزم تحديث أي كود يشير إلى الاسم الأصلي أيضا. في تعريف object قصير، ليست مشكلة ولكن إذا كان الـ object يحتوي على العديد من الإشارات إلى خصائصه، هناك فرصة أكبر للخطأ.

احدي طرق تجنب هذه المشكلات هي استخدام كلمة `this`:

```js
let duck = {
  name: "Aflac",
  numLegs: 2,
  sayName: function() {return "The name of this duck is " + this.name + ".";}
};
```

`this` هو موضوع عميق، والمثال أعلاه ليس سوى طريقة واحدة لاستخدامه. في السياق الحالي، `this` يشير إلى الـ object الذي ترتبط به الدالة: `duck`. إذا تم تغيير اسم الـ object إلى `mallard`، ليس من الضروري العثور على جميع الإشارات إلى `duck` في الكود. وهو يجعل الكود قابلا لإعادة الاستخدام ويسهل قراءته.

# --instructions--

قم بتعديل دالة `dog.sayLegs` لإزالة أي اشارات إلى `dog`. استخدم مثال `duck` للإرشاد.

# --hints--

`dog.sayLegs()` يجب أن يعيد الـ string الآتي.

```js
assert(dog.sayLegs() === 'This dog has 4 legs.');
```

يجب أن يستخدم الكود كلمة `this` للوصول إلى خاصية `numLegs` لـ `dog`.

```js
assert(code.match(/this\.numLegs/g));
```

# --seed--

## --seed-contents--

```js
let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {return "This dog has " + dog.numLegs + " legs.";}
};

dog.sayLegs();
```

# --solutions--

```js
let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs () {
    return 'This dog has ' + this.numLegs + ' legs.';
  }
};

dog.sayLegs();
```
