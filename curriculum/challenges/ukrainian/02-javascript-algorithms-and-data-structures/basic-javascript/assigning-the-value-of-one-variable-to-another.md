---
id: 5ee127a03c3b35dd45426493
title: Присвоєння значення однієї змінної іншій
challengeType: 1
videoUrl: ''
forumTopicId: 418265
dashedName: assigning-the-value-of-one-variable-to-another
---

# --description--

Після присвоєння значення змінної за допомогою оператора <dfn>assignment</dfn>, Ви можете присвоїти значення цієї змінної іншій змінній, використовуючи оператор <dfn>assignment</dfn>.

```js
var myVar;
myVar = 5;
var myNum;
myNum = myVar;
```

Наведений вище приклад показує, що `myVar` - змінна без значення, а потім присвоює їй значення `5`. Далі можна побачити, що змінна з назвою `myNum`, - теж без значення. Потім, вміст `myVar` (який дорівнює `5`) присвоюється змінній `myNum`. І, ось, `myNum` тепер також має значення `5`.

# --instructions--

Призначте значення `a` змінній `b`.

# --hints--

Не слід змінювати код над зазначеним коментарем.

```js
assert(/var a;/.test(code) && /a = 7;/.test(code) && /var b;/.test(code));
```

`b` повинне мати значення `7`.

```js
assert(typeof b === 'number' && b === 7);
```

`a` потрібно призначити `b` за допомогою `=`.

```js
assert(/b\s*=\s*a\s*/g.test(code));
```

# --seed--

## --before-user-code--

```js
if (typeof a != 'undefined') {
  a = undefined;
}
if (typeof b != 'undefined') {
  b = undefined;
}
```

## --after-user-code--

```js
(function(a, b) {
  return 'a = ' + a + ', b = ' + b;
})(a, b);
```

## --seed-contents--

```js
// Setup
var a;
a = 7;
var b;

// Only change code below this line
```

# --solutions--

```js
var a;
a = 7;
var b;
b = a;
```
