---
id: 5900f4551000cf542c50ff67
title: 'Problema 232: A corrida'
challengeType: 1
forumTopicId: 301876
dashedName: problem-232-the-race
---

# --description--

Dois jogadores compartilham uma moeda não viesada e a usam, cada um na sua vez, para jogar "A Corrida".

No turno do Jogador 1, ele joga uma vez a moeda: se der Cara, ele marca um ponto; se der Coroa, ele não marca nada.

Na vez do Jogador 2, ela escolhe um número inteiro positivo $T$ e joga a moeda $T$ vezes: se der Cara sempre, ele faz $2^{T - 1}$ pontos. Caso contrário, ele não pontua.

O jogador 1 joga primeiro. O vencedor é o primeiro a chegar a 100 pontos ou mais.

Em cada turno, o Jogador 2 seleciona o número, $T$, de lançamentos da moeda que maximizam a probabilidade de sua vitória.

Qual é a probabilidade de o Jogador 2 vencer?

Arredonde sua resposta para até oito casas decimais usando o formato 0.abcdefgh.

# --hints--

`theRace()` deve retornar `0.83648556`.

```js
assert.strictEqual(theRace(), 0.83648556);
```

# --seed--

## --seed-contents--

```js
function theRace() {

  return true;
}

theRace();
```

# --solutions--

```js
// solution required
```
