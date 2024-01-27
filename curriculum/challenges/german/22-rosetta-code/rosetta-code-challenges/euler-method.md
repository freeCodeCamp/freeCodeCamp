---
id: 59880443fb36441083c6c20e
title: Euler-Methode
challengeType: 1
forumTopicId: 302258
dashedName: euler-method
---

# --description--

Euler's method numerically approximates solutions of first-order ordinary differential equations (ODEs) with a given initial value. It is an explicit method for solving initial value problems (IVPs), as described in <a href="https://www.freecodecamp.org/news/eulers-method-explained-with-examples/" title="Euler's Method Explained with Examples" target="_blank" rel="noopener noreferrer nofollow">this article</a>.

Die ODE muss in der folgenden Form angegeben werden:

<ul style='list-style: none;'>
  <li><big>$\frac{dy(t)}{dt} = f(t,y(t))$</big></li>
</ul>

mit einem Anfangswert

<ul style='list-style: none;'>
  <li><big>$y(t_0) = y_0$</big></li>
</ul>

Um eine numerische Lösung zu erhalten, ersetzen wir die Ableitung auf der linken Seite durch eine Finite-Differenzen-Approximation:

<ul style='list-style: none;'>
  <li><big>$\frac{dy(t)}{dt}  \approx \frac{y(t+h)-y(t)}{h}$</big></li>
</ul>

löse dann für $y(t+h)$:

<ul style='list-style: none;'>
  <li><big>$y(t+h) \approx y(t) + h \, \frac{dy(t)}{dt}$</big></li>
</ul>

was das Gleiche ist wie

<ul style='list-style: none;'>
  <li><big>$y(t+h) \approx y(t) + h \, f(t,y(t))$</big></li>
</ul>

Die Regel der iterativen Lösung lautet also:

<ul style='list-style: none;'>
  <li><big>$y_{n+1} = y_n + h \, f(t_n, y_n)$</big></li>
</ul>

wobei $h$ die Schrittweite, der wichtigste Parameter für die Genauigkeit der Lösung ist. Eine kleinere Schrittweite erhöht zwar die Genauigkeit, aber auch die Berechnungskosten, sodass sie immer von Hand nach dem jeweiligen Problem ausgewählt werden muss.

**Beispiel: Newtonsches Kühlungsgesetz**

Das Newtonsche Abkühlungsgesetz beschreibt, wie ein Objekt mit der Anfangstemperatur $T(t_0) = T_0$ in einer Umgebung mit der Temperatur $T_R$ abkühlt:

<ul style='list-style: none;'>
  <li><big>$\frac{dT(t)}{dt} = -k \, \Delta T$</big></li>
</ul>

oder

<ul style='list-style: none;'>
  <li><big>$\frac{dT(t)}{dt} = -k \, (T(t) - T_R)$</big></li>
</ul>

Sie besagt, dass die Abkühlungsgeschwindigkeit $\\frac{dT(t)}{dt}$ des Objekts proportional zur aktuellen Temperaturdifferenz $\\Delta T = (T(t) - T_R)$ zur Umgebung ist.

Die analytische Lösung, die wir mit der numerischen Näherung vergleichen werden, lautet

<ul style='list-style: none;'>
  <li><big>$T(t) = T_R + (T_0 - T_R) \; e^{-k t}$</big></li>
</ul>

# --instructions--

Implementiere eine Routine der Euler'schen Methode und löse damit das gegebene Beispiel des Newton'schen Abkühlungsgesetzes für drei verschiedene Schrittweiten von:

<ul>
  <li><code>2 s</code></li>
  <li><code>5 s</code> und</li>
  <li><code>10 s</code></li>
</ul>

und vergleiche mit der analytischen Lösung.

**Anfangswerte:**

<ul>
  <li>initial temperature <big>$T_0$</big> shall be <code>100 °C</code></li>
  <li>Zimmertemperatur <big>$T_R$</big> soll <code>20 °C</code> sein</li>
  <li>Kühlkonstante <big>$k$</big> soll <code>0.07</code> sein</li>
  <li>das zu berechnende Zeitintervall muss von <code>0 s</code> bis <code>100 s</code> betragen</li>
</ul>

Der erste Parameter der Funktion ist die Anfangszeit, der zweite Parameter die Anfangstemperatur, der dritte Parameter die verstrichene Zeit und der vierte Parameter die Schrittweite.

# --hints--

`eulersMethod` sollte eine Funktion sein.

```js
assert(typeof eulersMethod === 'function');
```

`eulersMethod(0, 100, 100, 2)` sollte eine Zahl zurückgeben.

```js
assert(typeof eulersMethod(0, 100, 100, 2) === 'number');
```

`eulersMethod(0, 100, 100, 2)` sollte 20.0424631833732 zurückgeben.

```js
assert.equal(eulersMethod(0, 100, 100, 2), 20.0424631833732);
```

`eulersMethod(0, 100, 100, 5)` sollte 20.01449963666907 zurückgeben.

```js
assert.equal(eulersMethod(0, 100, 100, 5), 20.01449963666907);
```

`eulersMethod(0, 100, 100, 10)` sollte 20.000472392 zurückgeben.

```js
assert.equal(eulersMethod(0, 100, 100, 10), 20.000472392);
```

# --seed--

## --seed-contents--

```js
function eulersMethod(x1, y1, x2, h) {

}
```

# --solutions--

```js
function eulersMethod(x1, y1, x2, h) {
  let x = x1;
  let y = y1;

  while ((x < x2 && x1 < x2) || (x > x2 && x1 > x2)) {
    y += h * (-0.07 * (y - 20));
    x += h;
  }

  return y;
}
```
