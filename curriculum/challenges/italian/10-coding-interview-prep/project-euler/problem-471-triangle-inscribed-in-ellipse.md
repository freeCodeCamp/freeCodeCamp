---
id: 5900f5431000cf542c510056
title: 'Problema 471: Triangolo iscritto in ellisse'
challengeType: 1
forumTopicId: 302148
dashedName: problem-471-triangle-inscribed-in-ellipse
---

# --description--

Il triangolo $ΔABC$ è iscritto in un ellisse con una equazione $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$, $0 &lt; 2b &lt; a$, $a$ e $b$ numeri interi.

Sia $r(a, b)$ il raggio del cerchio inscritto di $ΔABC$ quando il cerchio iscritto ha centro $(2b, 0)$ e $A$ ha coordinate $\left(\frac{a}{2}, \frac{\sqrt{3}}{2}b\right)$.

Per esempio, $r(3, 1) = \frac{1}{2}, r(6, 2) = 1, r(12, 3) = 2$.

<img class="img-responsive center-block" alt="triangolo ΔABC inscritto in una ellisse, raggio del cerchio inscritto di ΔABC r(6, 2) = 1" src="https://cdn.freecodecamp.org/curriculum/project-euler/triangle-inscribed-in-ellipse-1.png" style="background-color: white; padding: 10px;" />

<img class="img-responsive center-block" alt="triangolo ΔABC inscritto in una ellisse, raggio del cerchio inscritto di ΔABC r(12, 3) = 2" src="https://cdn.freecodecamp.org/curriculum/project-euler/triangle-inscribed-in-ellipse-2.png" style="background-color: white; padding: 10px;" />

Sia $G(n) = \sum_{a = 3}^n \sum_{b = 1}^{\left\lfloor\frac{a - 1}{2} \right\rfloor} r(a, b)$

Ti è dato $G(10) = 20.59722222$, $G(100) = 19223.60980$ (arrotondato a 10 cifre significative).

Trova $G({10}^{11})$. Dai il risultato sotto forma di stringa in notazione scientifica con 10 cifre significative. Usa una `e` minuscola per separare mantissa ed esponente.

Per $G(10)$ il risultato sarebbe `2.059722222e1`

# --hints--

`triangleInscribedInEllipse()` dovrebbe restituire una stringa.

```js
assert(typeof triangleInscribedInEllipse() === 'string');
```

`triangleInscribedInEllipse()` dovrebbe restituire la stringa `1.895093981e31`.

```js
assert.strictEqual(triangleInscribedInEllipse(), '1.895093981e31');
```

# --seed--

## --seed-contents--

```js
function triangleInscribedInEllipse() {

  return true;
}

triangleInscribedInEllipse();
```

# --solutions--

```js
// solution required
```
