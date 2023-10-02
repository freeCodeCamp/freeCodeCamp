---
id: 587d7dad367417b2b2512b75
title: إنشاء طريقة (Method) في الكائن
challengeType: 1
forumTopicId: 301318
dashedName: create-a-method-on-an-object
---

# --description--

يمكن أن يكون للكائنات objects نوع خاص من الخواص، تسمى <dfn>الطريقة (method)</dfn>.

إن الطرق methods الخصائص التي تكون وظائف (functions). هذا يضيف سلوكا مختلفا إلى الكائن (object). فيما يلي مثال `duck` بها طريقة (method):

```js
let duck = {
  name: "Aflac",
  numLegs: 2,
  sayName: function() {return "The name of this duck is " + duck.name + ".";}
};
duck.sayName();
```

يضيف المثال طريقة (method) تسمى `sayName`، إنها وظيفة (function) تنتج جملة باستخدام الاسم في `duck`. لاحظ أن الطريقة method وصلت إلى خاصية `name` في التعبير المنتج (return statement) باستخدام `duck.name`. والتحدي التالي سيغطي طريقة أخرى للقيام بذلك.

# --instructions--

باستخدام كائن `dog`، أعطه طريقة (method) تسمى `sayLegs`. يجب أن تنتج الطريقة الجملة `This dog has 4 legs.`

# --hints--

يجب أن تكون `dog.sayLegs()` وظيفة (function).

```js
assert(typeof dog.sayLegs === 'function');
```

يجب أن تنتج `dog.sayLegs()` المقطع النصي المحددة - لاحظ أن علامات الترقيم والتباعد مهمان.

```js
assert(dog.sayLegs() === 'This dog has 4 legs.');
```

# --seed--

## --seed-contents--

```js
let dog = {
  name: "Spot",
  numLegs: 4,

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
