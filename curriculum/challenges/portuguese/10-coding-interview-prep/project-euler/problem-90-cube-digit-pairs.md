---
id: 5900f3c61000cf542c50fed9
title: 'Problema 90: pares de algarismos em cubos'
challengeType: 1
forumTopicId: 302207
dashedName: problem-90-cube-digit-pairs
---

# --description--

Cada uma das seis faces em um cubo tem um algarismo diferente (de 0 a 9) escrito nela. O mesmo se passa com um segundo cubo. Colocando os dois cubos lado a lado em posições diferentes, podemos formar uma variedade de números de dois algarismos.

Por exemplo, o número quadrado 64 poderia ser formado assim:

<img class="img-responsive center-block" alt="dois cubos, um com o número 6 e o outro com o número 4" src="https://cdn-media-1.freecodecamp.org/project-euler/cube-digit-pairs.png" style="background-color: white; padding: 10px;" />

De fato, se escolhermos cuidadosamente os algarismos em ambos os cubos, é possível exibir todos os números quadrados abaixo de cem: 01, 04, 09, 16, 25, 36, 49, 64 e 81.

Por exemplo, uma forma de conseguir isso é colocando {0, 5, 6, 7, 8, 9} em um cubo e {1, 2, 3, 4, 8, 9} no outro cubo.

No entanto, para este problema, permitiremos que os 6 ou 9 sejam invertidos de forma que um arranjo como {0, 5, 6, 7, 8, 9} e {1, 2, 3, 4, 6, 7} permita que todos os nove números quadrados sejam exibidos. Caso contrário, seria impossível obter 09.

Ao estabelecermos um arranjo distinta, estamos interessados nos algarismos de cada cubo, não na ordem.

<div style="margin-left: 4em;">
  {1, 2, 3, 4, 5, 6} é equivalente a {3, 6, 4, 1, 2, 5}<br>
  {1, 2, 3, 4, 5, 6} é diferente de {1, 2, 3, 4, 5, 9}
</div>

Como estamos permitindo que 6 e 9 sejam invertidos, os dois conjuntos distintos no último exemplo representam o conjunto estendido {1, 2, 3, 4, 5, 6, 9} para fins de formar números de dois algarismos.

Quantos arranjos distintos dos dois cubos permitem a exibição de todos os números quadrados até cem?

# --hints--

`cubeDigitPairs()` deve retornar um número.

```js
assert(typeof cubeDigitPairs() === 'number');
```

`cubeDigitPairs()` deve retornar 1217.

```js
assert.strictEqual(cubeDigitPairs(), 1217);
```

# --seed--

## --seed-contents--

```js
function cubeDigitPairs() {

  return true;
}

cubeDigitPairs();
```

# --solutions--

```js
// solution required
```
