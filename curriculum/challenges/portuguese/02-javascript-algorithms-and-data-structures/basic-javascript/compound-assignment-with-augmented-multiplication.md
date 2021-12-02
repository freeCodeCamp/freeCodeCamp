---
id: 56533eb9ac21ba0edf2244b1
title: Atribuir de modo composto com multiplicação aumentada
challengeType: 1
videoUrl: 'https://scrimba.com/c/c83vrfa'
forumTopicId: 16662
dashedName: compound-assignment-with-augmented-multiplication
---

# --description--

O operador `*=` multiplica uma variável por um número.

```js
myVar = myVar * 5;
```

multiplicará `myVar` por `5`. Essa expressão pode ser reescrita assim:

```js
myVar *= 5;
```

# --instructions--

Converta as atribuições para `a`, `b` e `c` para usar o operador `*=`.

# --hints--

`a` deve ser igual a `25`.

```js
assert(a === 25);
```

`b` deve ser igual a `36`.

```js
assert(b === 36);
```

`c` deve ser igual a `46`.

```js
assert(c === 46);
```

Você deve usar o operador `*=` para cada variável.

```js
assert(code.match(/\*=/g).length === 3);
```

Você não deve modificar o código acima do comentário especificado.

```js
assert(
  /let a = 5;/.test(code) &&
    /let b = 12;/.test(code) &&
    /let c = 4\.6;/.test(code)
);
```

# --seed--

## --after-user-code--

```js
(function(a,b,c){ return "a = " + a + ", b = " + b + ", c = " + c; })(a,b,c);
```

## --seed-contents--

```js
let a = 5;
let b = 12;
let c = 4.6;

// Only change code below this line
a = a * 5;
b = 3 * b;
c = c * 10;
```

# --solutions--

```js
let a = 5;
let b = 12;
let c = 4.6;

a *= 5;
b *= 3;
c *= 10;
```
