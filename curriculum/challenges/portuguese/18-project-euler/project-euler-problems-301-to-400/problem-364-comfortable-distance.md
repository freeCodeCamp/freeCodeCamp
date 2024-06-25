---
id: 5900f4d91000cf542c50ffea
title: 'Problema 364: Distância confortável'
challengeType: 1
forumTopicId: 302025
dashedName: problem-364-comfortable-distance
---

# --description--

Existem $N$ assentos em uma fila. $N$ pessoas vêm atrás umas das outras para preencher os lugares de acordo com as seguintes regras:

1. Se houver algum lugar no qual os assentos adjacentes não estejam ocupados, tome esse lugar.
2. Se não existir esse lugar e se houver algum lugar para o qual apenas um lugar adjacente esteja ocupado, tome esse lugar.
3. Caso contrário, pegue um dos lugares restantes disponíveis.

Considere $T(N)$ como o número de possibilidades de que $N$ assentos estejam ocupados por $N$ pessoas com as regras dadas. A figura a seguir mostra $T(4) = 8$.

<img class="img-responsive center-block" alt="oito maneiras de N lugares serem ocupados por N pessoas" src="https://cdn.freecodecamp.org/curriculum/project-euler/comfortable-distance.gif" style="background-color: white; padding: 10px;" />

Podemos verificar que $T(10) = 61.632$ e $T(1.000)\bmod 100.000.007 = 47.255.094$.

Encontre $T(1.000.000)\bmod 100.000.007$.

# --hints--

`comfortableDistance()` deve retornar `44855254`.

```js
assert.strictEqual(comfortableDistance(), 44855254);
```

# --seed--

## --seed-contents--

```js
function comfortableDistance() {

  return true;
}

comfortableDistance();
```

# --solutions--

```js
// solution required
```
