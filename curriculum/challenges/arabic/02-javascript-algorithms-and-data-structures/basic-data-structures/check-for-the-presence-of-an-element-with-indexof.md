---
id: 587d7b7b367417b2b2512b14
title: تحقق من وجود عنصر باستخدام indexOf()
challengeType: 1
forumTopicId: 301154
dashedName: check-for-the-presence-of-an-element-with-indexof
---

# --description--

نظرًا لأنه يمكن تغيير القوائم، أو *يتم تحويرها* في أي وقت، لا يوجد ضمان حول مكان وجود جزء معين من البيانات في قائمة معينة، أو حتي إذا كان هذا العنصر لا يزال موجودا. لحسن الحظ، يوفر لنا JavaScript وظيفة مدمجة (built-in method) أخرى تسمى `indexOf()`، وهذه تسمح لنا بالتحقق بسرعة وسهولة من وجود عنصر في القائمة. تأخذ `indexOf()` عنصرا كوسيط عند تفعيلها، فإنها تنتج المكان (position)، أو الترتيب (index)، لهذا العنصر، أو `-1` إذا كان العنصر غير موجود في القائمة (array).

على سبيل المثال:

```js
let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];

fruits.indexOf('dates');
fruits.indexOf('oranges');
fruits.indexOf('pears');
```

`indexOf('dates')` يرجع `-1`، و `indexOf('oranges')` يرجع `2`، و `indexOf('pears')` يرجع `1` (اول ترتيب يوجد فيه كل عنصر).

# --instructions--

`indexOf()` يمكن أن تكون مفيدة بشكل لا يصدق للتحقق بسرعة من وجود عنصر في القائمة. لقد حددنا الوظيفة `quickCheck`، التي تأخذ القائمة وعناصر كمعطيات (arguments). عدل الوظيفة باستخدام `indexOf()` بحيث تنتج `true` إذا كان العنصر الذي تم تمريره موجود في القائمة، و `false` إذا لم يكن موجود.

# --hints--

يجب أن تقوم الوظيفة `quickCheck` بإرجاع منطق (boolean) (`true` أو `false`)، ليس مقطع نصي (string) (`"true"` أو `"false"`)

```js
assert.isBoolean(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
```

`quickCheck(["squash", "onions", "shallots"], "mushrooms")` يجب أن ترجع `false`

```js
assert.strictEqual(
  quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'),
  false
);
```

`quickCheck(["onions", "squash", "shallots"], "onions")` يجب ان ترجع `true`

```js
assert.strictEqual(
  quickCheck(['onions', 'squash', 'shallots'], 'onions'),
  true
);
```

`quickCheck([3, 5, 9, 125, 45, 2], 125)` يجب ان ترجع `true`

```js
assert.strictEqual(quickCheck([3, 5, 9, 125, 45, 2], 125), true);
```

`quickCheck([true, false, false], undefined)` يجب ان ترجع `false`

```js
assert.strictEqual(quickCheck([true, false, false], undefined), false);
```

يجب أن تستخدم الوظيفة `quickCheck` طريقة `indexOf()`

```js
assert.notStrictEqual(quickCheck.toString().search(/\.indexOf\(/), -1);
```

# --seed--

## --seed-contents--

```js
function quickCheck(arr, elem) {
  // Only change code below this line

  // Only change code above this line
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
```

# --solutions--

```js
function quickCheck(arr, elem) {
  return arr.indexOf(elem) >= 0; 
}
```
