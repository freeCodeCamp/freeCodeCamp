---
id: 56533eb9ac21ba0edf2244ed
title: إلحاق المتغيرات بالمقاطع النصية
challengeType: 1
videoUrl: 'https://scrimba.com/c/cbQmZfa'
forumTopicId: 16656
dashedName: appending-variables-to-strings
---

# --description--

تماما كما نستطيع أن نبني مقطع نصي (string) مكون من عدة سطور باستخدام <dfn>مقاطع نصية حرفية (string literals)</dfn>، يمكننا أيضا إلحاق المتغيرات في مقطع نصي (string) معين باستخدام المشغل (`+=`).

على سبيل المثال:

```js
const anAdjective = "awesome!";
let ourStr = "freeCodeCamp is ";
ourStr += anAdjective;
```

قيمة المتغير `ourStr` النهائية ستكون `freeCodeCamp is awesome!`.

# --instructions--

حدد قيمة المتغير `someAdjective` بحيث يكون مقطع نصي مكون من 3 أحرف في الأقل, ثم ضفه في نهاية المتغير `myStr` باستخدام `+=`.

# --hints--

يجب إن تكون قيمة المتغير `someAdjective` مقطع نصي (string) مكون من 3 حروف في الأقل.

```js
assert(typeof someAdjective !== 'undefined' && someAdjective.length > 2);
```

يجب عليك إلحاق المتغير `someAdjective` إلى `myStr` باستخدام `+=`.

```js
assert(code.match(/myStr\s*\+=\s*someAdjective\s*/).length > 0);
```

# --seed--

## --after-user-code--

```js
(function(){
  var output = [];
  if(typeof someAdjective === 'string') {
    output.push('someAdjective = "' + someAdjective + '"');
  } else {
    output.push('someAdjective is not a string');
  }
  if(typeof myStr === 'string') {
    output.push('myStr = "' + myStr + '"');
  } else {
    output.push('myStr is not a string');
  }
  return output.join('\n');
})();
```

## --seed-contents--

```js
// Change code below this line
const someAdjective = "";
let myStr = "Learning to code is ";
```

# --solutions--

```js
const someAdjective = "neat";
let myStr = "Learning to code is ";
myStr += someAdjective;
```
