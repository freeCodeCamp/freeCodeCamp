---
id: 587d7dbb367417b2b2512bac
title: إزالة Whitespace من البداية و النهاية (Remove Whitespace from Start and End)
challengeType: 1
forumTopicId: 301362
dashedName: remove-whitespace-from-start-and-end
---

# --description--

في بعض الأحيان لا تكون الـ whitespaces حول الـ strings مطلوبة ولكنها موجودة. المعالجة النموذجية للـ strings هي إزالة الـ whitespace في بدايتها ونهايتها.

# --instructions--

اكتب regex و استخدم الطرق المناسبة لإزالة الـ whitespace في بداية و نهاية الـ strings.

**ملاحظة:** طريقة `String.prototype.trim()` ستعمل هنا، ولكن ستحتاج إلى إكمال هذا التحدي باستخدام regular expressions.

# --hints--

`result` يجب أن تكون مساوية للـ string الآتي `Hello, World!`

```js
assert(result === 'Hello, World!');
```

يجب ألا يستخدم حلك طريقة `String.prototype.trim()`.

```js
assert(!code.match(/\.?[\s\S]*?trim/));
```

متغير النتيجة `result` يجب ألا يتم تعيينه مباشرة إلى string

```js
assert(!code.match(/result\s*=\s*["'`].*?["'`]/));
```

لا ينبغي تغيير قيمة متغير `hello`.

```js
assert(hello === '   Hello, World!  ');
```

# --seed--

## --seed-contents--

```js
let hello = "   Hello, World!  ";
let wsRegex = /change/; // Change this line
let result = hello; // Change this line
```

# --solutions--

```js
let hello = "   Hello, World!  ";
let wsRegex = /^(\s+)(.+[^\s])(\s+)$/;
let result = hello.replace(wsRegex, '$2');
```
