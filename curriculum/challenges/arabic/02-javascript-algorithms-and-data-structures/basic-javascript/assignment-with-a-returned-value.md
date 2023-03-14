---
id: 56533eb9ac21ba0edf2244c3
title: استخدام القيمة الناتجة للتعيين
challengeType: 1
videoUrl: 'https://scrimba.com/c/ce2pEtB'
forumTopicId: 16658
dashedName: assignment-with-a-returned-value
---

# --description--

إذا كنت تتذكر من مناقشتنا حول <a href="/learn/javascript-algorithms-and-data-structures/basic-javascript/storing-values-with-the-assignment-operator" target="_blank" rel="noopener noreferrer nofollow">تخزين القيم مع مشغل التعيين (=)</a>، يتم عزم كل شيء لاحق لعلامة المساواة قبل تعيين القيمة. وهذا يعني أنه يمكننا أخذ القيمة الناتجة من وظيفة وتعيينها إلى متغير.

Assume we have defined a function `sum` which adds two numbers together.

```js
ourSum = sum(5, 12);
```

Calling the `sum` function with the arguments of `5` and `12` produces a return value of `17`. This return value is assigned to the `ourSum` variable.

# --instructions--

فعِّل الوظيفة `processArg` باستخدام معطى قيمته `7`, وعيّن المنتج من الوظيفة إلى قيمة المتغير `processed`.

# --hints--

يجب أن تكون `processed` قيمته `2`

```js
assert(processed === 2);
```

يجب عليك تعيين `processArg` إلى `processed`

```js
assert(/processed\s*=\s*processArg\(\s*7\s*\)/.test(code));
```

# --seed--

## --after-user-code--

```js
(function(){return "processed = " + processed})();
```

## --seed-contents--

```js
// Setup
let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line

```

# --solutions--

```js
var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

processed = processArg(7);
```
