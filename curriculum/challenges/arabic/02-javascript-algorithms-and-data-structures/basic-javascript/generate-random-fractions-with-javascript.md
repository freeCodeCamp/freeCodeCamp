---
id: cf1111c1c11feddfaeb9bdef
title: إنشاء كسور عشوائية باستخدام JavaScript
challengeType: 1
videoUrl: 'https://scrimba.com/c/cyWJJs3'
forumTopicId: 18185
dashedName: generate-random-fractions-with-javascript
---

# --description--

الأرقام العشوائية مفيدة لخلق سلوك عشوائي.

لدى JavaScript وظيفة `Math.random()` التي تولد رَقَم عشري عشوائي بين `0` (مشمول) و `1` (غير مشمول). ولذلك يمكن أن ينتج `Math.random()` رَقَم `0` ولكن لا يمكن أبدا أن ينتج رَقَم `1`.

**ملاحظة:** مثل <a href="/learn/javascript-algorithms-and-data-structures/basic-javascript/storing-values-with-the-assignment-operator" target="_blank" rel="noopener noreferrer nofollow">قيم التخزين مع مشغل التعيين (=)</a>، سيتم حل جميع مكالمات الوظيفة قبل تنفيذ `return` حتى نتمكن من `return` قيمة وظيفة `Math.random()`.

# --instructions--

غيّر `randomFraction` لإنتاج رَقَم عشوائي بدلا من إنتاج `0`.

# --hints--

يجب أن ينتج `randomFraction` رقما عشوائيا.

```js
assert(typeof randomFraction() === 'number');
```

يجب أن يكون الرَّقْم المنتج بواسطة `randomFraction` عشري.

```js
assert((randomFraction() + '').match(/\./g));
```

يجب أن تستخدم `Math.random` لإنشاء رَقَم عشري عشوائي.

```js
assert(code.match(/Math\.random/g).length >= 0);
```

# --seed--

## --after-user-code--

```js
(function(){return randomFraction();})();
```

## --seed-contents--

```js
function randomFraction() {

  // Only change code below this line

  return 0;

  // Only change code above this line
}
```

# --solutions--

```js
function randomFraction() {
  return Math.random();
}
```
