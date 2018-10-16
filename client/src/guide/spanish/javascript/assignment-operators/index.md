---
title: Assignment Operators
localeTitle: Operadores de Asignación
---
# Operadores de Asignación

Los operadores de asignación, como su nombre indica, asignan (o reasignan) valores a una variable. Si bien hay bastantes variaciones en los operadores de asignación, todos se construyen a partir del operador de asignación básica.

## Sintaxis

`x = y;` | Descripción | Necesidad : ---------: |: ---------------------: |: ---------:  
`x` | Variable | Necesario  
`=` | Operador de asignación | Necesario  
`y` | Valor a asignar a la variable | Necesario

## Ejemplos
```
let initialVar = 5;   // Variable initialization requires the use of an assignment operator 
 
 let newVar = 5; 
 newVar = 6;   // Variable values can be modified using an assignment operator 
```

## Variaciones

Los otros operadores de asignación son una abreviatura para realizar alguna operación utilizando la variable (indicada por x arriba) y el valor (indicado por y arriba) y luego asignando el resultado a la propia variable.

Por ejemplo, a continuación se muestra la sintaxis del operador de asignación de suma:
```
x += y; 
```

Esto es lo mismo que aplicar el operador de suma y reasignar la suma a la variable original (es decir, x), que puede expresarse mediante el siguiente código:
```
x = x + y; 
```

Para ilustrar esto utilizando valores reales, aquí hay otro ejemplo de uso del operador de asignación de suma:
```
let myVar = 5;   // value of myVar: 5 
 myVar += 7;   // value of myVar: 12 = 5 + 7 
```

## Lista completa de operadores de asignación de Javascript

Operador | Sintaxis | Versión larga  
\------------------------------- | --------- | -------------  
Asignación | x = y | x = y  
Asignación de la suma | x + = y | x = x + y  
Asignacion de resta | x - = y | x = x - y  
Asignación de multiplicación | x \* = y | x = x \* y  
Asignación de división | x / = y | x = x / y  
Asignación de resto | x% = y | x = x% y  
Asignación de exponentes | x \*\* = y | x = x \*\* y  
Asignación de turno izquierdo | x << = y | x = x << y Asignación de turno derecho | x >> = y | x = x >> y  
Asignación de turno a la derecha sin firmar | x >>> = y | x = x >>> y  
Bitwise Y asignación | x & = y | x = x & y  
Asignación XOR bitwise | x ^ = y | x = x ^ y  
O bitwise asignación | x | = y | x = x | y

### Más información:

[Enlace MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment_Operators#Assignment)

[Enlace MSDN](https://docs.microsoft.com/en-us/scripting/javascript/reference/assignment-operator-decrement-equal-javascript)