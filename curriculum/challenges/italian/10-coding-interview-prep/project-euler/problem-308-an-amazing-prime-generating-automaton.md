---
id: 5900f4a11000cf542c50ffb3
title: 'Problema 308: Un fantastico automaton che genera numeri primi'
challengeType: 1
forumTopicId: 301962
dashedName: problem-308-an-amazing-prime-generating-automaton
---

# --description--

Un programma scritto nel linguaggio di programmazione Fractan consiste in una lista di frazioni.

Lo stato interno della Macchina Virtuale Fractan è un numero intero positivo, che è inizialmente impostato a un valore di seed. Ogni iterazione di un programma Fractan moltiplica il numero intero di stato per la prima frazione della lista che lo lascerà un numero intero.

Ad esempio, uno dei programmi Fractran che John Horton Conway ha scritto per la prima generazione consiste delle seguenti 14 frazioni:

$$\frac{17}{91}, \frac{78}{85}, \frac{19}{51}, \frac{23}{38}, \frac{29}{33}, \frac{77}{29}, \frac{95}{23}, \frac{77}{19}, \frac{1}{17}, \frac{11}{13}, \frac{13}{11}, \frac{15}{2}, \frac{1}{7}, \frac{55}{1}$$

Iniziando con il numero intero di seed 2, successive iterazioni del programma producono la sequenza:

$$15, 825, 725, 1925, 2275, 425, \ldots, 68, \mathbf{4}, 30, \ldots, 136, \mathbf{8}, 60, \ldots, 544, \mathbf{32}, 240, \ldots$$

Le potenze di 2 che appaiono in questa sequenza sono $2^2, 2^3, 2^5, \ldots$.

Si può mostrare che tutte le potenze di 2 in questa sequenza hanno esponenti che sono numeri primi e tutti i numeri primi appaiono come esponenti delle potenze di 2, nel giusto ordine!

Se qualcuno usa il programma Fractran qua sopra per risolvere il Problema Progetto Eulero 7 (trovare il ${10001}$ numero primo), quante iterazioni sarebbero necessarie affinché il programma produca $2^{10001^{\text{simo}}\text{ primo}}$?

# --hints--

`primeGeneratingAutomation()` dovrebbe restituire `1539669807660924`.

```js
assert.strictEqual(primeGeneratingAutomation(), 1539669807660924);
```

# --seed--

## --seed-contents--

```js
function primeGeneratingAutomation() {

  return true;
}

primeGeneratingAutomation();
```

# --solutions--

```js
// solution required
```
