---
id: cf1111c1c12feddfaeb2bdef
title: Gerar números inteiros aleatórios dentro de um intervalo
challengeType: 1
videoUrl: 'https://scrimba.com/c/cm83yu6'
forumTopicId: 18187
dashedName: generate-random-whole-numbers-within-a-range
---

# --description--

Você pode gerar um número natural aleatório no intervalo entre zero e um número dado. Você também pode escolher um número diferente para este intervalo.

Chamaremos o número mínimo de `min` e o número máximo de `max`.

Essa fórmula fornece um número natural aleatório no intervalo de `min` até `max`. Leve um momento para ler e entender o que esse código está fazendo:

```js
Math.floor(Math.random() * (max - min + 1)) + min
```

# --instructions--

Crie uma função chamada `randomRange` que recebe um intervalo de `myMin` a `myMax` e retorne um número natural aleatório que é maior ou igual a `myMin` e menor ou igual a `myMax`.

# --hints--

O menor número aleatório que poderá ser gerado por `randomRange` deve ser igual ao seu número mínimo, `myMin`.

```js
assert(calcMin === 5);
```

O maior número aleatório que poderá ser gerado por `randomRange` deve ser igual ao seu número máximo, `myMax`.

```js
assert(calcMax === 15);
```

O número aleatório gerado por `randomRange` deve ser um inteiro, não um decimal.

```js
assert(randomRange(0, 1) % 1 === 0);
```

`randomRange` deve usar ambos `myMax` e `myMin` e retornar um número aleatório no seu intervalo.

```js
assert(
  (function () {
    if (
      code.match(/myMax/g).length > 1 &&
      code.match(/myMin/g).length > 2 &&
      code.match(/Math.floor/g) &&
      code.match(/Math.random/g)
    ) {
      return true;
    } else {
      return false;
    }
  })()
);
```

# --seed--

## --after-user-code--

```js
var calcMin = 100;
var calcMax = -100;
for(var i = 0; i < 100; i++) {
  var result = randomRange(5,15);
  calcMin = Math.min(calcMin, result);
  calcMax = Math.max(calcMax, result);
}
(function(){
  if(typeof myRandom === 'number') {
    return "myRandom = " + myRandom;
  } else {
    return "myRandom undefined";
  }
})()
```

## --seed-contents--

```js
function randomRange(myMin, myMax) {
  return 0;
}
```

# --solutions--

```js
function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}
```
