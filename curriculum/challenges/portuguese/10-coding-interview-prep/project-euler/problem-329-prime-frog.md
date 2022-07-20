---
id: 5900f4b51000cf542c50ffc8
title: 'Problema 329: Sapo primo'
challengeType: 1
forumTopicId: 301986
dashedName: problem-329-prime-frog
---

# --description--

Susan tem um sapo primo.

Seu sapo está pulando por mais de 500 quadrados numerados de 1 a 500.

Ele só pode pular um quadrado para a esquerda ou para a direita, com igual probabilidade, e não pode pular fora do intervalo [1;500]. Se ele cair em qualquer uma das extremidades, ele pula automaticamente para o único quadrado disponível na próxima vez.

Quando ele está em um quadrado que tem um número primo, ele coaxa 'P' (PRIMO) com probabilidade $\frac{2}{3}$ ou 'N' (NÃO PRIMO) com probabilidade $\frac{1}{3}$ antes de pular para o próximo quadrado. Quando ele está em um quadrado que tem um número não primo, ele coaxa 'P' com probabilidade $\frac{1}{3}$ ou 'N' com probabilidade $\frac{2}{3}$ antes de pular para o próximo quadrado.

Dado que a posição inicial do sapo é aleatória com a mesma probabilidade para cada quadrado, e tendo em conta que Susan ouve seus primeiros 15 coaxos, qual é a probabilidade de ouvir a sequência PPPPNNPPPNPPNPN?

Dê sua resposta como uma string de uma fração `p/q` na forma reduzida.

# --hints--

`primeFrog()` deve retornar uma string.

```js
assert(typeof primeFrog() === 'string');
```

`primeFrog()` deve retornar a string `199740353/29386561536000`.

```js
assert.strictEqual(primeFrog(), '199740353/29386561536000');
```

# --seed--

## --seed-contents--

```js
function primeFrog() {

  return true;
}

primeFrog();
```

# --solutions--

```js
// solution required
```
