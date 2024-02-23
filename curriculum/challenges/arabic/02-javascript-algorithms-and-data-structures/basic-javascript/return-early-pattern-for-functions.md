---
id: 56533eb9ac21ba0edf2244c4
title: نمط return المبكر للوظائف
challengeType: 1
videoUrl: 'https://scrimba.com/c/cQe39Sq'
forumTopicId: 18272
dashedName: return-early-pattern-for-functions
---

# --description--

عندما يتم الوصول إلى عبارة `return`، يتوقف تنفيذ الوظيفة الحالية ويعود التحكم إلى مكان الاستدعاء.

**مثال**

```js
function myFun() {
  console.log("Hello");
  return "World";
  console.log("byebye")
}
myFun();
```

سيتم عرض مقطع `Hello` في وحدة التحكم، وإنشاء مقطع `World`. لن يعرض المقطع `byebye` في وحدة التحكم أبدا، لأن الوظيفة تنتهي عند عبارة `return`.

# --instructions--

عدّل الوظيفة `abTest` بحيث إذا كان `a` أو `b` أقل من `0` ستنتهي الوظيفة مع إنتاج قيمة `undefined` فوراً.

**تلميح**  
تذكر أن <a href="https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/understanding-uninitialized-variables" target="_blank" rel="noopener noreferrer nofollow"> <code>undefined</code> مصطلح </a> وليست مقطع نصي.

# --hints--

يجب أن ينتج `abTest(2, 2)` رَقْم

```js
assert(typeof abTest(2, 2) === 'number');
```

يجب أن ينتج `abTest(2, 2)` رَقْم `8`

```js
assert(abTest(2, 2) === 8);
```

يجب أن ينتج `abTest(-2, 2)` قيمة `undefined`

```js
assert(abTest(-2, 2) === undefined);
```

يجب أن ينتج `abTest(2, -2)` قيمة `undefined`

```js
assert(abTest(2, -2) === undefined);
```

يجب أن ينتج `abTest(2, 8)` رَقْم `18`

```js
assert(abTest(2, 8) === 18);
```

يجب أن ينتج `abTest(3, 3)` رَقْم `12`

```js
assert(abTest(3, 3) === 12);
```

يجب أن ينتج `abTest(0, 0)` رَقْم `0`

```js
assert(abTest(0, 0) === 0);
```

# --seed--

## --seed-contents--

```js
// Setup
function abTest(a, b) {
  // Only change code below this line



  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2,2);
```

# --solutions--

```js
function abTest(a, b) {
  if(a < 0 || b < 0) {
    return undefined;
  }
  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
```
