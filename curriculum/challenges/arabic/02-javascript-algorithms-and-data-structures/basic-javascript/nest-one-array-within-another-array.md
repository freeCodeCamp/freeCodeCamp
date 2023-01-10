---
id: cf1111c1c11feddfaeb7bdef
title: أدخال قائمة في قائمة اخري
challengeType: 1
videoUrl: 'https://scrimba.com/c/crZQZf8'
forumTopicId: 18247
dashedName: nest-one-array-within-another-array
---

# --description--

يمكنك أيضًا ادخال قوائم داخل القوائم الأخرى، مثل أدناه:

```js
const teams = [["Bulls", 23], ["White Sox", 45]];
```

هذا يسمى أيضا <dfn>قوائم متعددة الأبعاد (multi-dimensional array)</dfn>.

# --instructions--

أنشئ قوائم متداخلة تسمى `myArray`.

# --hints--

يجب أن تحتوي `myArray` على الأقل علي قائمة واحدة متداخلة داخل قائمة أخرى.

```js
assert(Array.isArray(myArray) && myArray.some(Array.isArray));
```

# --seed--

## --after-user-code--

```js
if(typeof myArray !== "undefined"){(function(){return myArray;})();}
```

## --seed-contents--

```js
// Only change code below this line
const myArray = [];
```

# --solutions--

```js
const myArray = [[1, 2, 3]];
```
