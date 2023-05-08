---
id: 5900f4081000cf542c50ff1a
title: 'Problema 155: Contagem de circuitos de capacitor'
challengeType: 1
forumTopicId: 301786
dashedName: problem-155-counting-capacitor-circuits
---

# --description--

Um circuito elétrico usa exclusivamente capacitores idênticos de mesmo valor C.

Os capacitores podem ser conectados em série ou em paralelo para formar subunidades, as quais podem então ser conectadas em série ou em paralelo com outros capacitores ou outras subunidades para formar subunidades maiores e assim por diante até um circuito final.

Utilizando este procedimento simples e com n capacitores idênticos, podemos fazer circuitos que tenham um intervalo de capacitâncias total diferentes. Por exemplo, usando até $n = 3$ capacitores de $60 μF$ cada, podemos obter os seguintes 7 valores distintos de capacitância total:

<img class="img-responsive center-block" alt="circuitos de exemplo com até três capacitores, cada um com 60 μF" src="https://cdn.freecodecamp.org/curriculum/project-euler/counting-capacitor-circuits.gif" style="background-color: white; padding: 10px;" />

Se considerarmos $D(n)$ o número de valores de capacitância total distintos que podemos obter ao usar até $n$ capacitores de valor igual e o procedimento simples descrito acima, temos: $D(1) = 1, D(2) = 3, D(3)=7, \ldots$

Encontre $D(18)$.

Lembrete: Ao conectar os capacitores $C_1$, $C_2$ e assim por diante em paralelo, a capacitância total é $C_T = C_1 + C_2 + \cdots$, enquanto, ao conectá-los em série, a capacitância geral é dada por: $\frac{1}{C_T} = \frac{1}{C_1} + \frac{1}{C_2} + \cdots$.

# --hints--

`capacitanceValues()` deve retornar `3857447`.

```js
assert.strictEqual(capacitanceValues(), 3857447);
```

# --seed--

## --seed-contents--

```js
function capacitanceValues() {

  return true;
}

capacitanceValues();
```

# --solutions--

```js
// solution required
```
