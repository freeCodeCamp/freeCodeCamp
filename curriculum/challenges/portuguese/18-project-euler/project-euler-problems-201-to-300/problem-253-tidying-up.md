---
id: 5900f4691000cf542c50ff7c
title: 'Problema 253: Organização'
challengeType: 1
forumTopicId: 301901
dashedName: problem-253-tidying-up
---

# --description--

Uma criança tem uma "lagarta numérica", composta por quarenta pedaços de quebra-cabeça, cada um com um número, que, quando ligados em uma linha, revelam os números de 1 a 40 em ordem.

Todas as noites, o pai da criança tem de pegar os pedaços da lagarta que estão espalhados pela sala. Ele pega as peças aleatoriamente e as coloca na ordem correta.

Ao ser construída desta forma, a lagarta forma segmentos distintos que gradualmente se fundem juntos. O número de segmentos começa em zero (sem pedaços colocados), e vai aumentando até cerca de onze ou doze, então tende a diminuir novamente antes de terminar em um único segmento (todas as partes colocadas).

Por exemplo:

| Peça colocada | Segmentos até então |
| ------------- | ------------------- |
| 12            | 1                   |
| 4             | 2                   |
| 29            | 3                   |
| 6             | 4                   |
| 34            | 5                   |
| 5             | 4                   |
| 35            | 4                   |
| …             | …                   |

Considere $M$ como o número máximo de segmentos encontrados durante uma organização aleatória da lagarta. Para uma lagarta de dez peças, o número de possibilidades para cada $M$ é

| M | Possibilidades |
| - | -------------- |
| 1 | 512            |
| 2 | 250912         |
| 3 | 1815264        |
| 4 | 1418112        |
| 5 | 144000         |

então o valor mais provável de $M$ é 3 e o valor médio é $\frac{385.643}{113.400} = 3,400732$, arredondado para seis casas decimais.

O valor mais provável de $M$ para uma lagarta de quarenta peças é de 11, mas qual é o valor médio de $M$? Dê sua resposta arredondada para seis casas decimais.

# --hints--

`tidyingUp()` deve retornar `11.492847`.

```js
assert.strictEqual(tidyingUp(), 11.492847);
```

# --seed--

## --seed-contents--

```js
function tidyingUp() {

  return true;
}

tidyingUp();
```

# --solutions--

```js
// solution required
```
