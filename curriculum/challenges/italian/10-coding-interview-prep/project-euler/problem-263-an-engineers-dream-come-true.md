---
id: 5900f4741000cf542c50ff86
title: 'Problema 263: Un sogno degli ingegneri diventa realtà'
challengeType: 1
forumTopicId: 301912
dashedName: problem-263-an-engineers-dream-come-true
---

# --description--

Considera il numero 6. I divisori di 6 sono: 1,2,3 e 6.

Ogni numero da 1 fino a 6 può essere scritto come una somma di divisori distinti di 6:

$1 = 1$, $2 = 2$, $3 = 1 + 2$, $4 = 1 + 3$, $5 = 2 + 3$, $6 = 6$.

Un numero $n$ è chiamato un numero pratico se ogni numero da 1 a $n$ può essere espresso come una somma di divisori distinti di $n$.

Un paio di numeri primi consecutivi con una differenza di sei è chiamato una coppia sexy (dal momento che "sex" è la parola latina per "sei"). La prima coppia sexy è (23, 29).

Potremmo occasionalmente trovare una tripla-coppia, che significa tre coppie sexy consecutive, tale che il secondo membro di ogni coppia sia il primo membro della coppia successiva.

Sia $n$ un numero che:

- ($n - 9$, $n - 3$), ($n - 3$, $n + 3$), ($n + 3$, $n + 9$) formano una coppia tripla, e
- i numeri $n - 8$, $n - 4$, $n$, $n + 4$ e $n + 8$ sono tutti pratici,

un paradiso degli ingegneri.

Trova la somma dei primi quattro paradisi degli ingegneri.

# --hints--

`engineersDreamComeTrue()` dovrebbe restituire `2039506520`.

```js
assert.strictEqual(engineersDreamComeTrue(), 2039506520);
```

# --seed--

## --seed-contents--

```js
function engineersDreamComeTrue() {

  return true;
}

engineersDreamComeTrue();
```

# --solutions--

```js
// solution required
```
