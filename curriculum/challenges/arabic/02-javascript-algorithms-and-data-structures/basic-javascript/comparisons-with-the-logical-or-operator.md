---
id: 56533eb9ac21ba0edf2244d9
title: المقارنات باستخدام مشغل إي من (or) المنطقي (||)
challengeType: 1
videoUrl: 'https://scrimba.com/c/cEPrGTN'
forumTopicId: 16800
dashedName: comparisons-with-the-logical-or-operator
---

# --description--

يرجع مشغل <dfn>إي من</dfn> (logical or) الآتي (`||`) القيمة `true` إذا كان أي من <dfn>المعاملتين</dfn> هما `true`. خلاف ذلك، فإنه يرجع `false`.

يتكون مشغل <dfn>إي من</dfn> من رمزين و هما خطين مستقيمين كالآتي: (`||`). يمكن العثور على هذا الرمز عادة بين مفاتيح Backspace و Enter.

يجب أن يبدو النمط أدناه مألوفًا من الدروس السابقة:

```js
if (num > 10) {
  return "No";
}
if (num < 5) {
  return "No";
}
return "Yes";
```

سوف يعيد `Yes` فقط إذا كان `num` بين `5` و `10` (5 و 10 مشمولين). ويمكن كتابة نفس المنطق كما يلي:

```js
if (num > 10 || num < 5) {
  return "No";
}
return "Yes";
```

# --instructions--

قم بدمج تعبيرات `if` في تعبير واحد ينتج المقطع `Outside` إذا كان `val` ليس بين `10` و `20` بشمول 10 و 20. خلاف ذلك، ارجع المقطع `Inside`.

# --hints--

يجب عليك استخدام المشغل `||` مرة واحدة

```js
assert(code.match(/\|\|/g).length === 1);
```

يجب أن يكون لديك تعبير `if` واحد فقط

```js
assert(code.match(/if/g).length === 1);
```

يجب أن ينتج `testLogicalOr(0)` مقطع `Outside`

```js
assert(testLogicalOr(0) === 'Outside');
```

يجب أن ينتج `testLogicalOr(9)` مقطع `Outside`

```js
assert(testLogicalOr(9) === 'Outside');
```

يجب أن ينتج `testLogicalOr(10)` مقطع `Inside`

```js
assert(testLogicalOr(10) === 'Inside');
```

يجب أن ينتج `testLogicalOr(15)` مقطع `Inside`

```js
assert(testLogicalOr(15) === 'Inside');
```

يجب أن ينتج `testLogicalOr(19)` مقطع `Inside`

```js
assert(testLogicalOr(19) === 'Inside');
```

يجب أن ينتج `testLogicalOr(20)` مقطع `Inside`

```js
assert(testLogicalOr(20) === 'Inside');
```

يجب أن ينتج `testLogicalOr(21)` مقطع `Outside`

```js
assert(testLogicalOr(21) === 'Outside');
```

يجب أن ينتج `testLogicalOr(25)` مقطع `Outside`

```js
assert(testLogicalOr(25) === 'Outside');
```

# --seed--

## --seed-contents--

```js
function testLogicalOr(val) {
  // Only change code below this line

  if (val) {
    return "Outside";
  }

  if (val) {
    return "Outside";
  }

  // Only change code above this line
  return "Inside";
}

testLogicalOr(15);
```

# --solutions--

```js
function testLogicalOr(val) {
  if (val < 10 || val > 20) {
    return "Outside";
  }
  return "Inside";
}
```
