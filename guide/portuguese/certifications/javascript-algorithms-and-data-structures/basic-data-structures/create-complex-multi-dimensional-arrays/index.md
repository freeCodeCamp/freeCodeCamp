---
title: Create complex multi-dimensional arrays
localeTitle: Crie matrizes multidimensionais complexas
---
## Crie matrizes multidimensionais complexas

*   A primeira corda - `deep` - deve ser inserida em três níveis de profundidade. Isso significa dentro de exatamente três conjuntos de `[square-brackets]` .

```javascript
let threeLevelArray = ["first level", ["Two levels deep", ["Three levels deep"]]]; 
```

*   Usando esta lógica inserir strings `deep` , `deeper` e `deepest` na matriz de três níveis de profundidade, quatro níveis de profundidade e cinco níveis de profundidade, respectivamente.

## Solução:

```javascript
let myNestedArray = [ 
  // change code below this line 
  ['unshift', false, 1, 2, 3, 'complex', 'nested'], 
  ['loop', 'shift', 6, 7, 1000, 'method'], 
  ['concat', false, true, 'spread', 'array',["deep"]], 
  ['mutate', 1327.98, 'splice', 'slice', 'push', [["deeper"]]], 
  ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth', [[["deepest"]]] ] 
  // change code above this line 
 ]; 

```