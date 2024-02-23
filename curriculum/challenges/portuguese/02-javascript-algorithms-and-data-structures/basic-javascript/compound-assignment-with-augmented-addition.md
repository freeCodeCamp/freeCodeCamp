---
id: 56533eb9ac21ba0edf2244af
title: Atribuir de modo composto com adição aumentada
challengeType: 1
videoUrl: 'https://scrimba.com/c/cDR6LCb'
forumTopicId: 16661
dashedName: compound-assignment-with-augmented-addition
---

# --description--

Na programação, é comum usar atribuições para modificar o conteúdo de uma variável. Lembre-se de que tudo à direita do sinal de igual é avaliado primeiro, para que possamos dizer:

```js
myVar = myVar + 5;
```

para adicionar `5` a `myVar`. Como este é um padrão tão comum, existem operadores que realizam uma operação matemática e atribuição em um passo.

Um desses operadores é o operador `+=`.

```js
let myVar = 1;
myVar += 5;
console.log(myVar);
```

`6` seria exibido no console.

# --instructions--

Converta as atribuições para `a`, `b` e `c` para usar o operador `+=`.

# --hints--

`a` deve ser igual a `15`.

```js
assert(a === 15);
```

`b` deve ser igual a `26`.

```js
assert(b === 26);
```

`c` deve ser igual a `19`.

```js
assert(c === 19);
```

Você deve usar o operador `+=` para cada variável.

```js
assert(code.match(/\+=/g).length === 3);
```

Você não deve modificar o código acima do comentário especificado.

```js
assert(
  /let a = 3;/.test(code) &&
    /let b = 17;/.test(code) &&
    /let c = 12;/.test(code)
);
```

# --seed--

## --after-user-code--

```js
(function(a,b,c){ return "a = " + a + ", b = " + b + ", c = " + c; })(a,b,c);
```

## --seed-contents--

```js
let a = 3;
let b = 17;
let c = 12;

// Only change code below this line
a = a + 12;
b = 9 + b;
c = c + 7;
```

# --solutions--

```js
let a = 3;
let b = 17;
let c = 12;

a += 12;
b += 9;
c += 7;
```
