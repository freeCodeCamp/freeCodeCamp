---
id: 5900f4021000cf542c50ff13
title: 'Problem 149: Suche nach einer Teilsequenz mit maximaler Summe'
challengeType: 1
forumTopicId: 301778
dashedName: problem-149-searching-for-a-maximum-sum-subsequence
---

# --description--

Betrachtet man die Tabelle unten, ist es leicht zu überprüfen, dass die maximal mögliche Summe der angrenzenden Zahlen in beliebiger Richtung (horizontal, Vertikal, diagonal oder anti-diagonal) ist $16 (= 8 + 7 + 1)$.

$$\begin{array}{|r|r|r|r|} \hline −2 &  5 &  3 & 2 \\\\ \hline 9 & −6 &  5 & 1 \\\\ \hline 3 &  2 &  7 & 3 \\\\ \hline −1 &  8 & −4 & 8 \\\\ \hline \end{array}$$

Wiederholen wir nun die Suche, aber in einem viel größeren Maßstab:

Erzeuge zunächst vier Millionen Pseudo-Zufallszahlen mit einer speziellen Form des sogenannten "Lagged Fibonacci Generator":

Für $1 ≤ k ≤ 55$, $s_k = (100003 − 200003k + 300007{k}^3) \\ (modulo\\ 1000000) − 500000$.

Für $56 ≤ k ≤ 4000000$, $s_k = (s_{k − 24} + s_{k − 55} + 1000000) \\ (modulo\\ 1000000) − 500000$.

Somit ist $s_{10} = -393027$ und $s_{100} = 86613$.

Die Terme von $s$ werden dann in einer 2000×2000-Tabelle angeordnet, wobei die ersten 2000 Zahlen zum Füllen der ersten Zeile (der Reihe nach) verwendet werden, die nächsten 2000 Zahlen zum Füllen der zweiten Zeile und so weiter.

Schließlich ist die größte Summe der (beliebig vielen) benachbarten Einträge in beliebiger Richtung (horizontal, vertikal, diagonal oder antidiagonal) zu ermitteln.

# --hints--

`maximumSubSequence()` sollte `52852124` zurückgeben.

```js
assert.strictEqual(maximumSubSequence(), 52852124);
```

# --seed--

## --seed-contents--

```js
function maximumSubSequence() {

  return true;
}

maximumSubSequence();
```

# --solutions--

```js
// solution required
```
