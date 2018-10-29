---
title: Jump Search
localeTitle: Saltar búsqueda
---
## Saltar búsqueda

Una búsqueda de salto localiza un elemento en una matriz ordenada saltando k itens y luego verifica si el elemento deseado está entre El salto anterior y el salto actual.

# Peor caso de complejidad

O (√N)

# Trabajos

1.  Defina el valor de k, el número de salto: el tamaño de salto óptimo es √N donde N es la longitud de la matriz
2.  Salte la matriz k-por-k buscando por la condición `Array[i] < valueWanted < Array[i+k]`
3.  Haga una búsqueda lineal entre `Array[i]` y `Array[i + k]`

![Búsqueda de saltos 1](https://i1.wp.com/theoryofprogramming.com/wp-content/uploads/2016/11/jump-search-1.jpg?resize=676%2C290)

# Código

Para ver ejemplos de implementación de código de este método, acceda a este enlace a continuación:

[Saltar búsqueda - OpenGenus / cosmos](https://github.com/OpenGenus/cosmos/tree/master/code/search/jump_search)

# Creditos

[La imagen de matriz de la lógica.](http://theoryofprogramming.com/2016/11/10/jump-search-algorithm/)