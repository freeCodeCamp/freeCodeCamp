---
id: 5900f45b1000cf542c50ff6d
title: 'Problema 238: viaggio della stringa infinita'
challengeType: 1
forumTopicId: 301883
dashedName: problem-238-infinite-string-tour
---

# --description--

Crea una sequenza di numeri usando il generatore pseudo-casuale di numero "Blum Blum Shub":

$$ s_0 = 14025256 \\\\
s_{n + 1} = {s_n}^2 \\; mod \\; 20\\,300\\,713 $$

Concatena questi numeri $s_0s_1s_2\ldots$ per creare una stringa $w$ di lunghezza infinita. Quindi, $w = 14025256741014958470038053646\ldots$

Per un numero intero positivo, $k$, se nessuna sottostringa di $w$ esiste con la somma delle cifre uguale a $k$, allora $p(k)$ è definito come zero. Se almeno una sottostringa di $w$ esiste la cui somma delle cifre è uguale a $k$, definiamo $p(k) = z$ dove $z$ è la posizione iniziale della prima sottostringa con questa proprietà.

Per esempio:

Le sottostringhe 1, 14, 1402, … con le rispettive somme delle sifre 1, 5, 7, … iniziano alla posizione uno, quindi $p(1) = p(5) = p(7) = \ldots = 1$.

Le sottostringhe 4, 402, 4026, … con le rispettive somme delle cifre 4, 6, 24, … iniziano alla posizione 2, quindi $p(4) = p(6) = p(11) = \ldots = 2$.

Le sottostringhe 02, 0252, … con le rispettive somme delle cifre, 2, 9, … iniziano alla posizione 3, quindi $p(2) = p(9) = \ldots = 3$.

Nota che la sottostringa 025 che inizia alla posizione 3, ha una somma delle cifre uguale a 7, ma c'era una sottostringa precedente (iniziante alla posizione 1), con una somma delle cifre uguale a 7, quindi $p(7) = 1$, non 3.

Possiamo verificare che, per $0 &lt; k ≤ {10}^3$, $\sum p(k) = 4742$.

Trova $\sum p(k)$, per $0 &lt; k ≤ 2 \times {10}^{15}$.

# --hints--

`infiniteStringTour()` dovrebbe restituire `9922545104535660`.

```js
assert.strictEqual(infiniteStringTour(), 9922545104535660);
```

# --seed--

## --seed-contents--

```js
function infiniteStringTour() {

  return true;
}

infiniteStringTour();
```

# --solutions--

```js
// solution required
```
