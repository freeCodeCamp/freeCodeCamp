---
id: 56533eb9ac21ba0edf2244b6
title: تسلسلات الإخراج في المقاطع النصية
challengeType: 1
videoUrl: 'https://scrimba.com/c/cvmqRh6'
forumTopicId: 17567
dashedName: escape-sequences-in-strings
---

# --description--

الاقتباسات (quotes) ليست الرموز الوحيدة التي يمكن أن تكتب <dfn>مخرَّجة</dfn> (escaped) داخل مقطع نصي (string). تتيح لك escape sequences استخدام الرموز التي لا تمكن استعمالها في مقطع ما بدونهم.

<table class='table table-striped'><thead><tr><th>الكود</th><th>الناتج</th></tr></thead><tbody><tr><td><code>\'</code></td><td>single quote</td></tr><tr><td><code>\"</code></td><td>double quote</td></tr><tr><td><code>\\</code></td><td>backslash</td></tr><tr><td><code>\n</code></td><td>newline</td></tr><tr><td><code>\t</code></td><td>tab</td></tr><tr><td><code>\r</code></td><td>carriage return</td></tr><tr><td><code>\b</code></td><td>word boundary</td></tr><tr><td><code>\f</code></td><td>form feed</td></tr></tbody></table>

*لاحظ أن يجب أن يكون الخط المائل (backslash) نفسه يخرَّج (escaped) ليتم عرضه كخط مائل backslash.*

# --instructions--

عيّن المقاطع الثلاثة في السطور التالية في المتغير الوحيد `myStr` باستخدام تسلسلات التخريج (escape sequences).

<pre>
FirstLine
    \SecondLine
ThirdLine
</pre>

سوف تحتاج إلى استخدام تسلسلات التخريج لإدراج الرموز الخاصة (special characters) بشكل صحيح. ستحتاج أيضًا إلى اتباع التباعد كما هو موضح أعلاه، دون مسافات بين تسلسلات التخريج escape sequences أو الكلمات.

**ملاحظة:** يتم الحصول على التباعد (indentation) في `SecondLine` باستخدام رمز التخريح الشريط (tab escape character) وليس المسافة الفارغة (space).

# --hints--

يجب ألا يحتوي `myStr` على أي مسافات

```js
assert(!/ /.test(myStr));
```

يجب أن يحتوي `myStr` على المقطع (string) الآتي `FirstLine`, و `SecondLine`, و `ThirdLine` (تذكر الحساسية حالة الحرف (case sensitivity))

```js
assert(
  /FirstLine/.test(myStr) && /SecondLine/.test(myStr) && /ThirdLine/.test(myStr)
);
```

يجب أن يتبع `FirstLine` رمز السطر الجديد (newline character) الاتي `\n`

```js
assert(/FirstLine\n/.test(myStr));
```

يجب أن يحتوي `myStr` على رمز الشريط (tab character) وهو `\t` الذي يتبع رمز السطر الجديد (newline character)

```js
assert(/\n\t/.test(myStr));
```

يجب أن يسبق `SecondLine` رمز خط مائل (backslash character) يكتب هكذا `\`

```js
assert(/\\SecondLine/.test(myStr));
```

يجب أن يكون هناك رمز السطر الجديد (newline character) بين `SecondLine` و `ThirdLine`

```js
assert(/SecondLine\nThirdLine/.test(myStr));
```

يجب أن يحتوي `myStr` فقط على الرموز التي تظهر في التعليمات

```js
assert(myStr === 'FirstLine\n\t\\SecondLine\nThirdLine');
```

# --seed--

## --seed-contents--

```js
const myStr = ""; // Change this line
```

# --solutions--

```js
const myStr = "FirstLine\n\t\\SecondLine\nThirdLine";
```
