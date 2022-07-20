---
id: 5900f4a71000cf542c50ffba
title: 'Problema 315: Relógios de raiz digital'
challengeType: 1
forumTopicId: 301971
dashedName: problem-315-digital-root-clocks
---

# --description--

<img class="img-responsive center-block" alt="animação dos relógios de Sam e de Max, calculando raízes dos algarismos a partir de 137" src="https://cdn.freecodecamp.org/curriculum/project-euler/digital-root-clocks.gif" style="background-color: white; padding: 10px;" />

Sam e Max são convidados a transformar dois relógios digitais em dois relógios "de raízes digitais".

Um relógio de raiz digital é um relógio digital que calcula gradualmente as raízes dos algarismos.

Quando um relógio recebe um número, ele vai mostrá-lo e então ele vai iniciar o cálculo, mostrar todos os valores intermédios até que chegue ao resultado. Por exemplo, se o relógio receber o número 137, vai mostrar: `137` → `11` → `2` e então vai ficar preto, esperando o próximo número.

Todo número digital consiste em alguns segmentos de luz: três horizontais (superior, médio, inferior) e quatro verticais (superior esquerdo, superior direito, inferior esquerdo e inferior direito). O número `1` é feito do canto superior direito e do canto inferior direito verticais. O número `4` é feito pela linha do meio horizontal e pelo canto superior esquerdo, canto superior direito e canto inferior direito. O número `8` ilumina todas as luzes.

Os relógios consomem energia apenas quando os segmentos são ligados/desligados. Para ativar um `2` custará 5 transições, enquanto um `7` custará apenas 4 transições.

Sam e Max construíram dois relógios diferentes.

O relógio de Sam recebe, por exemplo, o número 137: o relógio mostra `137`, então o painel é desligado. Depois, o próximo número (`11`) é ligado, e o painel é desligado novamente. Por fim, o último número (`2`) é ligado e, após algum tempo, desligado.

Por exemplo, com o número 137, o relógio de Sam exige:

- `137`: $(2 + 5 + 4) × 2 = 22$ transições (`137` ligado/desligado).
- `11`: $(2 + 2) × 2 = 8$ transições (`11` ligado/desligado).
- `2`: $(5) × 2 = 10$ transições (`2` ligado/desligado).

Isso dá um total de 40 transições.

O relógio do Max funciona de maneira diferente. Em vez de desligar todo o painel, é inteligente o suficiente para desativar apenas os segmentos que não serão necessários para o próximo número.

Para o número 137, o relógio do Max exige:

- `137` : $2 + 5 + 4 = 11$ transições (`137` ligado), $7$ transições (para desativar os segmentos que não são necessários para o número `11`).
- `11` : $0$ transições (número `11` já está ativado corretamente), $3$ transições (para desativar o primeiro `1` e a parte inferior do segundo `1`; a parte superior é comum com o número `2`).
- `2` : $4$ transições (para ativar os segmentos restantes para obter um `2`), $5$ transições (para desativar o número `2`).

Isso dá um total de 30 transições.

Claro, o relógio de Max consome menos energia que o de Sam. Os dois relógios recebem todos os números primos entre $A = {10}^7$ e $B = 2 × {10}^7$. Encontre a diferença entre o número total de transições necessárias pelo relógio de Sam e as necessárias pelo relógio de Max.

# --hints--

`digitalRootClocks()` deve retornar `13625242`.

```js
assert.strictEqual(digitalRootClocks(), 13625242);
```

# --seed--

## --seed-contents--

```js
function digitalRootClocks() {

  return true;
}

digitalRootClocks();
```

# --solutions--

```js
// solution required
```
