---
title: Bloom Filter
localeTitle: Filtro de floración
---
## Descripción

Un filtro Bloom es una estructura de datos que es similar a un conjunto. El filtro Bloom permite la pregunta _¿Es este ítem un miembro del conjunto?_ para ser respondido rápidamente. El filtro nunca devolverá _No_ si el elemento está en el conjunto; pero, puede devolver _Sí_ si el elemento no está en el conjunto. Este es un inconveniente de usar un filtro Bloom, existe la posibilidad de obtener resultados positivos falsos al verificar si un elemento está en el conjunto. Una ventaja de usar un filtro Bloom es que agregar un elemento al conjunto y verificar si el elemento está en el conjunto es una operación de tiempo constante [O (n)](https://guide.freecodecamp.org/algorithms/algorithm-performance) .

## Ejemplo

El siguiente ejemplo utiliza un filtro Bloom para crear una lista de amigos. La implementación de ejemplo utiliza tres [funciones de hashing](https://guide.freecodecamp.org/miscellaneous/hash-tables-and-hashing-functions) . Las funciones de hashing ingieren una cadena (un nombre de amigo) y calculan un solo valor para la cadena en función del número de puntos en el filtro Bloom.

Crear filtro como una matriz de 10 índices. Un `0` indica que no hay ningún elemento en ese índice.

`[0,0,0,0,0,0,0,0,0,0]`

Un usuario agrega a David a la lista de amigos. La cadena ( `'David'` ) se pone a través de varias funciones de hashing que devuelven `0` , `4` y `8` , respectivamente. Los valores de las funciones de hashing se utilizan para actualizar la matriz de filtros en esos índices.

Los índices de filtro se actualizan utilizando esos valores hash. Un `1` indica que se ha agregado un elemento a ese índice.

`[1,0,0,0,1,0,0,0,1,0]`

Un usuario agrega a Rosie a la lista de amigos. Las funciones de hashing devuelven `3` , `4` y `6` para `'Rosie'` . Los índices de filtro se actualizan utilizando los valores hash.

`[1,0,0,1,1,0,1,0,1,0]`

Hay un cheque si Chuck es un miembro de la lista de amigos. La cadena `'Chuck'` se coloca a través de las funciones de hashing que devuelven `1` , `3` y `6` . Cuando la matriz de filtros se verifica en esos índices, devuelve `0` , `1` y `1` . Debido a que un índice tiene un valor de `0` , Chuck _definitivamente_ no es un miembro de la lista.

Hay un cheque si Maja es un miembro de la lista de amigos. La cadena `'Maja'` se pone a través de las funciones de hashing, devolviendo `0` , `6` y `8` . Cuando la matriz de filtros se verifica en esos índices, devuelve `1` , `1` y `1` . Debido a que los tres índices tienen un valor de `1` , Maja ya _puede_ ser miembro de la lista. Este es un resultado falso positivo.

## Consideraciones

Los filtros Bloom permiten una búsqueda rápida para determinar si un valor es _posiblemente_ un miembro del conjunto o _definitivamente_ no es un miembro del conjunto. Cuantos más elementos se agreguen al Bloom, filtre la tasa de resultados falsos positivos al verificar si un artículo es miembro del conjunto aumentará. Una forma de disminuir la tasa de resultados falsos positivos es aumentar el tamaño de la matriz. Aunque esto es un compromiso porque cuanto mayor sea la matriz, mayor será la memoria que ocupará. Es necesario determinar una tasa aceptable de resultados falsos positivos para un tamaño de matriz dado.

## Otras lecturas

[Algoritmo posterior a la recomendación del médium](https://blog.medium.com/what-are-bloom-filters-1ec2a50c68ff)

[Wikipedia en los filtros Bloom](https://en.wikipedia.org/wiki/Bloom_filter)