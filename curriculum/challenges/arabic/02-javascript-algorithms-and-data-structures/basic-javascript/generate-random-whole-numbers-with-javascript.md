---
id: cf1111c1c12feddfaeb1bdef
title: إنشاء أرقام صحيحة عشوائية باستخدام JavaScript
challengeType: 1
videoUrl: 'https://scrimba.com/c/cRn6bfr'
forumTopicId: 18186
dashedName: generate-random-whole-numbers-with-javascript
---

# --description--

من الرائع أنه يمكننا توليد أرقام عشرية عشوائية، ولكن من المفيد أكثر إذا استخدمنا ذلك لتوليد أعداد عشوائية صحيحة.

<ol><li>استخدم <code>Math.random()</code> لإنشاء رَقَم عشري عشوائي.</li><li>ضاعف هذا الرَّقَم العشري العشوائي في <code>20</code>.</li><li>استخدم الوظيفة أخر، <code>Math.floor()</code> لتقريب الرَّقْم إلى أقرب رَقَم صحيح.</li></ol>

تذكر ألا يمكن `Math.random()` أن يعيد `1` و لأنك تقريب لأقل رَقْم، من المستحيل في الواقع الحصول على `20`. ستعطينا هذه التقنية رَقَما صحيحا بين `0` و `19`.

بتجميع كل شيء معًا، هذا هو الكود الخاص بنا:

```js
Math.floor(Math.random() * 20);
```

نحن نستدعي `Math.random()` ثم نضرب النتيجة في 20، ثم نمرر القيمة إلى وظيفة `Math.floor()` لتقريب القيمة إلى أقرب عدد صحيح.

# --instructions--

استخدم هذه التقنية لإنشاء وإعادة عدد صحيح عشوائي بين `0` و `9`.

# --hints--

يجب أن تكون نتيجة `randomWholeNum` عدداً صحيحاً.

```js
assert(
  typeof randomWholeNum() === 'number' &&
    (function () {
      var r = randomWholeNum();
      return Math.floor(r) === r;
    })()
);
```

يجب عليك استخدام `Math.random` لتوليد رَقَم عشوائي.

```js
assert(code.match(/Math.random/g).length >= 1);
```

عليك ضرب نتيجة `Math.random` في 10 لجعلها رقما بين صفر و تسعة.

```js
assert(
  code.match(/\s*?Math.random\s*?\(\s*?\)\s*?\*\s*?10[\D]\s*?/g) ||
    code.match(/\s*?10\s*?\*\s*?Math.random\s*?\(\s*?\)\s*?/g)
);
```

يجب عليك استخدام `Math.floor` لإزالة الجزء العشري من الرَّقَم.

```js
assert(code.match(/Math.floor/g).length >= 1);
```

# --seed--

## --after-user-code--

```js
(function(){return randomWholeNum();})();
```

## --seed-contents--

```js
function randomWholeNum() {

  // Only change code below this line

  return Math.random();
}
```

# --solutions--

```js
function randomWholeNum() {
  return Math.floor(Math.random() * 10);
}
```
