---
id: 5c3dda8b4d8df89bea71600f
title: تحقق من التجميع المختلط للرموز (Check For Mixed Grouping of Characters)
challengeType: 1
forumTopicId: 301339
dashedName: check-for-mixed-grouping-of-characters
---

# --description--

في بعض الأحيان نريد التحقق من مجموعات الرموز باستخدام Regular Expression ولتحقيق هذا أننا نستخدم الأقواس `()`.

إذا كنت ترغب في العثور على `Penguin` او `Pumpkin` في string، يمكنك استخدام Regular Expression التالي: `/P(engu|umpk)in/g`

ثم تحقق مما إذا كانت مجموعات من مقطع النصي (string) المطلوبة موجودة في مقطع test النصي باستخدام طريقة (method) تسمى `test()`.

```js
let testStr = "Pumpkin";
let testRegex = /P(engu|umpk)in/;
testRegex.test(testStr);
```

دالة `test` هنا، ستعيد `true`.

# --instructions--

أصلح الـ regex بحيث يتحقق من الأسماء `Franklin Roosevelt` او `Eleanor Roosevelt` > بطريقة case sensitive وينبغي أن يقدم تنازلات للأسماء المتوسطة.

ثم أصلح الكود بحيث يتم التحقق من الـ regex الذي قمت بإنشائه مقابل `myString` و يتم إرجاع `true` أو `false` اعتماداً على ما إذا كان الـ regex مطابق.

# --hints--

الـ regex الآتي `myRegex` يجب أن يرجع `true` للسلسلة `Franklin D. Roosevelt`

```js
myRegex.lastIndex = 0;
assert(myRegex.test('Franklin D. Roosevelt'));
```

الـ regex الآتي `myRegex` يجب أن يرجع `true` للسلسلة `Eleanor Roosevelt`

```js
myRegex.lastIndex = 0;
assert(myRegex.test('Eleanor Roosevelt'));
```

الـ regex الآتي `myRegex` يجب أن يرجع `false` للسلسلة `Franklin Rosevelt`

```js
myRegex.lastIndex = 0;
assert(!myRegex.test('Franklin Rosevelt'));
```

الـ regex الآتي `myRegex` يجب أن يرجع `false` للسلسلة `Frank Roosevelt`

```js
myRegex.lastIndex = 0;
assert(!myRegex.test('Frank Roosevelt'));
```

يجب أن ينتج regex الآتي `myRegex` قيمة `false` للمقطع `FranklinRoosevelt`

```js
myRegex.lastIndex = 0;
assert(!myRegex.test('FranklinRoosevelt'));
```

يجب أن ينتج regex الآتي `myRegex` قيمة `false` للمقطع `EleanorRoosevelt`

```js
myRegex.lastIndex = 0;
assert(!myRegex.test('EleanorRoosevelt'));
```

يجب عليك استخدام `.test()` لاختبار regex.

```js
assert(code.match(/myRegex.test\(\s*myString\s*\)/));
```

يجب أن تنتج `true`.

```js
assert(result === true);
```

# --seed--

## --seed-contents--

```js
let myString = "Eleanor Roosevelt";
let myRegex = /False/; // Change this line
let result = false; // Change this line
// After passing the challenge experiment with myString and see how the grouping works
```

# --solutions--

```js
let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin|Eleanor) (([A-Z]\.?|[A-Z][a-z]+) )?Roosevelt/;
let result = myRegex.test(myString);
```
