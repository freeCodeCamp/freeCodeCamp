---
title: Binomial Distribution
localeTitle: Distribución binomial
---
## Distribución binomial

La distribución binomial describe la probabilidad de tener exactamente `k` éxitos en `n` ensayos independientes de Bernoulli con probabilidad de éxito `p` .

Hay cuatro condiciones que deben cumplirse antes de que podamos usar la distribución de binomail.

1.  Los juicios son independientes.
2.  El número de intentos, `n` , es fijo.
3.  El resultado de cada ensayo puede clasificarse como un éxito o un fracaso.
4.  La probabilidad de éxito, `p` , es la misma para cada prueba.

### Ejemplo

Considere un experimento de lanzar una moneda justa 10 veces. Que el resultado de un "Heads" sea un éxito y el resultado de "Tails" sea un fracaso.

1.  Lanzar una moneda es una prueba del experimento y cada vez que lanzamos una moneda, el resultado obtenido es independiente del resultado de cualquier otra prueba.
2.  Lanzamos la moneda 10 veces (un valor fijo de `n` ).
3.  Hemos decidido considerar "Heads" como un éxito y "Tails" como un fracaso.
4.  La probabilidad de obtener una cara con una moneda justa es 0.5 y esto es igual en cada prueba.

Las cuatro condiciones están satisfechas, por lo tanto, podemos modelar este experimento utilizando la distribución Binomial.

Encontremos la probabilidad de obtener un Jefes exactamente una vez, es decir, 1 éxito.

Hay 10 lanzamientos y cualquiera podría haber resultado en un resultado de Jefes, y cada uno de estos 10 escenarios tiene la misma probabilidad. Por lo tanto, la probabilidad final se puede escribir como: `[# Number of Scenarios] x P(single scenario)`

El primer componente de la ecuación anterior es el número de formas de organizar `k = 1` éxitos entre `n = 10` intentos. El segundo componente es la probabilidad de cualquiera de los cuatro escenarios (igualmente probables).

Considere `P(Single Scenario)` en el caso general de `k` éxitos y `n - k` fallas en `n` intentos. Para encontrar el valor, use la Regla de multiplicación para eventos independientes:

![](https://cdn-media-1.freecodecamp.org/imgr/YXzUPiB.png)

El número de maneras de obtener `k` éxitos de `n` ensayos se puede escribir como **n elige k** :

![](https://cdn-media-1.freecodecamp.org/imgr/AQ3P4vi.png)

Entonces, la fórmula general para obtener la probabilidad de observar exactamente `k` éxitos en `n` ensayos independientes viene dada por:

![](https://cdn-media-1.freecodecamp.org/imgr/ZErXKtQ.png)

Por lo tanto, la probabilidad de obtener exactamente un Heads en los ensayos es:

![](https://cdn-media-1.freecodecamp.org/imgr/fN5wOH2.png)

### Media y varianza

La media de una distribución binomial con `n` ensayos donde `p` es la probabilidad de éxito viene dada por:

![](https://cdn-media-1.freecodecamp.org/imgr/4ji7JXx.png)

y varianza:

![](https://cdn-media-1.freecodecamp.org/imgr/1tPHKHj.png)

#### Más información:

*   [OpenIntro Statistics 3rd Edition (Capítulo 3 - página 145)](https://www.openintro.org/stat/textbook.php?stat_book=os)
*   [Derivando media y varianza de una distribución binomial](https://www.youtube.com/watch?v=8fqkQRjcR1M)