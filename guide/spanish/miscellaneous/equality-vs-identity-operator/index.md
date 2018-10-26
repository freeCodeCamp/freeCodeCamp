---
title: Equality Vs Identity Operator
localeTitle: Operador de Identidad Igualdad Vs
---
En JavaScript hay 2 operadores que podrían usarse para comparar dos valores: _\==_ y _\===_ . Parecen ser exactamente iguales pero funcionan de manera diferente y en algunos casos darán resultados diferentes.

## Operador de equidad

El operador de igualdad (==) compara dos valores después de todas las conversiones de tipo necesarias. Echemos un vistazo a algunos ejemplos:
```
0 == ''             // -> true 
 false == 'false'    // -> false 
```

En el primer ejemplo, tanto 0 como '' (cadena vacía) se someten a conversión automática. Ambos se convierten a dar falsos:
```
false == false 
```

Lo que obviamente es _cierto_ . En el segundo ejemplo, _"falso"_ , una cadena no vacía se evalúa como verdadera haciendo que toda la expresión sea falsa.

## Operador de identidad

En comparación, el operador de identidad (===) devolverá verdadero si y solo si ambos valores que se comparan son del mismo tipo y tienen el mismo valor. Si intentamos comparar valores de dos tipos diferentes, siempre devolverá _falso_ .
```
false === 0            // -> false 
 0 === ''              // -> false 
 5 === 5                  // -> true 
```

Para ser precisos, === comprueba si dos variables hacen referencia al mismo objeto, o en el caso de tipos de valor (como _int_ , _double_ , _String_ , _bool_ , etc.) si ambas tienen el mismo valor.
```
var array1 = [ 5, 6, 7 ]; 
 var array2 = [ 5, 6, 7 ]; 
 var array3 = array2; 
 
 array1 === array2      // -> false 
 array1 == array2      // -> false 
 
 array2 === array3      // -> true 
 array2 == array3      // -> true 
```

Tanto _array1_ como _array2_ tienen el mismo tipo y son iguales, pero la comparación _array1 === array2_ devuelve false cuando se refieren a objetos diferentes. _array2 === array3_ devuelve verdadero cuando ambas variables se refieren al mismo objeto.

## ¿Qué operador debo usar?

Es importante entender la diferencia entre _\==_ y _\===_ pero ¿qué operador se debe usar?

Cuando se utiliza el operador _\==_ , JavaScript realizará todas las conversiones necesarias para comparar dos valores. Parece ser realmente conveniente, pero los efectos de esta conversión pueden ser confusos y hacer que sea muy difícil rastrear errores.

Douglas Crockford, autor del libro _JavaScript: The Good Parts_ sugiere que se debe usar _\=== en_ todas partes, en lugar de en el operador _\==_ para evitar posibles errores. En la mayoría de los casos, debe seguir este consejo, a menos que desee aprovechar específicamente la conversión automática de tipos.