---
id: 587d7b87367417b2b2512b42
title: تغير القائمة (array) المعلنة عند استخدام const
challengeType: 1
forumTopicId: 301206
dashedName: mutate-an-array-declared-with-const
---

# --description--

إذا كنت غير مألوفة مع `const`، تحقق <a href="/learn/javascript-algorithms-and-data-structures/basic-javascript/declare-a-read-only-variable-with-the-const-keyword" target="_blank" rel="noopener noreferrer nofollow">من هذا التحدي حول مصطلح <code>const</code></a>.

يحتوي إعلان `const` على العديد من حالات الاستخدام في JavaScript الحديثة.

بعض المطورين يفضلون تعيين جميع متغيراتهم باستخدام `const` بشكل افتراضي، ما لم يعلموا أنهم سيحتاجون إلى إعادة تعيين القيمة. فقط في تلك الحالة، يستخدمون `let`.

ومع ذلك، من المهم أن نفهم أن الـ objects (بما في ذلك arrays و functions) المخصصة للمتغير باستخدام `const` لا تزال قابلة للتغيير. استخدام إعلان `const` يمنع فقط إعادة تخصص هوية للمتغير.

```js
const s = [5, 6, 7];
s = [1, 2, 3];
s[2] = 45;
console.log(s);
```

`s = [1, 2, 3]` سيؤدي إلى خطأ. بعد التعليق على هذا السطر، سيعرض `console.log` القيمة `[5, 6, 45]`.

كما ترون، يمكنك تغيير الكائن `[5, 6, 7]` نفسه والمتغير `s` سيظل يشير إلى الـ array المعدلة `[5, 6, 45]`. مثل جميع الـ arrays، عناصر الـ array في `s` قابلة للتغيير، ولكن لأن `const` تم استخدامها، لا يمكنك استخدام معرف المتغير `s` للإشارة إلى array مختلفة باستخدام مشغل التعيين (assignment operator).

# --instructions--

تعلن القائمة (array) كالآتي `const s = [5, 7, 2]`. قم بتغيير الـ array إلى `[2, 5, 7]` باستخدام تعيينات العناصر المتنوعة.

# --hints--

لا ينبغي أن تستبدل كلمة `const`.

```js
(getUserInput) => assert(getUserInput('index').match(/const/g));
```

`s` يجب أن يكون متغير ثابت (باستخدام `const`).

```js
(getUserInput) => assert(getUserInput('index').match(/const\s+s/g));
```

لا يجب عليك تغيير إعلان القائمة (array) الأصلي.

```js
(getUserInput) =>
  assert(
    getUserInput('index').match(
      /const\s+s\s*=\s*\[\s*5\s*,\s*7\s*,\s*2\s*\]\s*;?/g
    )
  );
```

`s` يجب أن يساوي `[2, 5, 7]`.

```js
assert.deepEqual(s, [2, 5, 7]);
```

# --seed--

## --seed-contents--

```js
const s = [5, 7, 2];
function editInPlace() {
  // Only change code below this line

  // Using s = [2, 5, 7] would be invalid

  // Only change code above this line
}
editInPlace();
```

# --solutions--

```js
const s = [5, 7, 2];
function editInPlace() {
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
}
editInPlace();
```
