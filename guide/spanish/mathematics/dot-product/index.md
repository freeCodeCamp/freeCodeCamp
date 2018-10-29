---
title: Dot Product
localeTitle: Producto de punto
---
## Producto de punto

Un producto de puntos es una forma de multiplicar dos vectores para obtener un solo número. Los productos de puntos son comunes en física y álgebra lineal.

Puede escribir el producto de puntos de dos vectores **a** y **b** como **a** · **b** .

Dos vectores deben ser de la misma longitud para tener un producto de puntos.

Para encontrar el producto de puntos, multiplique el elemento `nth` en el primer vector por el elemento `nth` en el segundo vector. Haga esto para todos los elementos. Luego, encuentra la suma de todos esos productos. Esta suma es el producto punto!

### Propiedades de los productos Dot

El producto punto de dos vectores también se puede expresar como `a · b = ||a|| * ||b|| * cos(theta)` . En esta fórmula, `||a||` es la magnitud del vector **a** , y `theta` es el ángulo entre los dos vectores.

Dos vectores ortogonales (también conocidos como perpendiculares) siempre tendrán un producto de punto de 0.

### Ejemplo trabajado

Por ejemplo, digamos que tienes los vectores **a** y **b** . Sean `a = (1 2 3 4)` y `b = (-1 0 1 2)` .

El producto punto sería `(1)(-1) + (2)(0) + (3)(1) + (4)(2) = -1 + 0 + 3 + 8 = 12` . Entonces, en este caso, dirías que **a** · **b** = 12.

### Ejemplo de código

Aquí hay una función de ejemplo en JavaScript. Devuelve el producto punto de dos argumentos vectoriales:

```javascript
/** 
 * @param {array} a - A vector/array of numbers 
 * @param {array} b - A vector/array of numbers with the same length as a 
 * @returns {number} - The dot product of a and b 
 */ 
 function dotProduct(a, b) { 
  // Check if the lengths are the same - if not, there can't be a dot product 
  if (a.length !== b.length) { 
    throw "vector lengths must be equal"; 
  } 
 
  // Create a variable to store the sum as we calculate it 
  let product = 0; 
 
  // Loop through the vectors, calculate products, and add them to the total 
  for (let i = 0; i < a.length; i++) { 
    // You may want to ensure that a[i] and b[i] are both finite numbers 
    product += a[i] * b[i]; 
  } 
 
  return product; 
 } 
```

### Más información:

[Vectores](../vectors/index.md)