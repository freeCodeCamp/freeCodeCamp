---
id: 587d7dba367417b2b2512ba9
title: نظرة إيجابية وسلبية (Positive and Negative Lookahead)
challengeType: 1
forumTopicId: 301360
dashedName: positive-and-negative-lookahead
---

# --description--

<dfn>Lookahead</dfn> هي الأنماط التي تخبر جافا سكريبت بالبحث في الـ string الخاص بك للتحقق من الأنماط بداخله. يمكن أن يكون هذا مفيداً عندما تريد البحث عن أنماط متعددة في نفس الـ string.

هناك نوعان من الـ lookaheads: الـ: <dfn>positive lookahead</dfn> و <dfn>negative lookahead</dfn>.

Positive lookahead تنظر للتأكد من أن العنصر في نمط البحث متواجد، ولكن لن نطابقه في الواقع. يتم استخدام الـ positive lookahead كـ `(?=...)` حيث `...` هو الجزء المطلوب غير المتطابق.

ومن ناحية أخرى، فإن الـ negative lookahead ستنظر للتأكد من عدم وجود عنصر في نمط البحث. يتم استخدام الـ negative lookahead كـ `(?!...)` حيث `...` هو النمط الذي لا تريد ان يكون متواجد. ويعاد ما تبقى من النمط إذا لم يكن جزء الـ negative lookahead موجودا.

Lookaheads مربكة بعض الشيء ولكن بعض الأمثلة سوف تساعد.

```js
let quit = "qu";
let noquit = "qt";
let quRegex= /q(?=u)/;
let qRegex = /q(?!u)/;
quit.match(quRegex);
noquit.match(qRegex);
```

هذان الاستدعائان لـ `match` سيرجعان `["q"]`.

وهناك استخدام عملي أكثر للـ lookaheads يتمثل في فحص نمطين أو أكثر في string واحد. إليك مدقق كلمة مرور بسيط يبحث عن ما بين 3 و 6 أحرف ورقم واحد على الأقل:

```js
let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
checkPass.test(password);
```

# --instructions--

استخدم lookaheads في `pwRegex` لمطابقة كلمات المرور التي يزيد طولها عن 5 أحرف ولديها رقمان متتاليين.

# --hints--

يجب أن يستخدم الـ regex الخاص بك اثنين `lookaheads` يكونان positive.

```js
assert(pwRegex.source.match(/\(\?=.*?\)\(\?=.*?\)/) !== null);
```

يجب أن لا يطابق الـ regex الخاص بك `astronaut`

```js
pwRegex.lastIndex = 0;
assert(!pwRegex.test('astronaut'));
```

يجب أن لا يطابق الـ regex الخاص بك `banan1`

```js
pwRegex.lastIndex = 0;
assert(!pwRegex.test('banan1'));
```

يجب أن يطابق الـ regex الخاص بك `bana12`

```js
pwRegex.lastIndex = 0;
assert(pwRegex.test('bana12'));
```

يجب أن يطابق الـ regex الخاص بك `abc123`

```js
pwRegex.lastIndex = 0;
assert(pwRegex.test('abc123'));
```

يجب أن لا يطابق الـ regex الخاص بك `12345`

```js
pwRegex.lastIndex = 0;
assert(!pwRegex.test('12345'));
```

يجب أن يطابق الـ regex الخاص بك `8pass99`

```js
pwRegex.lastIndex = 0;
assert(pwRegex.test('8pass99'));
```

يجب أن لا يطابق الـ regex الخاص بك `1a2bcde`

```js
pwRegex.lastIndex = 0;
assert(!pwRegex.test('1a2bcde'));
```

يجب أن يطابق الـ regex الخاص بك `astr1on11aut`

```js
pwRegex.lastIndex = 0;
assert(pwRegex.test('astr1on11aut'));
```

# --seed--

## --seed-contents--

```js
let sampleWord = "astronaut";
let pwRegex = /change/; // Change this line
let result = pwRegex.test(sampleWord);
```

# --solutions--

```js
let pwRegex =  /(?=\w{6})(?=\w*\d{2})/;
```
