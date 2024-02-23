---
id: 56533eb9ac21ba0edf2244b0
title: Atribuir de modo composto com subtração aumentada
challengeType: 1
videoUrl: 'https://scrimba.com/c/c2Qv7AV'
forumTopicId: 16660
dashedName: compound-assignment-with-augmented-subtraction
---

# --description--

Como o operador `+=`, `-=` subtrai um número de uma variável.

```js
myVar = myVar - 5;
```

vai subtrair `5` de `myVar`. Essa expressão pode ser reescrita assim:

```js
myVar -= 5;
```

# --instructions--

Converta as atribuições para `a`, `b` e `c` para usar o operador `+=`.

# --hints--

`a` deve ser igual a `5`.

```js
assert(a === 5);
```

`b` deve ser igual a `-6`.

```js
assert(b === -6);
```

`c` deve ser igual a `2`.

```js
assert(c === 2);
```

Você deve usar o operador `-=` para cada variável.

```js
assert(code.match(/-=/g).length === 3);
```

Você não deve modificar o código acima do comentário especificado.

```js
assert(
  /let a = 11;/.test(code) && /let b = 9;/.test(code) && /let c = 3;/.test(code)
);
```

# --seed--

## --after-user-code--

```js
(function(a,b,c){ return "a = " + a + ", b = " + b + ", c = " + c; })(a,b,c);
```

## --seed-contents--

```js
let a = 11;
let b = 9;
let c = 3;

// Only change code below this line
a = a - 6;
b = b - 15;
c = c - 1;
```

# --solutions--

```js
let a = 11;
let b = 9;
let c = 3;

a -= 6;
b -= 15;
c -= 1;
```
