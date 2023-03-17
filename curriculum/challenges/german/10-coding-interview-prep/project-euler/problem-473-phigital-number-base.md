---
id: 5900f5461000cf542c510058
title: 'Problem 473: Phigitale Zahlenbasis'
challengeType: 1
forumTopicId: 302150
dashedName: problem-473-phigital-number-base
---

# --description--

Lasse $\varphi$ den Goldenen Schnitt sein: $\varphi = \frac{1+\sqrt{5}}{2}.$

Bemerkenswerterweise ist es möglich, jeden positiven Integer als eine Summe von Potenzen von $\varphi$ zu schreiben, selbst wenn wir verlangen, dass jede Potenz von $\varphi$ höchstens einmal in dieser Summe vorkommt.

Selbst dann ist diese Darstellung nicht eindeutig.

Wir können sie eindeutig machen, indem wir verlangen, dass keine Potenzen mit aufeinanderfolgenden Exponenten verwendet werden und dass die Darstellung endlich ist.

Z.B:

$2 = \varphi + \varphi^{-2}$ und $3 = \varphi^{2} + \varphi^{-2}$

Um diese Summe von Potenzen von $\varphi$ darzustellen, verwenden wir eine Reihe von 0en und 1en mit einem Punkt, der angibt, wo die negativen Exponenten beginnen. Wir nennen dies die Darstellung in der phigitalen Zahlenbasis.

So $1 = 1_{\varphi}$, $2 = 10.01_{\varphi}$, $3 = 100.01_{\varphi}$ und $14 = 100100.001001_{\varphi}$. Die Strings, die 1, 2 und 14 in der phigitalen Zahlenbasis darstellen, sind palindromisch, während der String, der 3 darstellt, nicht palindromisch ist (der phigitale Punkt ist nicht das mittlere Zeichen).

Die Summe der positiven ganzen Zahlen, die 1000 nicht überschreiten und deren Zifferndarstellung palindromisch ist, ist 4345.

Finde die Summe der positiven ganzen Zahlen, die nicht größer als $10^{10}$ sind und deren phigitale Darstellung palindromisch ist.

# --hints--

`phigitalNumberBase()` sollte `35856681704365` zurückgeben.

```js
assert.strictEqual(phigitalNumberBase(), 35856681704365);
```

# --seed--

## --seed-contents--

```js
function phigitalNumberBase() {

  return true;
}

phigitalNumberBase();
```

# --solutions--

```js
// solution required
```
