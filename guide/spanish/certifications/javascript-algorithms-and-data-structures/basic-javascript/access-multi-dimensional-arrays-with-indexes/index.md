---
title: Access Multi-Dimensional Arrays With Indexes
localeTitle: Acceder a matrices multidimensionales con índices
---
## Acceder a matrices multidimensionales con índices

Considere la siguiente matriz multidimensional:

```javascript
var arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]]; 
```

Esto es lo que parece en forma tabular.

| Posición | 0 | 1 | 2 | 3 | | --- | --- | --- | --- | --- | | **0** | 1 | 4 | 7 | 10 | | **1** | 2 | 5 | 8 | 11 | | **2** | 3 | 6 | 9 | 12 |

¡Ahora todo lo que tiene que hacer es elegir las coordenadas de los datos que desea! Por ejemplo, si queremos que `myNum` igual a 8, entonces ...

```javascript
var myNum = arr[2][1]; // Equal to 8 
```

O, si quieres que sea igual a 1. Lo haces ...

```javascript
var myNum = arr[0][0]; // Equal to 1 
```

Primero comienza seleccionando en qué columna está el número, luego eliges la fila. Es algo así como el plano de coordenadas xy!