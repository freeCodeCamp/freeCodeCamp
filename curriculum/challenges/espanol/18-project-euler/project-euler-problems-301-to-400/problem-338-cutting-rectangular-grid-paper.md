---
id: 5900f4be1000cf542c50ffd1
title: 'Problema 338: Papel de malla rectangular de corte'
challengeType: 1
forumTopicId: 301996
dashedName: problem-338-cutting-rectangular-grid-paper
---

# --description--

A rectangular sheet of grid paper with integer dimensions $w$ × $h$ is given. Its grid spacing is 1.

Cuando cortamos la hoja a lo largo de las líneas de cuadrícula en dos piezas y reorganizamos estás piezas sin superponerse, podemos hacer nuevos rectángulos con diferentes dimensiones.

Por ejemplo, desde una hoja con dimensiones 9 × 4, podemos hacer rectángulos con dimensiones 18 × 2, 12 × 3 y 6 × 6 cortando y reorganizando como a continuación:

<img class="img-responsive center-block" alt="hoja con dimensiones 9 x 4 cortadas en tres diferentes maneras para hacer rectángulos con 18 x 2, dimensiones de 12 x 3 y 6 x 6" src="https://cdn.freecodecamp.org/curriculum/project-euler/cutting-rectangular-grid-paper.gif" style="background-color: white; padding: 10px;" />

Similarmente, desde una hoja con dimensiones 9 × 8, podemos hacer rectángulos con dimensiones 18 × 4 y 12 × 6.

Para un par $w$ y $h$, deje $F(w, h)$ sea el número de rectángulos distintos que se pueden hacer desde una hoja con dimensiones $w$ × $h$. Por ejemplo, $F(2, 1) = 0$, $F(2, 2) = 1$, $F(9, 4) = 3$ y $F(9, 8) = 2$. Note que los rectángulos congruentes a la primera no son contados en $F(w, h)$. Note también que rectángulos con dimensiones $w$ × $h$ y dimensiones $h$ × $w$ no son consideradas distintas.

Para un entero $N$, deje $G(N)$ sea la suma de $F(w, h)$ para todos los pares $w$ y $h$ cuales satisfagan $0 &lt; h ≤ w ≤ N$. Podemos verificar que $G(10) = 55$, $G({10}^3) = 971\\,745$ y $G({10}^5) = 9\\,992\\,617\\,687$.

Encuentra $G({10}^{12})$. Da tu respuesta modulo ${10}^8$.

# --hints--

`cuttingRectangularGridPaper()` debería devolver `15614292`.

```js
assert.strictEqual(cuttingRectangularGridPaper(), 15614292);
```

# --seed--

## --seed-contents--

```js
function cuttingRectangularGridPaper() {

  return true;
}

cuttingRectangularGridPaper();
```

# --solutions--

```js
// solution required
```
