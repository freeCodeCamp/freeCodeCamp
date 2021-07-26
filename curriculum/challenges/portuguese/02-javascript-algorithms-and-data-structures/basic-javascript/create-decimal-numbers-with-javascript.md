---
id: cf1391c1c11feddfaeb4bdef
title: Criar números decimais com JavaScript
challengeType: 1
videoUrl: 'https://scrimba.com/c/ca8GEuW'
forumTopicId: 16826
dashedName: create-decimal-numbers-with-javascript
---

# --description--

Nós também podemos armazenar números decimais em variáveis. Números decimais são às vezes referidos como <dfn>números do ponto flutuante</dfn> ou <dfn>floats</dfn>.

**Observação:** nem todos os números reais podem ser representados com precisão no <dfn>ponto flutuante</dfn>. Isso pode levar a erros de arredondamento. [Detalhes aqui](https://en.wikipedia.org/wiki/Floating-point_arithmetic#Accuracy_problems).

# --instructions--

Crie a variável `myDecimal` e dê a ela um valor decimal com uma parte fracional (e.g. `5.7`).

# --hints--

`myDecimal` deve ser um número.

```js
assert(typeof myDecimal === 'number');
```

`myDecimal` deve ter um ponto decimal

```js
assert(myDecimal % 1 != 0);
```

# --seed--

## --after-user-code--

```js
(function(){if(typeof myDecimal !== "undefined"){return myDecimal;}})();
```

## --seed-contents--

```js
var ourDecimal = 5.7;

// Only change code below this line
```

# --solutions--

```js
var myDecimal = 9.9;
```
