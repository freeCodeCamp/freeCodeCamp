---
id: 5900f4481000cf542c50ff5a
title: 'Problema 219: codifica skew-cost'
challengeType: 1
forumTopicId: 301861
dashedName: problem-219-skew-cost-coding
---

# --description--

Siano $A$ e $B$ stringhe di bit (sequenze di 0 e 1).

If $A$ is equal to the <u>left</u>most length($A$) bits of $B$, then $A$ is said to be a prefix of $B$.

Ad esempio, 00110 è un prefisso di <u>00110</u>1001, ma non di 00111 o 100110.

Un codice privo di prefisso di dimensione $n$ è una raccolta di $n$ stringhe di bit distinte in modo che nessuna stringa sia un prefisso di qualunque altra. Ad esempio, questo è un codice privo di prefisso di dimensione 6:

$$0000, 0001, 001, 01, 10, 11$$

Ora supponiamo che costi un centesimo trasmettere un bit '0', ma quattro centesimi trasmettere un '1'. Quindi il costo totale del codice privo di prefisso mostrato sopra è 35 centesimi, che risulta essere il più economico possibile per il regime di prezzi non lineare in questione. In breve, scriviamo $Cost(6) = 35$.

Quanto vale $Cost(10^9)$?

# --hints--

`skewCostCoding()` dovrebbe restituire `64564225042`.

```js
assert.strictEqual(skewCostCoding(), 64564225042);
```

# --seed--

## --seed-contents--

```js
function skewCostCoding() {

  return true;
}

skewCostCoding();
```

# --solutions--

```js
// solution required
```
