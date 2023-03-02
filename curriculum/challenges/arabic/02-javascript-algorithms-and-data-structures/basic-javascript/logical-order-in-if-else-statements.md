---
id: 5690307fddb111c6084545d7
title: الترتيب المنطقي في تعبيرات If Else
challengeType: 1
videoUrl: 'https://scrimba.com/c/cwNvMUV'
forumTopicId: 18228
dashedName: logical-order-in-if-else-statements
---

# --description--

الترتيب مهم في عبارات `if` و `else if`.

يتم تنفيذ الوظيفة (function) من الأعلى إلى الأسفل، لذا سترغب في توخي الحذر بشأن العبارة التي تأتي أولاً.

ولنأخذ هاتين الوظيفتين كمثال.

إليك الأول:

```js
function foo(x) {
  if (x < 1) {
    return "Less than one";
  } else if (x < 2) {
    return "Less than two";
  } else {
    return "Greater than or equal to two";
  }
}
```

أما الثاني فقد غير ترتيب العبارات فقط:

```js
function bar(x) {
  if (x < 2) {
    return "Less than two";
  } else if (x < 1) {
    return "Less than one";
  } else {
    return "Greater than or equal to two";
  }
}
```

بينما تبدو هاتان الوظيفتان متطابقتان تقريباً، إذا اعطينا رَقم إلى كليهما نحصل على نواتج مختلفة.

```js
foo(0)
bar(0)
```

سوف ينتج `foo(0)` المقطع `Less than one`، وسوف ينتج `bar(0)` المقطع `Less than two`.

# --instructions--

غيّر ترتيب المنطق في الوظيفة (function) بحيث تنتج العبارات الصحيحة في جميع الحالات.

# --hints--

يجب أن تنتج `orderMyLogic(4)` المقطع `Less than 5`

```js
assert(orderMyLogic(4) === 'Less than 5');
```

يجب أن تنتج `orderMyLogic(6)` المقطع `Less than 10`

```js
assert(orderMyLogic(6) === 'Less than 10');
```

يجب أن تنتج `orderMyLogic(11)` المقطع `Greater than or equal to 10`

```js
assert(orderMyLogic(11) === 'Greater than or equal to 10');
```

# --seed--

## --seed-contents--

```js
function orderMyLogic(val) {
  if (val < 10) {
    return "Less than 10";
  } else if (val < 5) {
    return "Less than 5";
  } else {
    return "Greater than or equal to 10";
  }
}

orderMyLogic(7);
```

# --solutions--

```js
function orderMyLogic(val) {
  if(val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}
```
