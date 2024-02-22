---
id: 5900f4031000cf542c50ff15
title: >-
  Problema 150: Buscando un arreglo triangular para un subtriángulo teniendo una suma mínima
challengeType: 1
forumTopicId: 301781
dashedName: problem-150-searching-a-triangular-array-for-a-sub-triangle-having-minimum-sum
---

# --description--

In a triangular array of positive and negative integers, we wish to find a sub-triangle such that the sum of the numbers it contains is the smallest possible.

En el ejemplo siguiente, este puede ser fácilmente verificado que el triángulo marcado satisface esta condición teniendo una suma de −42.

<img class="img-responsive center-block" alt="arreglo triangular, con sub-triángulo marcado, teniendo una suma de -42" src="https://cdn.freecodecamp.org/curriculum/project-euler/searching-a-triangular-array-for-a-sub-triangle-having-minimum-sum.gif" style="background-color: white; padding: 10px;" />

Deseamos hacer tal arreglo triangular con mil filas, así que generamos 500500 números pseudo-aleatorios $s_k$ en el rango $±2^{19}$, usando un tipo de generador de números aleatorios (conocido como un Generador Congruencial Lineal) de la siguiente manera:

$$\begin{align}   t := & \\ 0\\\\
  \text{for}\\ & k = 1\\ \text{up to}\\ k = 500500:\\\\   & t := (615949 × t + 797807)\\ \text{modulo}\\ 2^{20}\\\\
  & s_k := t − 219\\\\ \end{align}$$

Así: $s_1 = 273519$, $s_2 = −153582$, $s_3 = 450905$ etc.

Nuestro arreglo triangular esta formado usando los números pseudo-aleatorios así:

$$ s_1 \\\\
s_2\\;s_3 \\\\ s_4\\; s_5\\; s_6 \\\\
s_7\\; s_8\\; s_9\\; s_{10} \\\\ \ldots $$

Sub-triangulos pueden iniciar en cualquier elemento del arreglo y extenderse lejos como nos guste (tomando los dos elementos directamente debajo de ella desde la siguiente fila, los tres elementos directamente abajo de la fila después de eso, y así sucesivamente).

La "suma de un sub-triángulo" se define como la suma de todos los elementos que contiene.

Encuentra la suma más pequeña posible de subtriángulo.

# --hints--

`smallestSubTriangleSum()` debería devolver `-271248680`.

```js
assert.strictEqual(smallestSubTriangleSum(), -271248680);
```

# --seed--

## --seed-contents--

```js
function smallestSubTriangleSum() {

  return true;
}

smallestSubTriangleSum();
```

# --solutions--

```js
// solution required
```
