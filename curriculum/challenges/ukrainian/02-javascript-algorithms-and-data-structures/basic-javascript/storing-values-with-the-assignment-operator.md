---
id: 56533eb9ac21ba0edf2244a8
title: Зберігання значень за допомогою оператора присвоювання
challengeType: 1
videoUrl: 'https://scrimba.com/c/cEanysE'
forumTopicId: 18310
dashedName: storing-values-with-the-assignment-operator
---

# --description--

У JavaScript можна зберігати значення в змінній за допомогою оператора <dfn>присвоювання</dfn> (`=`).

```js
myVariable = 5;
```

Вона призначає `Number` зі значенням `5` до `myVariable`.

Якщо праворуч від оператора `=` є будь-які розрахунки, вони виконуються до того, як значення буде присвоєно змінній ліворуч від оператора.

```js
var myVar;
myVar = 5;
```

Спочатку цей код створює змінну під назвою `myVar`. Потім код присвоює `5` до `myVar`. Якщо `myVar` знову з’явиться у коді, програма розглядатиме її як `5`.

# --instructions--

Надайте значення `7` змінній `a`.

# --hints--

Не змінюйте код над зазначеним коментарем.

```js
assert(/var a;/.test(code));
```

`a` повинна мати значення 7.

```js
assert(typeof a === 'number' && a === 7);
```

# --seed--

## --before-user-code--

```js
if (typeof a != 'undefined') {
  a = undefined;
}
```

## --after-user-code--

```js
(function(a){return "a = " + a;})(a);
```

## --seed-contents--

```js
// Setup
var a;

// Only change code below this line
```

# --solutions--

```js
var a;
a = 7;
```
