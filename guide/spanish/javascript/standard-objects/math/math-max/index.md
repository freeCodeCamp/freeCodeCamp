---
title: Math Max
localeTitle: Matemáticas Max
---
## Matemáticas Max

`Math.max()` es una función que devuelve el valor más grande de una lista de valores numéricos pasados ​​como parámetros. Si se pasa un valor no numérico como parámetro, `Math.max()` devolverá `NaN` .

Se puede pasar una matriz de valores numéricos como un solo parámetro a `Math.max()` usando `spread (...)` o `apply` . Sin embargo, cualquiera de estos métodos puede fallar cuando la cantidad de valores de matriz es demasiado alta.

### Sintaxis

```js
Math.max(value1, value2, value3, ...); 
```

### Parámetros

Números, o arsenal limitado de números.

### Valor de retorno

El mayor de los valores numéricos dados, o `NaN` si algún valor dado no es numérico.

### Ejemplos

_Números como parámetros_

```js
Math.max(4, 13, 27, 0, -5); // returns 27 
```

_Parametro invalido_

```js
Math.max(4, 13, 27, 'eight', -5); // returns NaN 
```

_Array como parámetro, utilizando Spread (…)_

```js
let numbers = [4, 13, 27, 0, -5]; 
 
 Math.max(...numbers); // returns 27 
```

_Array Como Parámetro, Usando Aplicar_

```js
let numbers = [4, 13, 27, 0, -5]; 
 
 Math.max.apply(null, numbers); // returns 27 
```

#### Más información:

[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max)