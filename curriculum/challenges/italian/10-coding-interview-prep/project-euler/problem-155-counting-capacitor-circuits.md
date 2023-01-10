---
id: 5900f4081000cf542c50ff1a
title: 'Problema 155: Contando i circuiti dei condensatori'
challengeType: 1
forumTopicId: 301786
dashedName: problem-155-counting-capacitor-circuits
---

# --description--

Un circuito elettrico usa solo condensatori identici dello stesso valore C.

I condensatori possono essere collegati in serie o in parallelo per formare sub-unità, le quali poi possono essere collegate in serie o in parallelo ad altri capacitori o altre sub unità per formare sub unità più grandi, e così via fino al circuito finale.

Usando questa semplice procedura e fino a n condensatori identici, possiamo creare circuiti che hanno un range di diverse capacitanze totali. Per esempio, usando fino a $n = 3$ condensatori di $60 μF$ ognuno, possiamo ottenere sette valori totali di capacitanza distinti:

<img class="img-responsive center-block" alt="circuito di esempio avente fino a tre condensatori, ognuno di 60 μF" src="https://cdn.freecodecamp.org/curriculum/project-euler/counting-capacitor-circuits.gif" style="background-color: white; padding: 10px;" />

Sia $D(n)$ il numero di valori di capacitanza distinti totali che si possono ottenere con $n$ condensatori di uguale capacitanza e la semplice procedura descritta sopra, abbiamo: $D(1) = 1, D(2) = 3, D(3) = 7, \ldots$

Trova $D(18)$.

Promemoria: Quando si connettono i condensatori $C_1$, $C_2$ ecc in parallelo, la capacitanza totale è $C_T = C_1 + C_2 + \cdots$, mentre quando si connettono in serie, la capacitanza totale è data da: $\frac{1}{C_T} = \frac{1}{C_1} + \frac{1}{C_2} + \cdots$.

# --hints--

`capacitanceValues()` dovrebbe restituire `3857447`.

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
