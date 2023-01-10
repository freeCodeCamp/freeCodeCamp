---
id: a97fd23d9b809dac9921074f
title: Arguments Optional
challengeType: 1
forumTopicId: 14271
dashedName: arguments-optional
---

# --description--

قم بإنشاء دالة تجمع وسيطين (arrguments) معًا. إذا تم توفير argument واحدة فقط ، فقم بإرجاع function تتوقع argument واحدة وتعيد المجموع.

على سبيل المثال ، `addTogether(2, 3)` يجب أن تعيد `5`، و `addTogether(2)` يجب أن تعيد function.

استخدام هذه ال function المرتجعة مع argument واحدة سوف يعيد المجموع:

```js
var sumTwoAnd = addTogether(2);
```

`sumTwoAnd(3)` يرجع `5`.

إذا لم تكن أي من الوسيطتين (arguments) رقمًا صالحًا ، قم بارجع undefined.

# --hints--

`addTogether(2, 3)` يجب ان يعيد 5.

```js
assert.deepEqual(addTogether(2, 3), 5);
```

`addTogether(23, 30)` يجب ان يعيد 53.

```js
assert.deepEqual(addTogether(23, 30), 53);
```

`addTogether(5)(7)` يجب ان يعيد 12.

```js
assert.deepEqual(addTogether(5)(7), 12);
```

`addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ")` يجب ان يعيد `undefined`.

```js
assert.isUndefined(addTogether('https://www.youtube.com/watch?v=dQw4w9WgXcQ'));
```

`addTogether(2, "3")` يجب ان يعيد `undefined`.

```js
assert.isUndefined(addTogether(2, '3'));
```

`addTogether(2)([3])` يجب ان يعيد `undefined`.

```js
assert.isUndefined(addTogether(2)([3]));
```

`addTogether("2", 3)` يجب ان يعيد `undefined`.

```js
assert.isUndefined(addTogether('2', 3));
```

`addTogether(5, undefined)` يجب أن يعيد `undefined`.

```js
assert.isUndefined(addTogether(5, undefined));
```

# --seed--

## --seed-contents--

```js
function addTogether() {
  return false;
}

addTogether(2,3);
```

# --solutions--

```js
function addTogether() {
  var a = arguments[0];
  if (toString.call(a) !== '[object Number]') return;
  if (arguments.length === 1) {
    return function(b) {
      if (toString.call(b) !== '[object Number]') return;
      return a + b;
    };
  }
  var b = arguments[1];
  if (toString.call(b) !== '[object Number]') return;
  return a + arguments[1];
}
```
