---
title: Assignment Operators
localeTitle: Operadores de asignación
---
# Operadores de asignación

Los operadores de asignación, como su nombre indica, asignan (o reasignan) valores a una variable. Si bien hay bastantes variaciones en los operadores de asignación, todos se construyen a partir del operador de asignación básica.

## Sintaxis

`x = y;` | Descripción | Necesidad
:---------:|:---------------------:|:---------:  
`x` | Variable | Necesario  
`=` | Operador de asignación | Necesario  
`y` | Valor a asignar a la variable | Necesario

## Ejemplos
```javascript
    let initialVar = 5;   // La inicialización de variables requiere el uso de un operador de asignación 
    
    let newVar = 5; 
    newVar = 6;   // El valor de una variables puede ser modificado usando un operador de asignación 
```

## Variaciones

Los otros operadores de asignación son normalmente métodos abreviados para realizar alguna operación utilizando la variable (indicada por x arriba) y el valor (indicado por y arriba) y luego asignando el resultado a la propia variable.

Por ejemplo, a continuación se muestra la sintaxis del operador de asignación de suma:
```javascript
x += y; 
```

Esto es lo mismo que aplicar el operador de suma y reasignar la suma a la variable original (es decir, x), que puede expresarse mediante el siguiente código:
```javascript
x = x + y; 
```

Para ilustrar esto utilizando valores reales, aquí hay otro ejemplo de uso del operador de asignación de suma:
```javascript
let myVar = 5;   // valor de myVar: 5 
myVar += 7;   // valor de myVar: 12 = 5 + 7 
```

## Lista completa de operadores de asignación de Javascript

Operador | Sintaxis | Versión larga  
------------------------------- | --------- | -------------  
Asignación | x = y | x = y  
Asignación de la suma | x += y | x = x + y  
Asignacion de resta | x -= y | x = x - y  
Asignación de multiplicación | x *= y | x = x * y  
Asignación de división | x /= y | x = x / y  
Asignación de resto | x %= y | x = x % y  
Asignación de exponentes | x **= y | x = x ** y  
Asignación de turno izquierdo | x <<= y | x = x << y
Asignación de turno derecho | x >>= y | x = x >> y  
Asignación de turno a la derecha sin signo | x >>>= y | x = x >>> y  
Asignación AND a nivel de bit | x &= y | x = x & y  
Asignación XOR a nivel de bit | x ^= y | x = x ^ y  
Asignación OR a nivel de bit | x \|= y | x = x \| y

### Más información:

[Enlace MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment_Operators#Assignment)

[Enlace MSDN](https://docs.microsoft.com/en-us/scripting/javascript/reference/assignment-operator-decrement-equal-javascript)
