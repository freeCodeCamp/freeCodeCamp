---
id: cf1391c1c11feddfaeb4bdef
title: Criar números decimais com JavaScript
challengeType: 1
videoUrl: 'https://scrimba.com/c/ca8GEuW'
forumTopicId: 16826
dashedName: create-decimal-numbers-with-javascript
---

# --description--

Nós também podemos armazenar números decimais em variáveis. Números decimais são às vezes referidos como números de <dfn>ponto flutuante</dfn> ou <dfn>floats</dfn>.

**Observação:** ao computar números, eles são calculados com precisão finita. Operações que usam pontos flutuantes podem levar a resultados diferentes do resultado desejado. Se você estiver obtendo um desses resultados, abra um tópico no <a href="https://forum.freecodecamp.org/" target="_blank" rel="noopener noreferrer nofollow">fórum do freeCodeCamp</a>.

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
const ourDecimal = 5.7;

// Only change code below this line

```

# --solutions--

```js
const myDecimal = 9.9;
```
