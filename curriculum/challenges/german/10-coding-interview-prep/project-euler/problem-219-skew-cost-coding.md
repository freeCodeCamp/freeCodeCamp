---
id: 5900f4481000cf542c50ff5a
title: 'Problem 21: Skew-cost Programmierung'
challengeType: 1
forumTopicId: 301861
dashedName: problem-219-skew-cost-coding
---

# --description--

Lasse $A$ und $B$ Bit-Strings sein (Sequenzen von 0en und 1en).

Falls $A$ gleich ist mit den <u>left</u>most length($A$) Bits von $B$, dann ist $A$ ein Präfix von $B$.

Zum Beispiel ist 00110 ein Präfix von <u>00110</u>1001, aber nicht von 00111 oder 100110.

Ein präfixfreier Code der Größe $n$ ist eine Sammlung von $n$ unterschiedlichen Bit-Strings, so dass kein String ein Präfix eines anderen ist. Zum Beispiel ist dies ein präfixfreier Code der Größe 6:

$$0000, 0001, 001, 01, 10, 11$$

Nehmen wir jetzt an, dass es einen Cent kostet, ein '0' Bit zu übermitteln, aber vier Cent um eine '1' zu senden. Die Gesamtkosten des oben gezeigten vorwahlfreien Codes betragen dann 35 Cent, was bei dem fraglichen verzerrten Preisschema zufällig der günstigste Wert ist. In Kurzform schreiben wir $Cost(6) = 35$.

Was ist $Cost(10^9)$?

# --hints--

`skewCostCoding()` sollte `64564225042` ausgeben.

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
