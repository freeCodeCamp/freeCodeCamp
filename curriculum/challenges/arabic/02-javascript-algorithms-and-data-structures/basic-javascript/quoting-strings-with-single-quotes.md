---
id: 56533eb9ac21ba0edf2244b4
title: اقتباس المقاطع النصية بعلامات اقتباس منفردة
challengeType: 1
videoUrl: 'https://scrimba.com/c/cbQmnhM'
forumTopicId: 18260
dashedName: quoting-strings-with-single-quotes
---

# --description--

المقاطع النصية <dfn>(string values)</dfn> في JavaScript يمكن كتابتها بعلامات اقتباس فردية أو مزدوجة، ما زالت العلمات في البَدْء نفس النوع في النهاية. وخلافا لبعض لغات البرمجة الأخرى، علمات الاقتباس المنفردة والاقتباس المزدوجة يفعلان الشيء نفسه في JavaScript.

```js
const doubleQuoteStr = "This is a string"; 
const singleQuoteStr = 'This is also a string';
```

السبب في رغبتك في استخدام نوع اقتباس فوق النوع الآخر هو إذا رغبت في استخدام كلا النوعين في المقطع. قد يحدث هذا إذا رغبت في حفظ محادثة في مقطع نصي ووضع المحادثة بين علامات الاقتباس. استخدام آخر له هو حفظ علامة `<a>` مع سمات مختلفة في علامات الاقتباس، كل ذلك ضمن مقطع نصي.

```js
const conversation = 'Finn exclaims to Jake, "Algebraic!"';
```

ومع ذلك، تصبح هذه مشكلة إذا كنت بحاجة إلى استخدام علامات الاقتباس الخارجية بداخلها. تذكر أن المقطع يحتوي على نفس النوع من علامات الاقتباس في البداية والنهاية. ولكن إذا كان لديك نفس علامات الاقتباس في مكان ما في المنتصف، فإن المقطع سيتوقف مبكراً وسيتسبب بخطأ.

```js
const goodStr = 'Jake asks Finn, "Hey, let\'s go on an adventure?"'; 
const badStr = 'Finn responds, "Let's go!"';
```

هنا `badStr` سوف تسبب خطأ.

في <dfn>goodStr</dfn> أعلاه، يمكنك استخدام أي من علامات الاقتباس بأمان باستخدام الخط المائل (backslash) الآتية `\` كرمز التخريج (escape character).

**ملاحظة:** يجب عدم الخلط بين الخط المائل (blackslash) للشمال `\` والخط المائل (forward slash) لليمين `/`. إنهم لا يفعلون الشيء نفسه.

# --instructions--

غيّر المقطع النصي المقدم إلى مقطع مع اقتباسات فردية في البداية والنهاية وبدون رموز التخريج (escape characters).

الآن، العلامة `<a>` في المقطع تستخدم اقتباسات مزدوجة في كل مكان. سوف تحتاج إلى تغيير الاقتباسات الخارجية إلى اقتباسات فردية حتى تتمكن من إزالة رموز التخريج (escape characters).

# --hints--

يجب عليك إزالة جميع الخطوط المائلة (`\`).

```js
assert(
  !/\\/g.test(code) &&
    myStr.match(
      '\\s*<a href\\s*=\\s*"http://www.example.com"\\s*target\\s*=\\s*"_blank">\\s*Link\\s*</a>\\s*'
    )
);
```

يجب أن يكون لديك علامتا اقتباس مفردتان `'` وأربع علامات اقتباس مزدوجة `"`.

```js
assert(code.match(/"/g).length === 4 && code.match(/'/g).length === 2);
```

# --seed--

## --seed-contents--

```js
const myStr = "<a href=\"http://www.example.com\" target=\"_blank\">Link</a>";
```

# --solutions--

```js
const myStr = '<a href="http://www.example.com" target="_blank">Link</a>';
```
