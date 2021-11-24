---
id: 5900f4d31000cf542c50ffe6
title: 'Problema 359: O novo hotel Hilbert'
challengeType: 5
forumTopicId: 302019
dashedName: problem-359-hilberts-new-hotel
---

# --description--

Um número infinito de pessoas (numeradas 1, 2, 3, etc.) está alinhado para conseguir um quarto no novíssimo hotel infinito Hilbert. O hotel contém um número infinito de andares (numerados 1, 2, 3, etc.). Cada andar contém um número infinito de quartos (numerados 1, 2, 3, etc.).

Inicialmente, o hotel está vazio. Hilbert declara uma regra sobre como a $n^{\text{a}}$ pessoa é atribuída a um quarto: a pessoa $n$ obtém o primeiro quarto vago no andar de numeração mais baixa satisfazendo qualquer um dos seguintes:

- o andar está vazio
- o andar não está vazio, e se a última pessoa que está pegando um quarto nesse andar é a pessoa $m$, então $m + n$ é um quadrado perfeito

A pessoa 1 pega o quarto 1 no andar 1, já que o andar 1 está vazio.

A pessoa 2 não consegue o quarto 2 no andar 1, já que 1 + 2 = 3 não é um quadrado perfeito.

A pessoa 2, em vez disso, pega o quarto 1 no andar 2, já que o andar 2 está vazio.

A pessoa 3 consegue o quarto 2 no andar 1, já que 1 + 3 = 4 é um quadrado perfeito.

No fim, cada pessoa na fila pegará um quarto no hotel.

Defina $P(f, r)$ como $n$ se a pessoa $n$ ocupar o quarto $r$ no andar $f$, e 0 se ninguém ocupar o quarto. Aqui estão alguns exemplos:

$$\begin{align} & P(1, 1) = 1 \\\\ & P(1, 2) = 3 \\\\ & P(2, 1) = 2 \\\\ & P(10, 20) = 440 \\\\ & P(25, 75) = 4863 \\\\ & P(99, 100) = 19454 \end{align}$$

Encontre a soma de todos os $P(f, r)$ para todos os números positivos $f$ e $r$, tal que $f × r = 71.328.803.586.048$ e dê os últimos 8 algarismos como resposta.

# --hints--

`hilbertsNewHotel()` deve retornar `40632119`.

```js
assert.strictEqual(hilbertsNewHotel(), 40632119);
```

# --seed--

## --seed-contents--

```js
function hilbertsNewHotel() {

  return true;
}

hilbertsNewHotel();
```

# --solutions--

```js
// solution required
```
