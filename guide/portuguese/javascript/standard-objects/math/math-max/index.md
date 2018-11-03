---
title: Math Max
localeTitle: Matemática max
---
## Matemática max

`Math.max()` é uma função que retorna o maior valor de uma lista de valores numéricos passados ​​como parâmetros. Se um valor não numérico for passado como parâmetro, `Math.max()` retornará `NaN` .

Uma matriz de valores numéricos pode ser passada como um único parâmetro para `Math.max()` usando `spread (...)` ou `apply` . Qualquer um desses métodos pode, no entanto, falhar quando a quantidade de valores de matriz fica muito alta.

### Sintaxe

```js
Math.max(value1, value2, value3, ...); 
```

### Parâmetros

Números ou matriz limitada de números.

### Valor de retorno

O maior dos valores numéricos fornecidos, ou `NaN` se qualquer valor determinado for não numérico.

### Exemplos

_Números Como Parâmetros_

```js
Math.max(4, 13, 27, 0, -5); // returns 27 
```

_Parâmetro inválido_

```js
Math.max(4, 13, 27, 'eight', -5); // returns NaN 
```

_Matriz como parâmetro, usando a propagação (...)_

```js
let numbers = [4, 13, 27, 0, -5]; 
 
 Math.max(...numbers); // returns 27 
```

_Matriz Como Parâmetro, Usando Aplicar_

```js
let numbers = [4, 13, 27, 0, -5]; 
 
 Math.max.apply(null, numbers); // returns 27 
```

#### Mais Informações:

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max)