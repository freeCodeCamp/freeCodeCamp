---
id: acda2fb1324d9b0fa741e6b5
title: تيقن من الأخير
challengeType: 1
forumTopicId: 16006
dashedName: confirm-the-ending
---

# --description--

تحقق مما إذا كان المقطع النصي (string) (المعطى (argument) الأولى `str`) أخر المقطع النصي المطلوب (المعطى الثاني `target`).

*يمكنك* حل هذا التحدي بطريقة `.endsWith()`، التي تم تقديمها في ES2015. لكن لغرض هذا التحدي، نود أن تستخدموا واحدة من طرق subnstrings فى JavaScript بدلاً من ذلك.

# --hints--

`confirmEnding("Bastian", "n")` يجب أن ينتج `true`.

```js
assert(confirmEnding('Bastian', 'n') === true);
```

`confirmEnding("Congratulation", "on")` يجب أن ينتج `true`.

```js
assert(confirmEnding('Congratulation', 'on') === true);
```

`confirmEnding("Connor", "n")` يجب أن ينتج `false`.

```js
assert(confirmEnding('Connor', 'n') === false);
```

`confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification")` يجب أن ينتج `false`.

```js
assert(
  confirmEnding(
    'Walking on water and developing software from a specification are easy if both are frozen',
    'specification'
  ) === false
);
```

`confirmEnding("He has to give me a new name", "name")` يجب أن ينتج `true`.

```js
assert(confirmEnding('He has to give me a new name', 'name') === true);
```

`confirmEnding("Open sesame", "same")` يجب أن ينتج `true`.

```js
assert(confirmEnding('Open sesame', 'same') === true);
```

`confirmEnding("Open sesame", "sage")` يجب أن ينتج `false`.

```js
assert(confirmEnding('Open sesame', 'sage') === false);
```

`confirmEnding("Open sesame", "game")` يجب أن ينتج `false`.

```js
assert(confirmEnding('Open sesame', 'game') === false);
```

`confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain")` يجب أن ينتج `false`.

```js
assert(
  confirmEnding(
    'If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing',
    'mountain'
  ) === false
);
```

`confirmEnding("Abstraction", "action")` يجب أن ينتج `true`.

```js
assert(confirmEnding('Abstraction', 'action') === true);
```

برنامجك يجب ألا يستخدم طريقة مبنية داخلياً (built-in method) باسم `.endsWith()` لحل التحدي.

```js
assert(!/\.endsWith\(.*?\)\s*?;?/.test(code) && !/\['endsWith'\]/.test(code));
```

# --seed--

## --seed-contents--

```js
function confirmEnding(str, target) {
  return str;
}

confirmEnding("Bastian", "n");
```

# --solutions--

```js
function confirmEnding(str, target) {
  return str.substring(str.length - target.length) === target;
}

confirmEnding("Bastian", "n");
```
