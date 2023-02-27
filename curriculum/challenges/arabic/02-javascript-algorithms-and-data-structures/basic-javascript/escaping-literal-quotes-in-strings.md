---
id: 56533eb9ac21ba0edf2244b5
title: إخراج (Escape) علامات التنصيص في المقاطع النصية
challengeType: 1
videoUrl: 'https://scrimba.com/c/c2QvgSr'
forumTopicId: 17568
dashedName: escaping-literal-quotes-in-strings
---

# --description--

عند تحديد مقطع نصي يجب أن تبدأ وتنتهي بعلامات التنصيص مفردة ('') أو مزدوجة (""). ماذا يحدث عندما تحتاج إلى استخدام علامتا التنصيص مثل: `"` أو `'` داخل مقطعك النصي؟

في JavaScript، يمكنك <dfn>إخراج</dfn> علامتا التنصيص حتى لا تعدّ نهاية للمقطع النصي عن طريق وضع <dfn>خط مائل للشمال</dfn> بشكل (`\`) أمام علامة التنصيص.

```js
const sampleStr = "Alan said, \"Peter is learning JavaScript\".";
```

هذا يوضح إلى JavaScript أن علامة التنصيص التالية ليست بنهاية للمقطع، بل يجب أن تظهر داخل المقطع. لذا عند طبع هذا إلى الكونسول (console) ستحصل على:

```js
Alan said, "Peter is learning JavaScript".
```

# --instructions--

استخدم <dfn>شرطات مائلة للشمال</dfn> لتعيين مقطع نصي إلى متغير `myStr` بحيث إذا كنت تريد طباعته إلى الكونسول، ستري ما يلي:

```js
I am a "double quoted" string inside "double quotes".
```

# --hints--

يجب عليك استخدام علامة التنصيص المزدوجة (`"`) وتخرج العلامات أربع مرات مثل (`\"`).

```js
assert(code.match(/\\"/g).length === 4 && code.match(/[^\\]"/g).length === 2);
```

يجب أن يحتوي المتغير `myStr` على المقطع النصي الآتي: `I am a "double quoted" string inside "double quotes".`

```js
assert(/I am a "double quoted" string inside "double quotes(\."|"\.)$/.test(myStr));
```

# --seed--

## --after-user-code--

```js
(function(){
  if(typeof myStr === 'string') {
    console.log("myStr = \"" + myStr + "\"");
  } else {
    console.log("myStr is undefined");
  }
})();
```

## --seed-contents--

```js
const myStr = ""; // Change this line
```

# --solutions--

```js
const myStr = "I am a \"double quoted\" string inside \"double quotes\".";
```
