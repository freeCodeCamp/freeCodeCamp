---
id: 5900f4531000cf542c50ff65
title: 'Problema 230: Parole di Fibonacci'
challengeType: 1
forumTopicId: 301874
dashedName: problem-230-fibonacci-words
---

# --description--

Per due stringhe di cifre, $A$ e $B$, definiamo $F_{A,B}$ come la sequenza ($A, B, AB, BAB, ABBAB, \ldots$) in cui ogni termine è la concatenazione dei due precedenti.

Inoltre, definiamo $D_{A,B}(n)$ come la $n$-sima cifra nel primo termine di $F_{A,B}$ che contiene almeno $n$ cifre.

Esempio:

Sia $A = 1\\,415\\,926\\,535$, $B = 8\\,979\\,323\\,846$. Vogliamo trovare, diciamo, $D_{A,B}(35)$.

I primi termini di $F_{A,B}$ sono:

$$\begin{align}   & 1\\,415\\,926\\,535 \\\\
  & 8\\,979\\,323\\,846 \\\\   & 14\\,159\\,265\\,358\\,979\\,323\\,846 \\\\
  & 897\\,932\\,384\\,614\\,159\\,265\\,358\\,979\\,323\\,846 \\\\ & 14\\,159\\,265\\,358\\,979\\,323\\,846\\,897\\,932\\,384\\,614\\,15\color{red}{9}\\,265\\,358\\,979\\,323\\,846 \end{align}$$

Allora $D_{A,B}(35)$ è la ${35}$-sima cifra nel qunto termine, che è 9.

Ora utilizziamo per $A$ le prime 100 cifre di $π$ dietro il punto decimale:

$$\begin{align}   & 14\\,159\\,265\\,358\\,979\\,323\\,846\\,264\\,338\\,327\\,950\\,288\\,419\\,716\\,939\\,937\\,510 \\\\
  & 58\\,209\\,749\\,445\\,923\\,078\\,164\\,062\\,862\\,089\\,986\\,280\\,348\\,253\\,421\\,170\\,679 \end{align}$$

e per $B$ le prossime cento cifre:

$$\begin{align}   & 82\\,148\\,086\\,513\\,282\\,306\\,647\\,093\\,844\\,609\\,550\\,582\\,231\\,725\\,359\\,408\\,128 \\\\
  & 48\\,111\\,745\\,028\\,410\\,270\\,193\\,852\\,110\\,555\\,964\\,462\\,294\\,895\\,493\\,038\\,196 \end{align}$$

Trova $\sum_{n = 0, 1, \ldots, 17} {10}^n × D_{A,B}((127 + 19n) × 7^n)$.

# --hints--

`fibonacciWords()` dovrebbe restituire `850481152593119200`.

```js
assert.strictEqual(fibonacciWords(), 850481152593119200);
```

# --seed--

## --seed-contents--

```js
function fibonacciWords() {

  return true;
}

fibonacciWords();
```

# --solutions--

```js
// solution required
```
