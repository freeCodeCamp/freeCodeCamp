---
title: Access Multi-Dimensional Arrays With Indexes
localeTitle: Acessar matrizes multi-dimensionais com índices
---
## Acessar matrizes multi-dimensionais com índices

Considere o seguinte array multidimensional:

```javascript
var arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]]; 
```

Isto é o que parece em forma de tabela.

| Posição | 0 | 1 | 2 | 3 | | --- | --- | --- | --- | --- | | **0** | 1 | 4 | 7 | 10 | | **1** | 2 | 5 | 8 | 11 | | **2** | 3 | 6 | 9 | 12 |

Agora tudo que você precisa fazer é escolher as coordenadas dos dados que você deseja! Por exemplo, se queremos que `myNum` seja igual a 8, então ...

```javascript
var myNum = arr[2][1]; // Equal to 8 
```

Ou, se você quer que seja igual a 1. Você faz…

```javascript
var myNum = arr[0][0]; // Equal to 1 
```

Primeiro você começa escolhendo em qual coluna o número está, depois escolhe a linha. É como o plano de coordenadas xy!