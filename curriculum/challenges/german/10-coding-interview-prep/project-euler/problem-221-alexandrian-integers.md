---
id: 5900f4491000cf542c50ff5c
title: 'Problem 221: Alexandrinische ganze Zahlen'
challengeType: 1
forumTopicId: 301864
dashedName: problem-221-alexandrian-integers
---

# --description--

Wir nennen eine positive ganze Zahl $A$ eine "alexandrinische ganze Zahl", wenn es solche ganzen Zahlen $p$, $q$, $r$ gibt, wie:

$$A = p \times q \times r$$

und

$$\frac{1}{A} = \frac{1}{p} + \frac{1}{q} + \frac{1}{r}$$


630 ist zum Beispiel eine alexandrinische ganze Zahl ($p = 5$, $q = −7$, $r = −18$). In der Tat ist 630 die 6. alexandrinische ganze Zahl, die ersten 6 alexandrinischen ganzen Zahlen sind: 6, 42, 120, 156, 420 und 630.

Finde die 150000ste alexandrinische Ganzzahl.

# --hints--

`alexandrianIntegers()` sollte `1884161251122450` zurückgeben.

```js
assert.strictEqual(alexandrianIntegers(), 1884161251122450);
```

# --seed--

## --seed-contents--

```js
function alexandrianIntegers() {

  return true;
}

alexandrianIntegers();
```

# --solutions--

```js
// solution required
```
