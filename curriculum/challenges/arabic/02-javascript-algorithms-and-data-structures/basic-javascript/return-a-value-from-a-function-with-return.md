---
id: 56533eb9ac21ba0edf2244c2
title: إرجاع قيمة من وظيفة (Return a Value from a Function with Return)
challengeType: 1
videoUrl: 'https://scrimba.com/c/cy87wue'
forumTopicId: 18271
dashedName: return-a-value-from-a-function-with-return
---

# --description--

يمكننا نقل القيم إلى وظيفة باستخدام <dfn>حجج</dfn>. يمكنك استخدام `return` لإرسال قيمة إلى خارج الوظيفة.

**مثال**

```js
function plusThree(num) {
  return num + 3;
}

const answer = plusThree(5);
```

لدي `answer` القيمة `8` الآن.

يأخذ `plusThree` من <dfn>الحجج</dfn> ما يقابل `num` وينتج قيمة تساوي `num + 3`.

# --instructions--

أنشئ وظيفة `timesFive` التي تقبل حجة واحد، وتضربه في `5`، وترجع القيمة الجديدة.

# --hints--

يجب أن تكون `timesFive` وظيفة

```js
assert(typeof timesFive === 'function');
```

يجب أن ينتج `timesFive(5)` قيمة `25`

```js
assert(timesFive(5) === 25);
```

يجب أن ينتج `timesFive(2)` قيمة `10`

```js
assert(timesFive(2) === 10);
```

يجب أن ينتج `timesFive(0)` قيمة `0`

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
