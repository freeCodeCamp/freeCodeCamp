---
id: 587d7dbb367417b2b2512baa
title: إعادة استخدام الأنماط باستخدام مجموعات التقاط (Reuse Patterns Using Capture Groups)
challengeType: 1
forumTopicId: 301364
dashedName: reuse-patterns-using-capture-groups
---

# --description--

لنقل أنك تريد مطابقة كلمة تتكرر عدة مرات كما هو الحال أدناه.

```js
let repeatStr = "row row row your boat";
```

يمكنك استخدام `/row row row/`,، ولكن ماذا إذا كنت لا تعرف الكلمة المتكررة؟ <dfn>Capture groups</dfn> يمكن استخدامها للعثور على الـ substrings المتكررة.

يتم بناء الـ Capture groups عن طريق إرفاق نمط الـ regex الذي سيتم متابقطه بين قوسين. وفي هذه الحالة، الهدف هو التقاط كلمة تتكون من أحرف أبجدية و رقمية فستكون الـ capture group كالآتي `\w+` مرفقة بين قوسين: `/(\w+)/`.

يتم حفظ الـ substring المطابق من قبل المجموعة إلى "متغير" مؤقتاً. والذي يمكن الوصول إليها داخل نفس الـ regex باستخدام backslash ورقم الـ capture group (كمثال `\1`). يتم ترقيم الـ Capture group بواسطة موقع الأقواس الافتتاحية (اليسار إلى اليمين)، بدءاً من 1.

المثال أدناه يطابق كلمة تكرر ثلاث مرات مفصولة بمسافات:

```js
let repeatRegex = /(\w+) \1 \1/;
repeatRegex.test(repeatStr); // Returns true
repeatStr.match(repeatRegex); // Returns ["row row row", "row"]
```

سيؤدي استخدام طريقة `.match()` على مقطع (string) إلى أنتاج قائمة (array) بداخلها مقطع فرعي (substring) المطابق، جنبا إلى جنب مع المجموعات المستخدمة الخاصين بها.


# --instructions--

استخدم capture groups في `reRegex` لمطابقة string يتكون من نفس الرقم مكرر ثلاث مرات مفصولين بمسافات واحدة.

# --hints--

يجب على regex الخاص بك استخدام shorthand character class للأرقام.

```js
assert(reRegex.source.match(/\\d/));
```

يجب على regex الخاص بك إعادة استخدام capture group مرتين.

```js
assert(reRegex.source.match(/\\1|\\2/g).length >= 2);
```

يجب أن يطابق الـ regex الخاص بك `42 42 42`.

```js
reRegex.lastIndex = 0;
assert(reRegex.test('42 42 42'));
```

يجب أن يطابق الـ regex الخاص بك `100 100 100`.

```js
reRegex.lastIndex = 0;
assert(reRegex.test('100 100 100'));
```

يجب أن لا يطابق الـ regex الخاص بك `42 42 42 42`.

```js
assert.equal('42 42 42 42'.match(reRegex.source), null);
```

يجب أن لا يطابق الـ regex الخاص بك ` 42 42`.

```js
assert.equal('42 42'.match(reRegex.source), null);
```

يجب أن لا يطابق الـ regex الخاص بك `101 102 103`.

```js
reRegex.lastIndex = 0;
assert(!reRegex.test('101 102 103'));
```

يجب أن لا يطابق الـ regex الخاص بك `1 2 3`.

```js
reRegex.lastIndex = 0;
assert(!reRegex.test('1 2 3'));
```

يجب أن يطابق الـ regex الخاص بك `10 10 10`.

```js
reRegex.lastIndex = 0;
assert(reRegex.test('10 10 10'));
```

Your regex should not match the string `42\t42\t42`.

```js
reRegex.lastIndex = 0;
assert(!reRegex.test('42\t42\t42'));
```

Your regex should not match the string `42  42  42`.

```js
reRegex.lastIndex = 0;
assert(!reRegex.test('42  42  42'));
```

# --seed--

## --seed-contents--

```js
let repeatNum = "42 42 42";
let reRegex = /change/; // Change this line
let result = reRegex.test(repeatNum);
```

# --solutions--

```js
let repeatNum = "42 42 42";
let reRegex = /^(\d+) \1 \1$/;
let result = reRegex.test(repeatNum);
```
