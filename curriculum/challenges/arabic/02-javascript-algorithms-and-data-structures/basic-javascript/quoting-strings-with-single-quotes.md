---
id: 56533eb9ac21ba0edf2244b4
title: اقتباس مقاطع بعلامات اقتباس منفردة (Quoting Strings with Single Quotes)
challengeType: 1
videoUrl: 'https://scrimba.com/c/cbQmnhM'
forumTopicId: 18260
dashedName: quoting-strings-with-single-quotes
---

# --description--

قيم <dfn>مقطع</dfn> في JavaScript يمكن كتابتها بعلامات اقتباس فردية أو مزدوجة، مادام تبدأ وتنتهي بنفس النوع من العلامات. وخلافا لبعض لغات البرمجة الأخرى، يفعل الاقتباس المنفرد والاقتباس المزدوج الشيء نفسه في JavaScript.

```js
const doubleQuoteStr = "This is a string"; 
const singleQuoteStr = 'This is also a string';
```

السبب في رغبتك في استخدام نوع من الاقتباس فوق الآخر هو إذا كنت ترغب في استخدام كلا النوعين في المقطع. قد يحدث هذا إذا كنت ترغب في حفظ محادثة في المقطع ووضع المحادثة بين علامات الاقتباس. استخدام آخر له هو حفظ علامة `<a>` مع سمات مختلفة في علامات الاقتباس، كل ذلك ضمن مقطع.

```js
const conversation = 'Finn exclaims to Jake, "Algebraic!"';
```

ومع ذلك، تصبح هذه مشكلة إذا كنت بحاجة إلى استخدام علامات الاقتباس الخارجية بداخلها. تذكر أن المقطع يحتوي على نفس النوع من علامات الاقتباس في البداية والنهاية. ولكن إذا كان لديك نفس علامات الاقتباس في مكان ما في المنتصف، فإن المقطع سيتوقف مبكراً وسيتسبب بخطأ.

```js
const goodStr = 'Jake asks Finn, "Hey, let\'s go on an adventure?"'; 
const badStr = 'Finn responds, "Let's go!"';
```

هنا `badStr` سوف تسبب بخطأ.

في <dfn>goodStr</dfn> أعلاه، يمكنك استخدام أي من علامات الاقتباس بأمان باستخدام الخط المائل (backslash) الآتية `\` كرمز متحايل (escape character).

**ملاحظة:** يجب عدم الخلط بين الخط المائل (blackslash) الآتية `\` والخط المائل للأمام (forward slash) الآتية `/`. إنهم لا يفعلون الشيء نفسه.

# --instructions--

غيّر المقطع المقدم إلى مقطع مع اقتباسات فردية في البداية والنهاية وبدون رموز متحايلة (escape characters).

الآن، العلامة `<a>` في المقطع تستخدم اقتباسات مزدوجة في كل مكان. سوف تحتاج إلى تغيير الاقتباسات الخارجية إلى اقتباسات فردية حتى تتمكن من إزالة الرموز متحايلة (escape characters).

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
