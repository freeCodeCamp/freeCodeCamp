---
id: 5900f3d21000cf542c50fee4
title: 'Problema 101: Polinomiale ottimale'
challengeType: 1
forumTopicId: 301725
dashedName: problem-101-optimum-polynomial
---

# --description--

Se ci vengono presentati i primi k termini di una sequenza è impossibile dire con certezza il valore del prossimo termine, poiché ci sono infinite funzioni polinomiali che possono rappresentare la sequenza.

Ad esempio, prendiamo in considerazione la sequenza delle potenze cubiche. Questa è definita dalla funzione generatrice, $u_n = n^3: 1, 8, 27, 64, 125, 216, \ldots$

Supponiamo che ci siano stati dati soltanto i primi due termini di questa sequenza. Lavorando sul principio che "semplice è meglio" dovremmo assumere una relazione lineare e prevedere che il prossimo termine sarà 15 (differenza comune 7). Anche se ci sono stati presentati i primi tre termini, per lo stesso principio di semplicità, dovremmo ipotizzare una relazione quadratica.

Definiremo $OP(k, n)$ come il $n^{th}$ termine della funzione generatrice polinomiale ottimale per i primi k termini di una sequenza. Dovrebbe essere chiaro che $OP(k, n)$ genererà con precisione i termini della sequenza per $n ≤ k$, e potenzialmente il primo termine errato (FIT) sarà $OP(k, k+1)$; in questo caso lo chiameremo un cattivo OP (BOP).

Di base, se ci fosse stato dato solo il primo termine della sequenza, sarebbe più ragionevole assumere la costanza; cioè, per $n ≥ 2, OP(1, n) = u_1$.

Quindi otterremo i seguenti PO per la sequenza cubica:

$$\begin{array}{ll}   OP(1, n) = 1          & 1, {\color{red}1}, 1, 1, \ldots     \\\\
  OP(2, n) = 7n−6       & 1, 8, {\color{red}{15}}, \ldots     \\\\   OP(3, n) = 6n^2−11n+6 & 1, 8, 27, {\color{red}{58}}, \ldots \\\\
  OP(4, n) = n^3        & 1, 8, 27, 64, 125, \ldots \end{array}$$

Chiaramente non esistono BOP per k ≥ 4. Considerando la somma delle FIT generate dai BOP (indicata in $\color{red}{red}$ sopra), otteniamo 1 + 15 + 58 = 74. Considera la seguente funzione generatrice polinomiale di decimo grado:

$$u_n = 1 − n + n^2 − n^3 + n^4 − n^5 + n^6 − n^7 + n^8 − n^9 + n^{10}$$

Trova la somma delle FIT per i BOP.

# --hints--

`optimumPolynomial()` dovrebbe restituire `37076114526`.

```js
assert.strictEqual(optimumPolynomial(), 37076114526);
```

# --seed--

## --seed-contents--

```js
function optimumPolynomial() {

  return true;
}

optimumPolynomial();
```

# --solutions--

```js
// solution required
```
