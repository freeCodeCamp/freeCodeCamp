---
id: 56533eb9ac21ba0edf2244b2
title: Atribuir de modo composto com divisão aumentada
challengeType: 1
videoUrl: 'https://scrimba.com/c/c2QvKT2'
forumTopicId: 16659
dashedName: compound-assignment-with-augmented-division
---

# --description--

O operador `/=` divide uma variável por outro número.

```js
myVar = myVar / 5;
```

dividirá `myVar` por `5`. Essa expressão pode ser reescrita assim:

```js
myVar /= 5;
```

# --instructions--

Converta as atribuições para `a`, `b` e `c` para usar o operador `/=`.

# --hints--

`a` deve ser igual a `4`.

```js
assert(a === 4);
```

`b` deve ser igual a `27`.

```js
assert(b === 27);
```

`c` deve ser igual a `3`.

```js
assert(c === 3);
```

Você deve usar o operador `/=` para cada variável.

```js
assert(code.match(/\/=/g).length === 3);
```

Você não deve modificar o código acima do comentário especificado.

```js
assert(
  /let a = 48;/.test(code) &&
    /let b = 108;/.test(code) &&
    /let c = 33;/.test(code)
);
```

# --seed--

## --after-user-code--

```js
(function(a,b,c){ return "a = " + a + ", b = " + b + ", c = " + c; })(a,b,c);
```

## --seed-contents--

```js
let a = 48;
let b = 108;
let c = 33;

// Only change code below this line
a = a / 12;
b = b / 4;
c = c / 11;
```

# --solutions--

```js
let a = 48;
let b = 108;
let c = 33;

a /= 12;
b /= 4;
c /= 11;
```
