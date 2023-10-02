---
id: 5ee127a03c3b35dd45426493
title: Присвоєння значення однієї змінної до іншої
challengeType: 1
videoUrl: ''
forumTopicId: 418265
dashedName: assigning-the-value-of-one-variable-to-another
---

# --description--

Після того, як значення змінної присвоєне за допомогою оператора <dfn>присвоювання</dfn>, ви можете присвоїти значення цієї змінної іншій змінній, використовуючи оператор <dfn>присвоювання</dfn>.

```js
var myVar;
myVar = 5;
var myNum;
myNum = myVar;
```

Наведений вище приклад оголошує змінну `myVar` без значення, а потім присвоює їй значення `5`. Потім оголошується змінна під назвою `myNum` без значення. Потім вміст `myVar` (який становить `5`) присвоюється до змінної `myNum`. Тепер `myNum` також має значення `5`.

# --instructions--

Призначте вміст `a` до змінної `b`.

# --hints--

Не змінюйте код над зазначеним коментарем.

```js
assert(/var a;/.test(code) && /a = 7;/.test(code) && /var b;/.test(code));
```

`b` повинна мати значення `7`.

```js
assert(typeof b === 'number' && b === 7);
```

`a` повинна бути присвоєною до `b` за допомогою `=`.

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
