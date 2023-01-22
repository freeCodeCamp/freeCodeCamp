---
id: 587d7b87367417b2b2512b3f
title: استكشاف الاختلافات بين المصطلحين var و let
challengeType: 1
forumTopicId: 301202
dashedName: explore-differences-between-the-var-and-let-keywords
---

# --description--

واحدة من أكبر المشكلات في إعلان المتغيرات بكلمة `var` هي أنه يمكنك بسهولة إلغاء الإعلانات السابقة للمتغيرات:

```js
var camper = "James";
var camper = "David";
console.log(camper);
```

في الكود أعلاه، أعطى متغير `camper` قيمة `James` في الإعلان الأصلي، ثم ألغيَ عند إعادة إعلانه ليصبح `David`. ولذلك يعرض الكونسول (console) المقطع النصي (string) الآتي `David`.

في تطبيق صغير، قد لا تواجه هذه المشكلة. لكن إذا أصبح الكود الخاص بك أكبر، قد تلغي متغير دون وعي. ولأن هذا السلوك لا يوقع خطأ، يصبح البحث عن الأخطاء وإصلاحها أكثر صعوبة.

تم تقديم كلمة `let` في ES6، وهو تحديث رئيسي في الجافاسكريبت (JavaScript)، لحل هذه المشكلة المحتملة باستخدام `var`. ستتعرف على ميزات ES6 الأخرى في التحديات اللاحقة.

إذا استبدلت `var` إلى `let` في الكود أعلاه، فإنه يؤدي إلى خطأ:

```js
let camper = "James";
let camper = "David";
```

يمكن رؤية الخطأ في الكونسول (console) المتصفح الخاص بك.

لذلك على خلاف `var`، عندما تستعمل `let`، يمكن إعلان متغير بنفس الاسم مرة واحدة فقط.

# --instructions--

حدِّث الكود بحيث يستخدم فقط كلمة `let`.

# --hints--

يجب ألا تكون `var` موجودة في الكود.

```js
assert.notMatch(code, /var/g);
```

يجب أن تساوي `catName` المقطع النصي الآتي `Oliver`.

```js
assert.equal(catName, 'Oliver');
```

يجب أن تساوي `catSound` المقطع النصي الآتي `Meow!`

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
