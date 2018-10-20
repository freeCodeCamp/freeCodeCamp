---
title: Ternary operator
localeTitle: Operador ternario
---
# Operador ternario ( `?:` :)

El operador ternario devuelve una de las dos expresiones según la condición. Se puede usar como acceso directo para la instrucción if ... else.

## Sintaxis
```
condition_expression ? expression_1 : expression_2 
```

### Parámetro

`condition_expression` Expresión booleana.

`expression_1` Devuelto si `condition_expression` es true.

`expression_2` Devuelto si `condition_expression` es falso.

## Ejemplo
```
// initialize - set true or false here to view different result 
 bool hasFreeSweet = false; 
 
 string str = hasFreeSweet ? "Free sweet!" : "No free sweet."; 
 
 //output in console 
 Console.WriteLine(str); 
```

## Salida
```
if hasFreeSweet == true 
 > Free sweet! 
 
 if hasFreeSweet == false 
 > No free sweet. 

```