---
id: 56533eb9ac21ba0edf2244c2
title: إنتاج قيمة من وظيفة (Function)
challengeType: 1
videoUrl: 'https://scrimba.com/c/cy87wue'
forumTopicId: 18271
dashedName: return-a-value-from-a-function-with-return
---

# --description--

يمكننا نقل القيم إلى وظيفة باستخدام <dfn>معطيات (arguments)</dfn>. يمكنك استخدام تعبير `return` للحصول على قيمة من وظيفة (function).

**مثال**

```js
function plusThree(num) {
  return num + 3;
}

const answer = plusThree(5);
```

يحتوي `answer` على قيمة `8`.

تأخذ `plusThree` قيمة من <dfn>المعطى</dfn> `num` وتنتج قيمة تساوي `num + 3`.

# --instructions--

أنشئ الوظيفة `timesFive` التي تقبل معطى واحد، وتضربه في `5`، وتنتج (returns) قيمة جديدة.

# --hints--

يجب أن تكون `timesFive` وظيفة

```js
assert(typeof timesFive === 'function');
```

يجب أن تنتج `timesFive(5)` قيمة `25`

```js
assert(timesFive(5) === 25);
```

يجب أن تنتج `timesFive(2)` قيمة `10`

```js
assert(timesFive(2) === 10);
```

يجب أن تنتج `timesFive(0)` قيمة `0`

```js
assert(timesFive(0) === 0);
```

# --seed--

## --seed-contents--

```js

```

# --solutions--

```js
function timesFive(num) {
  return num * 5;
}
timesFive(10);
```
