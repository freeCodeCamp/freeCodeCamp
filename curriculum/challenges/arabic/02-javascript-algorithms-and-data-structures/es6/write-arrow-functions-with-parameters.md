---
id: 587d7b88367417b2b2512b44
title: أنشاء وظائف السهم (Arrow Functions) مع الوسائط
challengeType: 1
forumTopicId: 301223
dashedName: write-arrow-functions-with-parameters
---

# --description--

تماما مثل اي function عادي، يمكنك تمرير الـ arguments إلى arrow function.

```js
const doubler = (item) => item * 2;
doubler(4);
```

`doubler(4)` سوف يعيد القيمة `8`.

إذا كان للوظيفة السهم وسيط واحدة، يمكن حذف الأقواس المرفقة للوسيط.

```js
const doubler = item => item * 2;
```

ومن الممكن تمرير أكثر من argument واحدة إلى الـ arrow function.

```js
const multiplier = (item, multi) => item * multi;
multiplier(4, 2);
```

`multiplier(4, 2)` سوف يعيد القيمة `8`.

# --instructions--

قم بإعادة كتابة دالة `myConcat` التي تضيف محتويات `arr2` إلى `arr1` بحيث تستخدم الدالة الـ arrow function syntax.

# --hints--

يجب عليك استبدال كلمة `var`.

```js
assert.notMatch(code, /var/g);
```

`myConcat` يجب أن يكون متغير ثابت (باستخدام `const`).

```js
assert.match(code, /const\s+myConcat/g);
```

يجب أن تكون `myConcat` وظيفة السهم (arrow function) مع وسيطين (parameters)

```js
assert(
  /myConcat=\(\w+,\w+\)=>/.test(code.replace(/\s/g, '')) &&
    typeof myConcat === 'function'
);
```

`myConcat()` يجب أن يعيد `[1, 2, 3, 4, 5]`.

```js
assert.deepEqual(myConcat([1, 2], [3, 4, 5]), [1, 2, 3, 4, 5]);
```

لا ينبغي استخدام كلمة `function`.

```js
assert.notMatch(code, /function/g);
```

# --seed--

## --seed-contents--

```js
var myConcat = function(arr1, arr2) {
  return arr1.concat(arr2);
};

console.log(myConcat([1, 2], [3, 4, 5]));
```

# --solutions--

```js
const myConcat = (arr1, arr2) =>  {
  return arr1.concat(arr2);
};

console.log(myConcat([1, 2], [3, 4, 5]));
```
