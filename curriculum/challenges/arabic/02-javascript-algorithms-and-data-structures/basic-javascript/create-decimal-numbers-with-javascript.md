---
id: cf1391c1c11feddfaeb4bdef
title: إنشاء أرقام عشرية باستخدام JavaScript
challengeType: 1
videoUrl: 'https://scrimba.com/c/ca8GEuW'
forumTopicId: 16826
dashedName: create-decimal-numbers-with-javascript
---

# --description--

يمكننا تخزين أرقام عشرية في المتغيرات أيضا. يشار أحياناً إلى الأرقام العشرية على أنها أرقام <dfn>نُقَط عائمة (floating point)</dfn> أو <dfn>عائمات (floats)</dfn>.

**ملاحظة:** عندما تحسب الأرقام، يتم حسابها بدقة محدودة. وقد تؤدي العمليات التي تستخدم نُقَط عائمة إلى نتائج مختلفة عن النتائج المرغوبة. إذا حصلت على واحدة من هذه النتائج، أفتح موضوع في <a href="https://forum.freecodecamp.org/" target="_blank" rel="noopener noreferrer nofollow">منتدى freeCodeCamp</a>.

# --instructions--

أنشئ متغير `myDecimal` واعطه قيمة عشرية بجزء كسري (على سبيل المثال `5.7`).

# --hints--

يجب أن يكون `myDecimal` رقما.

```js
assert(typeof myDecimal === 'number');
```

يجب أن يحتوي `myDecimal` على نقطة عشرية (decimal point)

```js
assert(myDecimal % 1 != 0);
```

# --seed--

## --after-user-code--

```js
(function(){if(typeof myDecimal !== "undefined"){return myDecimal;}})();
```

## --seed-contents--

```js
const ourDecimal = 5.7;

// Only change code below this line

```

# --solutions--

```js
const myDecimal = 9.9;
```
