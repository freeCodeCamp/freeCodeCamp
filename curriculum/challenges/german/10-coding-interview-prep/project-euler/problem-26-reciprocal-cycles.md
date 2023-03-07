---
id: 5900f3861000cf542c50fe99
title: 'Problem 26: Reziproke Zyklen'
challengeType: 1
forumTopicId: 301908
dashedName: problem-26-reciprocal-cycles
---

# --description--

Ein Einheitsbruch enthält 1 im Zähler. Die Dezimaldarstellung der Einheitsbrüche mit den Nennern 2 bis 10 ist gegeben:

<div style='padding-left: 4em; display: inline-grid; grid-template-rows: auto; row-gap: 7px;'><div><sup>1</sup>/<sub>2</sub> = 0.5</div><div><sup>1</sup>/<sub>3</sub> = 0.(3)</div><div><sup>1</sup>/<sub>4</sub> = 0.25</div><div><sup>1</sup>/<sub>5</sub> = 0.2</div><div><sup>1</sup>/<sub>6</sub> = 0.1(6)</div><div><sup>1</sup>/<sub>7</sub> = 0.(142857)</div><div><sup>1</sup>/<sub>8</sub> = 0.125</div><div><sup>1</sup>/<sub>9</sub> = 0.(1)</div><div><sup>1</sup>/<sub>10</sub> = 0.1</div></div>

Dabei bedeutet 0,1(6) 0,166666... und hat einen 1-stelligen wiederkehrenden Zyklus. Er zeigt, dass <sup>1</sup>/<sub>7</sub> einen 6-stelligen wiederkehrenden Zyklus hat.

Finde den Wert von `d` &lt; `n`, für den <sup>1</sup>/<sub>d</sub> den längsten wiederkehrenden Zyklus in seinem Dezimalbruchteil enthält.

# --hints--

`reciprocalCycles(700)` sollte eine Zahl zurückgeben.

```js
assert(typeof reciprocalCycles(700) === 'number');
```

`reciprocalCycles(700)` sollte 659 zurückgeben.

```js
assert(reciprocalCycles(700) == 659);
```

`reciprocalCycles(800)` sollte 743 zurückgeben.

```js
assert(reciprocalCycles(800) == 743);
```

`reciprocalCycles(900)` sollte 887 zurückgeben.

```js
assert(reciprocalCycles(900) == 887);
```

`reciprocalCycles(1000)` sollte 983 zurückgeben.

```js
assert(reciprocalCycles(1000) == 983);
```

# --seed--

## --seed-contents--

```js
function reciprocalCycles(n) {

  return n;
}

reciprocalCycles(1000);
```

# --solutions--

```js
// solution required
```
