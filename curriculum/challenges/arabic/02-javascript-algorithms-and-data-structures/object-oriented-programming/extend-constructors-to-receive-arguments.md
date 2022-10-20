---
id: 587d7dae367417b2b2512b79
title: Extend Constructors to Receive Arguments
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

لنفترض أنك كنت تكتب برنامجاً لتعقب مئات أو حتى آلاف الطيور المختلفة في مطير. سوف يستغرق الأمر الكثير من الوقت لإنشاء كل الطيور، ثم تغيير الخصائص إلى قيم مختلفة لكل منها. من أجل إنشاء objects الـ `Bird` المختلفة بسهولة، يمكنك تصميم constructor الطيور الخاص بك بحيث يقبل الـ parameters:

```js
function Bird(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}
```

ثم مرر القيم كحجج (arguments) لتعريف كل طائر فريد إلى constructor باسم `Bird`: التعليمات البرمجية `let cardinal = new Bird("Bruce", "red");` ينشئ مثيل جديد من `Bird` بخصائص `name` و `color` بقيم `Bruce` و `red` علي التوالي. مازالت خاصية `numLegs` بقيمة 2. يحتوي `cardinal` على هذه الخواص:

```js
cardinal.name
cardinal.color
cardinal.numLegs
```

يكون constructor أكثر مرونة. من الممكن الآن تحديد الخصائص لكل `Bird` في وقت إنشائه، وهي إحدى الطرق الذي تجعل من constructor في JavaScript مفيد جداً. يقوم constructor بتجميع objects معاً استناداً إلى الخصائص والسلوك المشترك وتحديد مخطط يقوم بإنشائها تلقائياً.

# --instructions--

إنشاء constructor آخر باسم `Dog`. هذه المرة، اضبطه لأخذ حجج (Parameters) الآتية `name` و `color`، و اجعل الخاصية `numLegs` ثابتة عند 4. ثم قم بإنشاء `Dog` جديد محفوظ في متغير اسمه `terrier`. مرر اليه اثنان strings كـ arguments للخصائص `name` و `color`.

# --hints--

`Dog` يجب أن يتلقى argument لـ `name`.

```js
assert(new Dog('Clifford').name === 'Clifford');
```

`Dog` يجب أن يتلقى argument لـ `color`.

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
