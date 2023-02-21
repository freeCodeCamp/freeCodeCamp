---
id: 587d7db2367417b2b2512b8a
title: >-
  Use Closure to Protect Properties Within an Object from Being Modified Externally
challengeType: 1
forumTopicId: 18234
dashedName: >-
  use-closure-to-protect-properties-within-an-object-from-being-modified-externally
---

# --description--

في التحدي السابق، `bird` كان لديه خاصية عامة و هي `name`. تعتبر عامة لأنه يمكن الوصول إليها وتغييرها خارج تعريف `bird`.

```js
bird.name = "Duffy";
```

لذلك، يمكن لأي جزء من الكود الخاص بك تغيير اسم `bird` بسهولة إلى أي قيمة. فكروا في أشياء مثل كلمات المرور والحسابات المصرفية التي يسهل تغييرها من قبل أي جزء من الكود الخاص بك. وهذا يمكن أن يسبب الكثير من المشاكل.

وأبسط طريقة لجعل هذه الخاصية العامة، خاصة، هي عن طريق إنشاء متغير داخل الـ constructor function. وهذا يغير مجال ذلك المتغير بحيث يكون ضمن الـ constructor function علي عكس أن يكون متاحا بشكل شامل (global). وبهذه الطريقة، لا يمكن الوصول إلى المتغير وتغييره إلا بواسطة method تكون أيضا ضمن الـ constructor function.

```js
function Bird() {
  let hatchedEgg = 10;

  this.getHatchedEggCount = function() { 
    return hatchedEgg;
  };
}
let ducky = new Bird();
ducky.getHatchedEggCount();
```

هنا `getHatchedEggCount` هي method مميزة، لأنها لديها حق الوصول إلى المتغير الخاص `hatchedEgg`. هذا ممكن لإن `hatchedEgg` أعلنت في نفس السياق مثل `getHatchedEggCount`. في جافا سكريبت، الوظيفة دائما لها حق الوصول إلى السياق الذي تم إنشاؤها فيه. هذا يسمى `closure`.

# --instructions--

غير كيفية تعلن `weight` في وظيفة `Bird` بحيث يصبح متغير خاص. ثم قم بإنشاء `getWeight` لإرجاع قيمة `weight` والتي هي 15.

# --hints--

يجب أن تكون خاصية `weight` متغير خاص ويجب تعيينه قيمة `15`.

```js
assert(code.match(/(var|let|const)\s+weight\s*\=\s*15\;?/g));
```

يجب أن ينشئ الكود الخاص بك method في `Bird` تسمى `getWeight` لإرجاع قيمة المتغير الخاص `weight`.

```js
assert(new Bird().getWeight() === 15);
```

يجب أن تقوم دالة `getWeight` بإرجاع المتغير الخاص `weight`.

```js
assert(code.match(/((return\s+)|(\(\s*\)\s*\=\>\s*))weight\;?/g));
```

# --seed--

## --seed-contents--

```js
function Bird() {
  this.weight = 15;


}
```

# --solutions--

```js
function Bird() {
  let weight = 15;

  this.getWeight = () => weight;
}
```
