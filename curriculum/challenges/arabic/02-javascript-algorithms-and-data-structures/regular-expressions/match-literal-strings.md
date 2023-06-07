---
id: 587d7db3367417b2b2512b8f
title: مطابقة النصوص الحرفية
challengeType: 1
forumTopicId: 301355
dashedName: match-literal-strings
---

# --description--

في التحدي الأخير، بحثت عن كلمة `Hello` باستخدام regular expression الاتي `/Hello/`. هذا regex يبحث عن مطابقة حرفية في المقطع النصي الآتي `Hello`. إليك مثال آخر يبحث عن مطابقة حرفية في المقطع النصي الآتي `Kevin`:

```js
let testStr = "Hello, my name is Kevin.";
let testRegex = /Kevin/;
testRegex.test(testStr);
```

هذا الاختبار `test` سيرجع `true`.

لن تتطابق أي أشكال أخرى من `Kevin`. على سبيل المثال، لن يتطابق الـ regex الاتي `/Kevin/` مع `kevin` أو `KEVIN`.

```js
let wrongRegex = /kevin/;
wrongRegex.test(testStr);
```

هذا الاختبار `test` سيرجع `false`.

والتحدي المستقبلي سيبين كيفية مطابقة تلك الأشكال الأخرى أيضا.

# --instructions--

أكمل regex الأتي `waldoRegex` للعثور على `"Waldo"` في المقطع (string) النصية `waldoIsHiding` مع مطابقة حرفية.

# --hints--

إن regex الخاص بك `waldoRegex` يجب أن يجد المقطع النصي الآتي `Waldo`

```js
waldoRegex.lastIndex = 0;
assert(waldoRegex.test(waldoIsHiding));
```

يَجِبُ ألاّ يبحث regex الخاص بك `waldoRegex` عن أي شئ أخر.

```js
waldoRegex.lastIndex = 0;
assert(!waldoRegex.test('Somewhere is hiding in this text.'));
```

يجب عليك إجراء مطابقة حرفية للمقطع النصية (string) باستخدام regex الخاص بك.

```js
assert(!/\/.*\/i/.test(code));
```

# --seed--

## --seed-contents--

```js
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /search/; // Change this line
let result = waldoRegex.test(waldoIsHiding);
```

# --solutions--

```js
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Change this line
let result = waldoRegex.test(waldoIsHiding);
```
