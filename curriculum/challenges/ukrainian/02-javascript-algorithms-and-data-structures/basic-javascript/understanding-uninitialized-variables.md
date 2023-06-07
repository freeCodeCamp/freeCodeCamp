---
id: 56533eb9ac21ba0edf2244aa
title: Неініціалізовані змінні
challengeType: 1
videoUrl: 'https://scrimba.com/c/cBa2JAL'
forumTopicId: 18335
dashedName: understanding-uninitialized-variables
---

# --description--

Коли змінні у JavaScript оголошено, вони отримують початкове значення `undefined`. Якщо виконати математичну дію на змінній `undefined`, то результатом буде `NaN`, що означає «Not a Number» <dfn>(укр. «не є числом»)</dfn>. Якщо об’єднати рядок зі змінною `undefined`, ви отримаєте <dfn>рядок</dfn> з `undefined`.

# --instructions--

Ініціалізуйте три змінні `a`, `b` та `c` відповідно з `5`, `10` і `"I am a"`, щоб вони не були `undefined`.

# --hints--

`a` повинна бути визначеною та мати кінцеве значення `6`.

```js
assert(typeof a === 'number' && a === 6);
```

`b` повинна бути визначеною та мати кінцеве значення `15`.

```js
assert(typeof b === 'number' && b === 15);
```

`c` не повинна містити `undefined` та повинна мати кінцеве значення рядка `I am a String!`

```js
assert(!/undefined/.test(c) && c === 'I am a String!');
```

Не змінюйте код під зазначеним коментарем.

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
