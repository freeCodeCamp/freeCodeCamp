---
id: cf1111c1c12feddfaeb3bdef
title: استخدام المنطق الشرطي مع تعبيرات If
challengeType: 1
videoUrl: 'https://scrimba.com/c/cy87mf3'
forumTopicId: 18348
dashedName: use-conditional-logic-with-if-statements
---

# --description--

تستخدم تعبيرات `if` لإخذ القرارات في الكود. تخبر كلمة `if` لغة JavaScript بتنفيذ التعليمات البرمجية داخل الأقواس المقرونة (curly braces) تحت شروط معينة معرفة في أقواس دائرية (parentheses). تعرف هذه الشروط بالشروط المنطقية `Boolean` ويمكن أن تكون قيمتها فقط صحيحة `true` أو خاطئة `false`.

عندما يتم تقييم الشرط المنطقي إلى صحيح `true`، يقوم البرنامج بتنفيذ التعبيرات البرمجية داخل الأقواس المقرونة (curly braces). عندما يتم تقييم الشرط المنطقي إلى خطأ `false`، التعليمات البرمجية داخل الأقواس المقرونة (curly braces) لن تنفذ.

**كود زائف (Pseudocode)**

<blockquote>عندما (<i>تكون حالة الشرط true</i>) {<br>  <i>يتم تنفيذ التعبير</i><br>}</blockquote>

**مثال**

```js
function test (myCondition) {
  if (myCondition) {
    return "It was true";
  }
  return "It was false";
}

test(true);
test(false);
```

ينتج `test(true)` مقطع `It was true`، وينتج `test(false)` مقطع `It was false`.

عندما تفعَّل `test` بقيمة `true`، سيقوم تعبير `if` بتقييم `myCondition` لتتيقن من أنها `true` أو لا. نظرًا لأنه `true`، فإن الوظيفة تنتج `It was true`. عندما تفعَّل `test` بقيمة `false`، يكون `myCondition` قيمته *ليست* `true` ولم يتم تنفيذ العبارة الواردة في الأقواس المدورة وتنتج الوظيفة `It was false`.

# --instructions--

أنشئ تعبير `if` داخل الوظيفة لينتج `Yes, that was true` إذا حالة الوسيط `wasThatTrue` تكون `true` وينتج `No, that was false` خلافا لذلك.

# --hints--

يجب أن تكون `trueOrFalse` وظيفة

```js
assert(typeof trueOrFalse === 'function');
```

يجب أن تنتج `trueOrFalse(true)` مقطع نصي

```js
assert(typeof trueOrFalse(true) === 'string');
```

يجب أن تنتج `trueOrFalse(false)` مقطع نصي

```js
assert(typeof trueOrFalse(false) === 'string');
```

يجب أن تنتج `trueOrFalse(true)` مقطع نصي `Yes, that was true`

```js
assert(trueOrFalse(true) === 'Yes, that was true');
```

يجب أن تنتج `trueOrFalse(false)` مقطع نصي `No, that was false`

```js
assert(trueOrFalse(false) === 'No, that was false');
```

# --seed--

## --seed-contents--

```js
function trueOrFalse(wasThatTrue) {
  // Only change code below this line



  // Only change code above this line

}
```

# --solutions--

```js
function trueOrFalse(wasThatTrue) {
  if (wasThatTrue) {
    return "Yes, that was true";
  }
  return "No, that was false";
}
```
