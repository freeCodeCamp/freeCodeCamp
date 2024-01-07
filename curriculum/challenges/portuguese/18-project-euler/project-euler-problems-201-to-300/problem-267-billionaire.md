---
id: 5900f4771000cf542c50ff8a
title: 'Problema 267: Bilionário'
challengeType: 1
forumTopicId: 301916
dashedName: problem-267-billionaire
---

# --description--

Você recebe uma oportunidade única de investimento.

Começando com £1 do capital, você pode escolher uma proporção fixa, $f$, do seu capital para apostar em uma moeda justa repetidamente por 1000 lançamentos.

Seu retorno é o dobro da sua aposta para cara e você perde a aposta para coroa.

Por exemplo, se $f = \frac{1}{4}$, para o primeiro lançamento, você aposta £0,25. Se cara aparecer, você ganha £0,5 e passa a ter £1,5. Você aposta £0,375 e, se o segundo lançamento for coroa, terá £1,125.

Escolhendo $f$ para maximizar suas chances de ter pelo menos £1.000.000.000 depois de 1.000 lançamentos da moeda, qual é a chance de você se tornar um bilionário?

Todos os cálculos devem ser exatos (sem arredondamento), mas sua resposta deve ser arredondada para 12 algarismos depois da vírgula na forma 0.abcdefghijkl.

# --hints--

`billionaire()` deve retornar `0.999992836187`.

```js
assert.strictEqual(billionaire(), 0.999992836187);
```

# --seed--

## --seed-contents--

```js
function billionaire() {

  return true;
}

billionaire();
```

# --solutions--

```js
// solution required
```
