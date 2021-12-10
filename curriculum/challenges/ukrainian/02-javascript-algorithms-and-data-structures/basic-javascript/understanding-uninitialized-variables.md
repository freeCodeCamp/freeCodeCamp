---
id: 56533eb9ac21ba0edf2244aa
title: Розуміння неініціалізованих змінних
challengeType: 1
videoUrl: 'https://scrimba.com/c/cBa2JAL'
forumTopicId: 18335
dashedName: understanding-uninitialized-variables
---

# --description--

Коли змінні JavaScript проголошено, вони мають початкове значення `undefined`. Якщо ви виконуєте математичну дію з `undefined` змінної, вашим результатом буде `NaN`, що означає <dfn>"Not a Number"</dfn>. Якщо ви об'єднаєте рядок з `undefined` змінною, ви отримаєте <dfn>рядок</dfn> літерала з `undefined`.

# --instructions--

Ініціалізуйте три змінні `a`, `b` та `c` відповідно з `5`, `10` і `"I am a"`, щоб вони не були `undefined`.

# --hints--

`a` має бути визначене й обчислене, щоб мати значення `6`.

```js
assert(typeof a === 'number' && a === 6);
```

`b` має бути визначене й обчислене, щоб мати значення `15`.

```js
assert(typeof b === 'number' && b === 15);
```

`c` не має містити `undefined` і повинне мати значення рядка `I am a String!`

```js
assert(!/undefined/.test(c) && c === 'I am a String!');
```

Вам не слід змінювати код під зазначеним коментарем.

```js
assert(
  /a = a \+ 1;/.test(code) &&
    /b = b \+ 5;/.test(code) &&
    /c = c \+ " String!";/.test(code)
);
```

# --seed--

## --after-user-code--

```js
(function(a,b,c){ return "a = " + a + ", b = " + b + ", c = '" + c + "'"; })(a,b,c);
```

## --seed-contents--

```js
// Only change code below this line
var a;
var b;
var c;
// Only change code above this line

a = a + 1;
b = b + 5;
c = c + " String!";
```

# --solutions--

```js
var a = 5;
var b = 10;
var c = "I am a";
a = a + 1;
b = b + 5;
c = c + " String!";
```
