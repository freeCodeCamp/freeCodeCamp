---
id: 587d7dae367417b2b2512b79
title: تمديد المنشئات (Constructors) لتلقي المعطيات (Arguments)
challengeType: 1
forumTopicId: 18235
dashedName: extend-constructors-to-receive-arguments
---

# --description--

الـ constructors الآتية `Bird` و `Dog` من التحدي الآخير عملوا بشكل جيد. ومع ذلك، لاحظ أن جميع الـ `Birds` التي تم إنشاؤها باستخدام `Bird` يتم تسميتها تلقائيًا باسم Albert، وهي زرقاء اللون، ولديها ساقان. ماذا لو أردت طيور ذات قيم مختلفة للاسم واللون؟ من الممكن تغيير خصائص كل طائر يدوياً ولكن هذا سيكون مجهد:

```js
let swan = new Bird();
swan.name = "Carlos";
swan.color = "white";
```

لنفترض أنك كنت تكتب برنامجاً لتعقب مئات أو حتى آلاف الطيور المختلفة في مطير. سوف يستغرق الأمر الكثير من الوقت لإنشاء كل الطيور، ثم تغيير الخصائص إلى قيم مختلفة لكل منها. من أجل إنشاء كائنات الـ `Bird` المختلفة بسهولة، يمكنك تصميم منشئك (constructor) مسمى Bird بحيث يقبل الوسائط (parameters):

```js
function Bird(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}
```

ثم مرر القيم كمعطيات (arguments) لتحديد كل طائر فريد في منشئ (constructor) باسم `Bird`: ينشئ `let cardinal = new Bird("Bruce", "red");` مثيل (instance) جديد من `Bird` بخصائص `name` و `color` بقيم `Bruce` و `red` علي التوالي. مازالت خاصية `numLegs` بقيمة 2. يحتوي `cardinal` على هذه الخواص:

```js
cardinal.name
cardinal.color
cardinal.numLegs
```

يكون constructor أكثر مرونة. من الممكن الآن تحديد الخصائص لكل `Bird` في وقت إنشائه، وهي إحدى الطرق الذي تجعل من constructor في JavaScript مفيد جداً. يقوم constructor بتجميع objects معاً استناداً إلى الخصائص والسلوك المشترك وتحديد مخطط يقوم بإنشائها تلقائياً.

# --instructions--

إنشاء constructor آخر باسم `Dog`. هذه المرة، اضبطه لأخذ وسائط (Parameters) الآتية `name` و `color`، واجعل الخاصية `numLegs` ثابتة عند 4. ثم قم بإنشاء `Dog` جديد محفوظ في متغير اسمه `terrier`. مرر له مقطعان نصيان (strings) كمعطيات للخصائص `name` و `color`.

# --hints--

يجب أن يتلقى `Dog` معطى `name`.

```js
assert(new Dog('Clifford').name === 'Clifford');
```

يجب أن يتلقى `Dog` معطى `color`.

```js
assert(new Dog('Clifford', 'yellow').color === 'yellow');
```

`Dog` يجب أن يكون لديه خاصية `numLegs` بقيمة محددة بـ 4.

```js
assert(new Dog('Clifford').numLegs === 4);
```

`terrier` يجب أن يتم إنشاؤه باستخدام constructor الـ `Dog`.

```js
assert(terrier instanceof Dog);
```

# --seed--

## --seed-contents--

```js
function Dog() {

}
```

# --solutions--

```js
function Dog (name, color) {
  this.numLegs = 4;
  this.name = name;
  this.color = color;
}

const terrier = new Dog();
```
