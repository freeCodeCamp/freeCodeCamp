---
id: 587d7dbb367417b2b2512bab
title: Use Capture Groups to Search and Replace
challengeType: 1
forumTopicId: 301368
dashedName: use-capture-groups-to-search-and-replace
---

# --description--

البحث أمر مفيد. ومع ذلك ، يمكنك جعل البحث أكثر قوة عندما يغير أيضًا (أو يستبدل) النص الذي تطابقه.

يمكنك البحث عن النص واستبداله في سلسلة باستخدام `.replace()` على string. المدخلات لـ `.replace()` هي أولا نمط الـ regex الذي تريد البحث عنه. إن الوسيط (parameter) الثاني مقطع نصي (string) الذي يحل محل المطابقة أو وظيفة (function) للقيام بشيء ما.

```js
let wrongText = "The sky is silver.";
let silverRegex = /silver/;
wrongText.replace(silverRegex, "blue");
```

استدعاء `replace` سوف يعيد السلسلة `The sky is blue.`.

يمكنك أيضًا الوصول إلى مجموعات الالتقاط في السلسلة البديلة بعلامات الدولار (`$`).

```js
"Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1');
```

استدعاء `replace` سوف يعيد السلسلة `Camp Code`.

# --instructions--

اكتب `fixRegex` باستخدام ثلاث مجموعات التقاط تبحث عن كل كلمة في السلسلة `one two three`. ثم قم بتحديث متغير `replaceText` لاستبدال السلسة `one two three` بالسلسلة `three two one` وتعيين النتيجة إلى متغير `result`. تأكد من استخدام مجموعات التقاط في السلسلة البديلة باستخدام علامة الدولار (`$`).

# --hints--

يجب عليك استخدام `.replace()` للبحث والاستبدال.

```js
assert(code.match(/\.replace\(.*\)/));
```

يجب أن يقوم الـ regex الخاص بك بتغيير السلسلة `one two three` إلى السلسلة `three two one`

```js
assert(result === 'three two one');
```

لا يجب عليك تغيير السطر الأخير.

```js
assert(code.match(/result\s*=\s*str\.replace\(.*?\)/));
```

`fixRegex` يجب أن تستخدم ثلاث مجموعات التقاط على الأقل.

```js
assert(new RegExp(fixRegex.source + '|').exec('').length - 1 >= 3);
```

`replaceText` يجب أن يستخدمparenthesized submatch string(s) (مثال the nth parenthesized submatch string, $n, corresponds to the nth capture group).

```js
{
  const re = /(\$\d{1,2})+(?:[\D]|\b)/g;
  assert(replaceText.match(re).length >= 3);
}
```

# --seed--

## --seed-contents--

```js
let str = "one two three";
let fixRegex = /change/; // Change this line
let replaceText = ""; // Change this line
let result = str.replace(fixRegex, replaceText);
```

# --solutions--

```js
let str = "one two three";
let fixRegex = /(\w+) (\w+) (\w+)/g; // Change this line
let replaceText = "$3 $2 $1"; // Change this line
let result = str.replace(fixRegex, replaceText);
```
