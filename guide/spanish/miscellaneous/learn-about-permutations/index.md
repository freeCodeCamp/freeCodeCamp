---
title: Learn About Permutations
localeTitle: Aprender sobre Permutaciones
---
_Permutación_ es un término matemático para la cantidad de formas en que un grupo de objetos se puede ensamblar en un conjunto. Es similar a otro término matemático, _combinación_ , excepto por una diferencia clave: con permutaciones, el orden de los tiempos en el conjunto marca la diferencia.

Por ejemplo, digamos que estaba sacando números de un sombrero y contando las diferentes combinaciones de tres números. En ese caso, tanto `[1,2,3]` como `[3,2,1]` serían una combinación de `1` , `2` y `3` y se contarían como una combinación.

Sin embargo, si estuviera contando permutaciones de números, contarán como dos instancias diferentes porque los números en cada conjunto están en un orden diferente.

Las permutaciones se pueden calcular de una de dos maneras, dependiendo de si se permiten o no los valores repetidos. Para calcular el número de permutaciones de `n` objetos sin repeticiones, simplemente calcule `n!` , o `n * (n-1) * (n-2) ... * 1` . Esto tiene sentido, porque si escoge un número del sombrero y no lo vuelve a poner antes de elegir el siguiente número, habrá un número menos para elegir.

Para calcular solo una parte del número total de permutaciones (por ejemplo, para encontrar el número de permutaciones de tres dígitos del 1-10 sin repeticiones), solo tiene que multiplicar por la cantidad de opciones que realice. En el caso de los tres dígitos, solo necesitaría multiplicar `10 * 9 * 8` . De la misma manera, si **se** permiten repeticiones (lo que significa que vuelve a poner el número en el sombrero después de seleccionar), multiplicaría `10 * 10 * 10` .