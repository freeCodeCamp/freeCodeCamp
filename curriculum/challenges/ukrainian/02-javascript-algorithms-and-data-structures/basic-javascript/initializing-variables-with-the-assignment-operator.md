---
id: 56533eb9ac21ba0edf2244a9
title: Ініціалізація Змінних за допомогою Оператора Присвоєння
challengeType: 1
videoUrl: 'https://scrimba.com/c/cWJ4Bfb'
forumTopicId: 301171
dashedName: initializing-variables-with-the-assignment-operator
---

# --description--

Є загальноприйнятим <dfn>ініціалізувати</dfn> змінну до початкового значення в тому ж рядку, в якому вона була вказана.

```js
var myVar = 0;
```

Створіть нову змінну з назвою `myVar` та призначте їй початкове значення `0`.

# --instructions--

Визначте змінну `a` з `var` та ініціалізуйте її до значення `9`.

# --hints--

Вам потрібно ініціалізувати `a` до значення `9`.

```js
assert(/var\s+a\s*=\s*9(\s*;?\s*)$/.test(code));
```

# --seed--

## --after-user-code--

```js
if(typeof a !== 'undefined') {(function(a){return "a = " + a;})(a);} else { (function() {return 'a is undefined';})(); }
```

## --seed-contents--

```js

```

# --solutions--

```js
var a = 9;
```
