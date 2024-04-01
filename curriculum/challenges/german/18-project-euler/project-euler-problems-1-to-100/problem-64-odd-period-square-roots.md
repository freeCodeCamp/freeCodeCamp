---
id: 5900f3ac1000cf542c50febf
title: 'Problem 64: Quadratwurzeln mit ungerader Periode'
challengeType: 1
forumTopicId: 302176
dashedName: problem-64-odd-period-square-roots
---

# --description--

Alle quadratischen Wurzeln sind periodisch, wenn sie als fortlaufende Brüche und in der folgenden Form geschrieben werden können:

$\\displaystyle \\quad \\quad \\sqrt{N}=a_0+\\frac 1 {a_1+\\frac 1 {a_2+ \\frac 1 {a3+ \\dots}}}$

Als Beispiel können wir uns $\\sqrt{23}$ anschauen:

$\\quad \\quad \\sqrt{23}=4+\\sqrt{23}-4=4+\\frac 1 {\\frac 1 {\\sqrt{23}-4}}=4+\\frac 1 {1+\\frac{\\sqrt{23}-3}7}$

Wenn wir fortfahren, würden wir die folgende Erweiterung erhalten:

$\\displaystyle \\quad \\quad \\sqrt{23}=4+\\frac 1 {1+\\frac 1 {3+ \\frac 1 {1+\\frac 1 {8+ \\dots}}}}$

Der Prozess kann wie folgt zusammengefasst werden:

$\\quad \\quad a_0=4, \\frac 1 {\\sqrt{23}-4}=\\frac {\\sqrt{23}+4} 7=1+\\frac {\\sqrt{23}-3} 7$

$\\quad \\quad a_1=1, \\frac 7 {\\sqrt{23}-3}=\\frac {7(\\sqrt{23}+3)} {14}=3+\\frac {\\sqrt{23}-3} 2$

$\\quad \\quad a_2=3, \\frac 2 {\\sqrt{23}-3}=\\frac {2(\\sqrt{23}+3)} {14}=1+\\frac {\\sqrt{23}-4} 7$

$\\quad \\quad a_3=1, \\frac 7 {\\sqrt{23}-4}=\\frac {7(\\sqrt{23}+4)} 7=8+\\sqrt{23}-4$

$\\quad \\quad a_4=8, \\frac 1 {\\sqrt{23}-4}=\\frac {\\sqrt{23}+4} 7=1+\\frac {\\sqrt{23}-3} 7$

$\\quad \\quad a_5=1, \\frac 7 {\\sqrt{23}-3}=\\frac {7 (\\sqrt{23}+3)} {14}=3+\\frac {\\sqrt{23}-3} 2$

$\\quad \\quad a_6=3, \\frac 2 {\\sqrt{23}-3}=\\frac {2(\\sqrt{23}+3)} {14}=1+\\frac {\\sqrt{23}-4} 7$

$\\quad \\quad a_7=1, \\frac 7 {\\sqrt{23}-4}=\\frac {7(\\sqrt{23}+4)} {7}=8+\\sqrt{23}-4$

Man kann sehen, dass sich die Sequenz wiederholt. Zur Übersichtlichkeit verwenden wir die Notation $\\sqrt{23}=\[4;(1,3,1,8)]$, um anzugeben, dass sich der Block (1,3,1,8) unbegrenzt wiederholt.

Die ersten zehn fortgesetzten Brüche, die (irrationale) Quadratwurzeln darstellen, sind:

$\\quad \\quad \\sqrt{2}=\[1;(2)]$, Periode = 1

$\\quad \\quad \\sqrt{3}=\[1;(1,2)]$, Periode = 2

$\\quad \\quad \\sqrt{5}=\[2;(4)]$, Periode = 1

$\\quad \\quad \\sqrt{6}=\[2;(2,4)]$, Periode = 2

$\\quad \\quad \\sqrt{7}=\[2;(1,1,1,4)]$, Periode = 4

$\\quad \\quad \\sqrt{8}=\[2;(1,4)]$, Periode = 2

$\\quad \\quad \\sqrt{10}=\[3;(6)]$, Periode = 1

$\\quad \\quad \\sqrt{11}=\[3;(3,6)]$, Periode = 2

$\\quad \\quad \\sqrt{12}=\[3;(2,6)]$, Periode = 2

$\\quad \\quad \\sqrt{13}=\[3;(1,1,1,1,6)]$, Periode = 5

Für $N \\le 13$ haben genau vier Kettenbrüche eine ungerade Periode.

Wie viele Kettenbrüche für $N \\le n$ haben eine ungerade Periode?

# --hints--

`oddPeriodSqrts(13)` sollte eine Zahl zurückgeben.

```js
assert(typeof oddPeriodSqrts(13) === 'number');
```

`oddPeriodSqrts(500)` sollte `83` zurückgeben.

```js
assert.strictEqual(oddPeriodSqrts(500), 83);
```

`oddPeriodSqrts(1000)` sollte `152` zurückgeben.

```js
assert.strictEqual(oddPeriodSqrts(1000), 152);
```

`oddPeriodSqrts(5000)` sollte `690` zurückgeben.

```js
assert.strictEqual(oddPeriodSqrts(5000), 690);
```

`oddPeriodSqrts(10000)` sollte `1322` zurückgeben.

```js
assert.strictEqual(oddPeriodSqrts(10000), 1322);
```

# --seed--

## --seed-contents--

```js
function oddPeriodSqrts(n) {

  return true;
}

oddPeriodSqrts(13);
```

# --solutions--

```js
function oddPeriodSqrts(n) {
  // Based on https://www.mathblog.dk/project-euler-continued-fractions-odd-period/
  function getPeriod(num) {
    let period = 0;
    let m = 0;
    let d = 1;
    let a = Math.floor(Math.sqrt(num));
    const a0 = a;
    while (2 * a0 !== a) {
      m = d * a - m;
      d = Math.floor((num - m ** 2) / d);
      a = Math.floor((Math.sqrt(num) + m) / d);
      period++;
    }
    return period;
  }

  function isPerfectSquare(num) {
    return Number.isInteger(Math.sqrt(num));
  }

  let counter = 0;
  for (let i = 2; i <= n; i++) {
    if (!isPerfectSquare(i)) {
      if (getPeriod(i) % 2 !== 0) {
        counter++;
      }
    }
  }
  return counter;
}
```
