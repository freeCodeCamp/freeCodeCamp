---
id: 5e4ce2f5ac708cc68c1df261
title: Linearer Kongruenzgenerator
challengeType: 1
forumTopicId: 385266
dashedName: linear-congruential-generator
---

# --description--

A linear congruential generator (LCG) is an <em>algorithm</em> that yields a sequence of pseudo-randomized numbers calculated with a discontinuous piecewise linear equation. All linear congruential generators use this formula:

$$r_{n + 1} = (a \times r_n + c) \bmod m$$

Wobei:

<ul>
<li>$ r_0 $ is a seed.</li>
<li>$r_1$, $r_2$, $r_3$, ..., sind Zufallszahlen.</li>
<li>$a$, $c$, $m$ sind Konstanten.</li>
</ul>

Wenn man die Werte von $a$, $c$ und $m$ mit Sorgfalt wählt, dann erzeugt der Generator eine Gleichverteilung der Ganzzahlen von $0$ bis $m - 1$.

<abbr title="linear congruential generator">LCG</abbr> Zahlen haben eine geringe Qualität. $r_n$ und $r\_{n + 1}$ sind nicht unabhängig, wie es wahre Zufallszahlen sein würden. Jeder, der $r_n$ kennt, kann $r\_{n + 1}$ schätzen, also ist <abbr title="linear congruential generator">LCG</abbr> nicht kryptografisch sicher. Der <abbr title="linear congruential generator">LCG</abbr> ist immer noch gut genug um einfache Aufgaben, wie den Miller-Rabin-Test, oder FreeCell Deals. Zu den Vorteilen der <abbr title="linear congruential generator">LCG</abbr>, man kann eine Sequenz von Zahlen aus dem gleichen $r_0$ einfach reproduzieren. Man kann diese Sequenz auch mit einer anderen Programmiersprache reproduzieren, da die Formel so einfach ist.

# --instructions--

Schreibe eine Funktion, die $r_0,a,c,m,n$ als Parameter nimmt und $r_n$ zurückgibt.

# --hints--

`linearCongGenerator` sollte eine Funktion sein.

```js
assert(typeof linearCongGenerator == 'function');
```

`linearCongGenerator(324, 1145, 177, 2148, 3)` sollte eine Zahl zurückgeben.

```js
assert(typeof linearCongGenerator(324, 1145, 177, 2148, 3) == 'number');
```

`linearCongGenerator(324, 1145, 177, 2148, 3)` sollte `855` zurückgeben.

```js
assert.equal(linearCongGenerator(324, 1145, 177, 2148, 3), 855);
```

`linearCongGenerator(234, 11245, 145, 83648, 4)` sollte `1110` zurückgeben.

```js
assert.equal(linearCongGenerator(234, 11245, 145, 83648, 4), 1110);
```

`linearCongGenerator(85, 11, 1234, 214748, 5)` sollte `62217` zurückgeben.

```js
assert.equal(linearCongGenerator(85, 11, 1234, 214748, 5), 62217);
```

`linearCongGenerator(0, 1103515245, 12345, 2147483648, 1)` sollte `12345` zurückgeben.

```js
assert.equal(linearCongGenerator(0, 1103515245, 12345, 2147483648, 1), 12345);
```

`linearCongGenerator(0, 1103515245, 12345, 2147483648, 2)` sollte `1406932606` zurückgeben.

```js
assert.equal(
  linearCongGenerator(0, 1103515245, 12345, 2147483648, 2),
  1406932606
);
```

# --seed--

## --seed-contents--

```js
function linearCongGenerator(r0, a, c, m, n) {

}
```

# --solutions--

```js
function linearCongGenerator(r0, a, c, m, n) {
    for (let i = 0; i < n; i++) {
        r0 = (a * r0 + c) % m;
    }
    return r0;
}
```
