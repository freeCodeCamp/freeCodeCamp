---
id: 587d7b87367417b2b2512b3f
title: استكشاف الاختلافات بين كلمتين var و let
challengeType: 1
forumTopicId: 301202
dashedName: explore-differences-between-the-var-and-let-keywords
---

# --description--

واحدة من أكبر مشكلات إنشاء المتغيرات باستخدام كلمة `var` هي أنه يمكنك بسهولة تغيير تعريفات المتغيرات السابقة:

```js
var camper = "James";
var camper = "David";
console.log(camper);
```

في الكود أعلاه، تم أنشاء متغير `camper` في الأصل بقيمة `James`، وتم تغيره بعد ذلك ليصبح `David`. ثم يعرض وحدة التحكم المقطع (string) الآتي `David`.

في تطبيق صغير، قد لا تواجه هذا النوع من المشاكل. لكن كلما أصبح الكود الخاص بك أكبر، قد تغير المتغير عن طريق الخطأ الذي لم تكن تنوي تغييره. ولأذن هذا السلوك لا يوقع خطأ، يصبح البحث عن الأخطاء وإصلاحها أكثر صعوبة.

تم تقديم كلمة `let` في ES6، وهو تحديث رئيس JavaScript، لحل هذه المشكلة المحتملة باستخدام `var`. ستتعرف إلى ميزات ES6 الأخرى في التحديات اللاحقة.

إذا استبدلت `var` إلى `let` في الكود أعلاه، فإنه يؤدي إلى خطأ:

```js
let camper = "James";
let camper = "David";
```

يمكن رؤية الخطأ في وحدة تحكم المتصفح الخاص بك.

لذلك على خلاف `var`، عندما تستخدم `let`، يمكن تعريف متغير بنفس الاسم مرة واحدة فقط.

# --instructions--

حديث الكود بحيث يستخدم فقط كلمة `let`.

# --hints--

يجب ألا تكون `var` موجودة في الكود.

```js
assert.notMatch(code, /var/g);
```

يجب أن تساوي `catName` المقطع (string) الآتي `Oliver`.

```js
assert.equal(catName, 'Oliver');
```

يجب أن تساوي `catSound` المقطع (string) الآتي `Meow!`

```js
assert.equal(catSound, 'Meow!');
```

# --seed--

## --seed-contents--

```js
var catName = "Oliver";
var catSound = "Meow!";
```

# --solutions--

```js
let catName = "Oliver";
let catSound = "Meow!";
```
